const exec = require("child_process").exec
const mkdirp = require("mkdirp")

module.exports = (theme, variation, name) => {
  mkdirp.sync("build/atom")
  exec("apm init --theme build/atom/github-" + variation + " --convert \"build/tmtheme/" + name + ".tmbundle/Themes/" + name + ".tmTheme\"", (error, stdout, stderr) => {
    if (error) {
      throw error;
    }
  })
}
