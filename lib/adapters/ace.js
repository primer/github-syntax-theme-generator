const exec = require("child_process").exec
const mkdirp = require("mkdirp")
const fs = require("fs")
const header = require("../utils").header

module.exports = (theme) => {
  mkdirp.sync("build/ace")
  fs.exists("build/ace/" + theme.filename + ".css", exists => {
    if(exists) {
      fs.unlink("build/ace/" + theme.filename + ".css")
    }
  })
  exec("node node_modules/ace/tool/tmtheme.js " + theme.filename + " \"build/tmtheme/" + theme.name + ".tmbundle/Themes/" + theme.name + ".tmTheme\" build/ace", (error, stdout, stderr) => {
    if (error) {
      throw error;
    }
    var css = fs.readFileSync("build/ace/" + theme.filename + ".css")
    var reg = new RegExp("\\.ace\-" + theme.filename + " ?\\.", "gi")
    css = css.toString().replace(reg, ".")
    css = header(theme) + css
    fs.writeFileSync("build/ace/" + theme.filename + ".css", css)
    fs.unlink("build/ace/" + theme.filename + ".js")
  });
}
