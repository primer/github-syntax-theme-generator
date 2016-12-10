const mkdirp = require("mkdirp")
const fs = require("fs")
const utils = require("../utils")

module.exports = (theme) => {
  mkdirp.sync(`build/atom/${theme.filename}`)

  let languages = ""
  let syntaxVariables = fs.readFileSync("./lib/templates/atom/syntax-variables.less").toString()
  const editor = fs.readFileSync("./lib/templates/atom/editor.less")

  theme.settings.forEach((setting) => {
    const settings = setting.settings
    const scope = setting.scope

    // Editor settings
    if (!scope) {
      Object.keys(settings).forEach((key) => {
        syntaxVariables = syntaxVariables.replace(new RegExp("\\${" + key + "}", "g"), settings[key])
      })
    } else {
      languages += `\n.${scope.split(" ").join(" .").split(", ").join(",\n")} {${utils.declarations(settings)}\n}\n`
    }
  })

  fs.writeFileSync(`./build/atom/${theme.filename}/syntax-variables.less`, syntaxVariables)
  fs.writeFileSync(`./build/atom/${theme.filename}/editor.less`, editor)
  fs.writeFileSync(`./build/atom/${theme.filename}/languages.less`, languages)
}
