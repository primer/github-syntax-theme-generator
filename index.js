const themes = require("./lib/themes")
const adapters = require("./lib/adapters")

themes.map(theme => {
  Object.keys(adapters).map(k => {
    const adapter = adapters[k]
    adapter.call(this, theme)
  })
})
