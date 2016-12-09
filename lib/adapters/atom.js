const mkdirp = require("mkdirp")
const fs = require("fs")

module.exports = (theme) => {
  mkdirp.sync(`build/atom/${theme.filename}`)

  let languages = ""
  let syntaxVariables = fs.readFileSync("./lib/templates/atom/syntax-variables.less").toString()
  const editor = fs.readFileSync("./lib/templates/atom/editor.less")
  const declarationMap = {
    "foreground": "color",
    "background": "background-color"
  }

  function cssDeclarations(settings) {
    let declarations = ""
    Object.keys(settings).forEach((key) => {
      if (key === "fontStyle") {
        const value = settings[key]
        if (value.trim() === "") {
          declarations += "\n  font-weight: normal;\n  font-style: normal;\n  text-decoration: none;"
        } else {
          value.split(" ").forEach((val) => {
            if (val === "bold") {
              declarations += "\n  font-weight: bold;"
            } else if (val === "italic") {
              declarations += "\n  font-style: italic;"
            } else if (val === "underline") {
              declarations += "\n  text-decoration: underline;"
            }
          })
        }
      } else {
        declarations += `\n  ${declarationMap[key]}: ${settings[key]};`
      }
    })
    return declarations
  }

  theme.settings.forEach((setting) => {
    const settings = setting.settings
    const scope = setting.scope

    // Editor settings
    if (!scope) {
      Object.keys(settings).forEach((key) => {
        syntaxVariables = syntaxVariables.replace(new RegExp("\\${" + key + "}", "g"), settings[key])
      })
    } else {
      languages += `\n.${scope.split(" ").join(" .").split(", ").join(",\n")} {${cssDeclarations(settings)}\n}\n`
    }
  })

  fs.writeFileSync(`./build/atom/${theme.filename}/syntax-variables.less`, syntaxVariables)
  fs.writeFileSync(`./build/atom/${theme.filename}/editor.less`, editor)
  fs.writeFileSync(`./build/atom/${theme.filename}/languages.less`, languages)
}
