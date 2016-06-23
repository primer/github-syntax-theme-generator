const fs = require("fs")
const plist = require("plist")
const _ = require("lodash")
const mkdirp = require("mkdirp")

module.exports = (theme) => {
  var output = plist.build(theme)
  var dir = "build/tmtheme/" + theme.name + ".tmbundle/Themes/"
  mkdirp.sync(dir)
  fs.writeFileSync(dir + theme.name + ".tmTheme", output)
}
