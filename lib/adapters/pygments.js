const fs = require("fs")
const css = require("css")
const mkdirp = require("mkdirp")
const header = require("../utils").header

const cssclass = 'highlight'

const scopesByType = { // pygments.token.STANDARD_TYPES
  "w": null, // Whitespace
  "esc": null, // Escape
  "err": "message.error", // Error
  "x": null, // Other

  "k": "keyword", // Keyword
  "kc": "support.constant", // Keyword.Constant
  "kd": "storage.modifier", // Keyword.Declaration
  "kn": "keyword.control.import", // Keyword.Namespace
  "kp": "support.constant", // Keyword.Pseudo
  "kr": "keyword.other", // Keyword.Reserved
  "kt": "storage.type", // Keyword.Type

  "n": "entity.name", // Name
  "na": "entity.other.attribute-name", // Name.Attribute
  "nb": "entity.name.constant", // Name.Builtin
  "bp": "entity.name.constant", // Name.Builtin.Pseudo
  "nc": "entity.name.class", // Name.Class
  "no": "entity.name.constant", // Name.Constant
  "nd": "entity.name.function", // Name.Decorator
  "ni": "constant.character.escape", // Name.Entity
  "ne": "entity.name.type", // Name.Exception
  "nf": "entity.name.function", // Name.Function
  "fm": "support.function", // Name.Function.Magic
  "py": "variable", // Name.Property
  "nl": "entity.name.label", // Name.Label
  "nn": "entity.name.namespace", // Name.Namespace
  "nx": "variable.other", // Name.Other
  "nt": "entity.name.tag", // Name.Tag
  "nv": "variable", // Name.Variable
  "vc": "variable", // Name.Variable.Class
  "vg": "variable", // Name.Variable.Global
  "vi": "variable", // Name.Variable.Instance
  "vm": "variable", // Name.Variable.Magic

  "l": "constant", // Literal
  "ld": "constant", // Literal.Date

  "s": "string", // String
  "sa": "punctuation.definition.string", // String.Affix
  "sb": "string.quoted.other", // String.Backtick
  "sc": "string.quoted.single", // String.Char
  "dl": "punctuation.definition.string", // String.Delimiter
  "sd": "string.quoted.other", // String.Doc
  "s2": "string.quoted.double", // String.Double
  "se": "constant.character.escape", // String.Escape
  "sh": "string.unquoted", // String.Heredoc
  "si": "source", // String.Interpol
  "sx": "string.quoted.other", // String.Other
  "sr": "string.regexp", // String.Regex
  "s1": "string.quoted.single", // String.Single
  "ss": "constant.other", // String.Symbol

  "m": "constant.numeric", // Number
  "mb": "constant.numeric", // Number.Bin
  "mf": "constant.numeric.float", // Number.Float
  "mh": "constant.numeric.hex", // Number.Hex
  "mi": "constant.numeric.integer", // Number.Integer
  "il": "constant.numeric.integer", // Number.Integer.Long
  "mo": "constant.numeric.octal", // Number.Oct

  "o": "keyword.operator", // Operator
  "ow": "keyword.operator.word", // Operator.Word

  "p": null, // Punctuation

  "c": "comment", // Comment
  "ch": "comment", // Comment.Hashbang
  "cm": "comment.block", // Comment.Multiline
  "cp": "comment", // Comment.Preproc
  "cpf": "comment", // Comment.PreprocFile
  "c1": "comment.single", // Comment.Single
  "cs": "comment", // Comment.Special

  "g": null, // Generic
  "gd": "markup.deleted", // Generic.Deleted
  "ge": "markup.italic", // Generic.Emph
  "gr": "message.error", // Generic.Error
  "gh": "markup.heading", // Generic.Heading
  "gi": "markup.inserted", // Generic.Inserted
  "go": "meta.output", // Generic.Output
  "gp": "meta.output", // Generic.Prompt
  "gs": "markup.bold", // Generic.Strong
  "gu": "entity.name.section", // Generic.Subheading
  "gt": "meta.output", // Generic.Traceback
}


module.exports = (theme) => {
  const settings = theme.settings.find(s => s.scope == null).settings

  const classesByScope = JSON.parse(fs.readFileSync("build/css/" + theme.filename + ".map.json", "utf8"))

  const ast = css.parse(fs.readFileSync("build/css/" + theme.filename + ".css", "utf8"))

  const rules = []

  Object.keys(scopesByType)
    .filter(type => scopesByType[type] != null)
    .forEach(type => {
      let scope = scopesByType[type]

      while (scope !== "" && classesByScope[scope] == null) {
        const path = scope.split(".")
        path.pop()
        scope = path.join(".")
      }

      if (scope === "") {
        throw new Error("Invalid pygments mapping: " + type + " -> " + scopesByType[type])
      }

      const declarations = ast.stylesheet.rules
        .find(rule => rule.type === "rule" && rule.selectors
        .map(selector => selector.trim().split(/\s+/).pop())
        .includes("." + classesByScope[scope]))
        .declarations

      const selector = "." + cssclass + " ." + type

      const rule = rules.find(rule => rule.declarations === declarations)

      if (rule !== undefined) {
        rule.selectors.push(selector)
      } else {
        rules.push({
          "type": "rule",
          "selectors": [ selector ],
          "declarations": declarations
        })
      }
    })

  rules.unshift(
    {
      "type": "rule",
      "selectors": [ "." + cssclass + " .hll" ],
      "declarations": [
        {
          "type": "declaration",
          "property": "background-color",
          "value": settings.highlight
        }
      ]
    },
    {
      "type": "rule",
      "selectors": [ "." + cssclass ],
      "declarations": [
        {
          "type": "declaration",
          "property": "color",
          "value": settings.foreground
        },
        {
          "type": "declaration",
          "property": "background-color",
          "value": settings.background
        }
      ]
    }
  )

  ast.stylesheet.rules = rules

  mkdirp.sync("build/pygments")
  fs.writeFileSync("build/pygments/" + theme.filename + ".css", header(theme) + css.stringify(ast))
}
