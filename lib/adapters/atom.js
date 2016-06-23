const exec = require("child_process").exec
const mkdirp = require("mkdirp")

module.exports = (theme) => {
  mkdirp.sync("build/atom")
  exec("apm init --theme build/atom/" + theme.filename + " --convert \"build/tmtheme/" + theme.name + ".tmbundle/Themes/" + theme.name + ".tmTheme\"", (error, stdout, stderr) => {
    if (error) {
      throw error;
    }
  })
}
