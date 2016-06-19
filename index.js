const theme    = require("./lib/theme")
const adapters = require("./lib/adapters")
const _        = require("lodash")

_.map({
    "light": "GitHub Light",
    "dark": "GitHub Dark"
  }, (name, variation) => {
  Object.keys(adapters).map( k => {
    const adapter = adapters[k]
    adapter.call(this, theme, variation, name)
  })
})
