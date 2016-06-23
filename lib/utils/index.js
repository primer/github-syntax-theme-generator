const package = require("../../package.json")

module.exports.header = (theme) => {
  return `/*!
 * ${theme.name} v${package.version}
 * Copyright (c) 2012 - ${new Date().getFullYear()} ${package.author}
 * Licensed under MIT (https://github.com/primer/github-syntax-theme-generator/blob/master/LICENSE)
 */\n\n`
}
