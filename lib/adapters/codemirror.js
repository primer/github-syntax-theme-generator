const mkdirp = require("mkdirp")
const fs = require("fs")
const sass = require("node-sass")
const utils = require("../utils")

module.exports = (theme) => {
  mkdirp.sync(`build/codemirror`)

  let template = fs.readFileSync("./lib/templates/codemirror.scss").toString()
  let output = utils.header(theme)

  template = template.replace(new RegExp("\\${theme}", "g"), theme.filename)

  theme.settings.forEach((setting) => {
    const settings = setting.settings
    const scope = setting.scope

    // Editor settings
    if (!scope) {
      Object.keys(settings).forEach((key) => {
        template = template.replace(new RegExp("\\${" + key + "}", "g"), settings[key])
      })
      output += template
    } else {
      const singleScope = scope.split(", ")[0]
      if (singleScope && !singleScope.match(/[\.\s\-]/)) {
        output += `\n.cm-s-${theme.filename} .cm-${singleScope} { ${utils.declarations(settings)} }`
      }
    }
  })

  const result = sass.renderSync({
    data: output,
    includePaths: ["./node_modules"]
  })
  fs.writeFileSync(`./build/codemirror/codemirror-${theme.filename}-theme.css`, result.css)
}
