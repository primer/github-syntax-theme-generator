import test from "ava"
import header from "../../lib/utils/"
import themes from "../../lib/themes"
import pkg from "../../package.json"

var darkThemeHeader = null

test.before(t => {
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
  t.regex(darkThemeHeader, /2016/)
})

test("package author", t => {
  t.regex(darkThemeHeader, new RegExp(pkg.author))
})

test("mentions the license", t => {
  t.regex(darkThemeHeader, /Licensed under MIT/)
})
