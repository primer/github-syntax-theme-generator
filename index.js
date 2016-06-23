const themes   = require("./lib/themes")
const adapters = require("./lib/adapters")
const _        = require("lodash")

themes.map(theme => {
  Object.keys(adapters).map( k => {
    const adapter = adapters[k]
    adapter.call(this, theme)
  })
})
