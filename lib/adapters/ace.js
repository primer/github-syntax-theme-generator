const exec = require("child_process").exec
const mkdirp = require("mkdirp")
const fs = require("fs")

module.exports = (theme, variation, name) => {
  mkdirp.sync("build/ace")
  fs.unlink("build/ace/github-" + variation + ".css")
  exec("node node_modules/ace/tool/tmtheme.js github-" + variation + " \"build/tmtheme/" + name + ".tmbundle/Themes/" + name + ".tmTheme\" build/ace", (error, stdout, stderr) => {
    if (error) {
      throw error;
    }
    var css = fs.readFileSync("build/ace/github-" + variation + ".css")
    var reg = new RegExp("\\.ace\-github\-" + variation + " ?\\.", "gi")
    css = css.toString().replace(reg, ".")
    fs.writeFileSync("build/ace/github-" + variation + ".css", css)
    fs.unlink("build/ace/github-" + variation + ".js")
  });
}
