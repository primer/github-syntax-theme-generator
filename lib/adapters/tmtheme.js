const fs = require("fs")
const plist = require("plist")
const _ = require("lodash")
const mkdirp = require("mkdirp")

module.exports = (theme, variation, name) => {
  var selectVariant = (hash, variant) => {
    hash = Object.assign({}, hash)

    if (hash.settings) {
      hash.settings = _.assign({}, hash.settings, hash["settings-" + variant])
    }

    Object.keys(hash).map( k => {
      if (k.match(/^settings\-/)) {
        delete hash[k]
      } else {
        hash[k] = (typeof hash[k] === "object" ? selectVariant(hash[k], variant) : hash[k])
      }
    })
    return hash
  }
  theme.settings = theme.settings.map( s => { return selectVariant(s, variation) })
  var output = plist.build(theme)
  var dir = "build/tmtheme/" + name + ".tmbundle/Themes/"
  mkdirp.sync(dir)
  fs.writeFileSync(dir + name + ".tmTheme", output)
}
