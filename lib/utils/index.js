const package = require("../../package.json")

module.exports.header = (theme) => {
  return `/*!
 * ${theme.name} v${package.version}
 * Copyright (c) 2012 - ${new Date().getFullYear()} ${package.author}
 * Licensed under MIT (https://github.com/primer/github-syntax-theme-generator/blob/master/LICENSE)
 */\n\n`
}

module.exports.property = (key) => {
  const map = {
    "foreground": "color",
    "background": "background-color",
    "bold": "font-weight",
    "italic": "font-style",
    "underline": "text-decoration"
  }

  return map[key]
}

module.exports.declarations = (settings) => {
  let declarations = ""
  Object.keys(settings).forEach((key) => {
    if (key === "fontStyle") {
      const value = settings[key]
      if (value.trim() === "") {
        declarations += "\n  font-weight: normal;\n  font-style: normal;\n  text-decoration: none;"
      } else {
        value.split(" ").forEach((val) => {
          declarations += `\n  ${module.exports.property(val)}: ${val};`
        })
      }
    } else {
      declarations += `\n  ${module.exports.property(key)}: ${settings[key]};`
    }
  })
  return declarations
}
