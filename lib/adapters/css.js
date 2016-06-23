const fs = require("fs")
const _  = require("lodash")
const mkdirp = require("mkdirp")
const header = require("../utils").header

module.exports = (theme) => {

  var settings = _.filter(theme.settings, t => { return t["scope"] != null })

  var convertAttributes = a => {
    var attributes = {}
    switch (a.fontStyle) {
      case "bold":
        attributes["font-weight"] = "bold"
        break;
      case "italic":
        attributes["font-style"] = "italic"
        break;
      case "underline":
        attributes["text-decoration"] = "underline"
        break;
    }

    if (a.foreground) {
      attributes["color"] = a.foreground
    }

    if (a.background) {
      attributes["background-color"] = a.background
    }

    return attributes
  }

  var generateScopeClass = (scope, classes) => {
    var candidate = "pl-" + scope.split(".").map( s => { return s[0]}).join("")
    var suffix = ""
    var cssClass = candidate + "" + suffix
    while(classes.indexOf(cssClass) >= 0) {
      var suffix = suffix || 0
      suffix++
      cssClass = candidate + "" + suffix
    }
    classes.push(cssClass)
    return cssClass
  }

  var selectorsByStyle = {},
      combinatorScopes = new Set(),
      classes = [],
      classesByScope = {}

  settings.map( t => {
    var style = convertAttributes(t.settings)

    var selectors = t.scope.split(",").map( s => { return s.trim() })
    if (selectors.length != 0 && selectors != ["none"]) {

      selectorsByStyle[JSON.stringify(style)] = _.union(selectorsByStyle[JSON.stringify(style)], selectors)

      selectors.map( selector => {
        var scopes = selector.split(" ")
        if(scopes.length >= 2) {
          combinatorScopes = _.union(combinatorScopes, scopes)
        }
      })
    }
  })

  _.map(selectorsByStyle, (selectors, style) => {
    style = JSON.parse(style)

    var scopesWithoutClasses = _.difference(_.uniq(_.flattenDeep(selectors.map( l => { return l.split(" ") }))), Object.keys(classesByScope))

    var sharedScopes = _.difference(scopesWithoutClasses, combinatorScopes)
    var uniqueScopes = _.intersection(scopesWithoutClasses, combinatorScopes)

    if (sharedScopes.length > 0) {
      var cssClass = generateScopeClass(sharedScopes.sort()[0], classes)
      sharedScopes.map( scope => {
        classesByScope[scope] = cssClass
      })
    }

    uniqueScopes.map( scope => {
      classesByScope[scope] = generateScopeClass(scope, classes)
    })
  })

  rules = _.map(selectorsByStyle, (selectors, style) => {
    style = JSON.parse(style)

    var scopeSelectorsByCss = _.groupBy(selectors, selector => {
      var scopes = selector.split(" ")
      classes = scopes.map( s => { return classesByScope[s] })
      return classes.map( c => { return "." + c }).join(" ")
    })

    return {
      "style": style,
      "selectors": _.map(scopeSelectorsByCss, (scopes, css) => { return { "css": css, "scopes": scopes }})
    }
  })

  var output = header(theme)
  rules.map(rule => {
    if (Object.keys(rule.style).length != 0) {
      output += rule.selectors.map( selector => {
        return selector.css + " /* " + selector.scopes.join(", ") + " */"
      }).join(",\n")
      output += " {\n"
      output += _.map(rule.style, (v, k) => { return "  " + k + ": " + v + ";" }).join("\n")
      output += "\n}\n\n"
    }
  })
  mkdirp.sync("build/css")
  fs.writeFileSync("build/css/" + theme.filename + ".map.json", JSON.stringify(classesByScope))
  fs.writeFileSync("build/css/" + theme.filename + ".css", output)
}
