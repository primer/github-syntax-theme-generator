const test = require("ava")
const header = require("../../lib/utils/")
const themes = require("../../lib/themes")
const pkg = require("../../package.json")

let darkThemeHeader = null

test.before(() => {
  darkThemeHeader = header.header(themes[0])
})

test("license comment", t => {
  t.regex(darkThemeHeader, /\/\*!/, "Header is missing the license special comment /*!")
})

test("theme name", t => {
  t.regex(darkThemeHeader, /GitHub Dark/)
})

test("the current package version", t => {
  t.regex(darkThemeHeader, new RegExp(pkg.version))
})

test("correct year", t => {
  t.regex(darkThemeHeader, new RegExp(new Date().getFullYear()))
})

test("package author", t => {
  t.regex(darkThemeHeader, new RegExp(pkg.author))
})

test("mentions the license", t => {
  t.regex(darkThemeHeader, /Licensed under MIT/)
})
