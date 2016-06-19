module.exports = {
  "author" : "GitHub",
  "settings" : [
    {
      "settings" : {
        "selection" : "#c8c8fa",
        "lineHighlight" : "#f5f5f5",
        "background" : "#fff",
        "foreground" : "#333",
        "invisibles" : "#c0c0c0",
        "caret" : "#000"
      },
      "settings-dark" : {
        "background" : "#20272b",
        "foreground" : "#ddd"
      }
    },
    {
      "scope" : "comment",
      "settings" : {
        "foreground" : "#969896"
      },
      "name" : "Comment"
    },
    {
      "scope" : "constant, variable.other.constant",
      "settings" : {
        "foreground" : "#0086b3"
      },
      "settings-dark" : {
        "foreground" : "#0099cd"
      },
      "name" : "Constant"
    },
    {
      "scope" : "keyword.operator.symbole, keyword.other.mark",
      "name": "Clojure workaround; don't highlight these separately from their enclosing scope",
      "settings": {}
    },
    {
      "scope" : "entity, entity.name",
      "settings" : {
        "fontStyle" : "",
        "foreground" : "#795da3"
      },
      "settings-dark" : {
        "foreground" : "#9774cb"
      },
      "name" : "Entity"
    },
    {
      "scope": "variable.parameter.function",
      "settings" : {
        "foreground" : "#333"
      },
      "settings-dark" : {
        "foreground" : "#ddd"
      }
    },
    {
      "scope": "entity.name.tag",
      "settings" : {
        "fontStyle" : "",
        "foreground" : "#63a35c"
      },
      "settings-dark" : {
        "foreground" : "#7bcc72"
      }
    },
    {
      "scope" : "keyword",
      "settings" : {
        "fontStyle" : "",
        "foreground" : "#a71d5d"
      },
      "settings-dark" : {
        "foreground" : "#cc2372"
      },
      "name" : "Keyword"
    },
    {
      "scope" : "storage, storage.type",
      "settings" : {
        "foreground" : "#a71d5d"
      },
      "settings-dark" : {
        "foreground" : "#cc2372"
      },
      "name" : "Storage"
    },
    {
      "scope": "storage.modifier.package, storage.modifier.import, storage.type.java",
      "settings": {
        "foreground": "#333"
      },
      "settings-dark" : {
        "foreground" : "#ddd"
      }
    },
    {
      "scope" : "string, punctuation.definition.string, string punctuation.section.embedded source",
      "settings" : {
        "fontStyle" : "",
        "foreground" : "#183691"
      },
      "settings-dark" : {
        "foreground" : "#3c66e2"
      },
      "name" : "String"
    },
    {
      "name": "Ada workaround; don't highlight imports as strings",
      "scope": "string.unquoted.import.ada",
      "settings": {}
    },
    {
      "scope" : "support",
      "settings" : {
        "fontStyle" : "",
        "foreground" : "#0086b3"
      },
      "settings-dark" : {
        "foreground" : "#0099cd"
      },
      "name" : "Support"
    },
    {
      "scope": "meta.property-name",
      "settings" : {
        "fontStyle" : "",
        "foreground" : "#0086b3"
      },
      "settings-dark" : {
        "foreground" : "#0099cd"
      }
    },
    {
      "scope" : "variable",
      "settings" : {
        "fontStyle" : "",
        "foreground" : "#ed6a43"
      },
      "settings-dark" : {
        "foreground" : "#fb8764"
      },
      "name" : "Variable"
    },
    {
      "scope": "variable.other",
      "settings": {
        "foreground": "#333"
      },
      "settings-dark" : {
        "foreground" : "#ddd"
      }
    },
    {
      "scope" : "invalid.deprecated",
      "settings" : {
        "fontStyle" : "bold italic underline",
        "foreground" : "#b52a1d"
      },
      "settings-dark" : {
        "foreground" : "#e63525"
      },
      "name" : "Invalid – Deprecated"
    },
    {
      "scope" : "invalid.illegal",
      "settings" : {
        "fontStyle" : "italic underline",
        "background" : "#b52a1d",
        "foreground" : "#f8f8f8"
      },
      "settings-dark" : {
        "background" : "#e63525"
      },
      "name" : "Invalid – Illegal"
    },
    {
      "scope" : "string source",
      "settings" : {
        "fontStyle" : "",
        "foreground" : "#333"
      },
      "settings-dark" : {
        "foreground" : "#ddd"
      },
      "name" : "String embedded-source"
    },
    {
      "scope" : "string variable",
      "settings" : {
        "fontStyle" : "",
        "foreground" : "#0086b3"
      },
      "settings-dark" : {
        "foreground" : "#0099cd"
      },
      "name" : "String variable"
    },
    {
      "scope" : "string.regexp",
      "settings" : {
        "fontStyle" : "",
        "foreground" : "#183691"
      },
      "settings-dark" : {
        "foreground" : "#3c66e2"
      },
      "name" : "String.regexp"
    },
    {
      "scope" : "string.regexp.character-class, string.regexp constant.character.escape, string.regexp source.ruby.embedded, string.regexp string.regexp.arbitrary-repitition",
      "settings" : {
        "foreground" : "#183691"
      },
      "settings-dark" : {
        "foreground" : "#3c66e2"
      },
      "name" : "String.regexp.«special»"
    },
    {
      "scope" : "string.regexp constant.character.escape",
      "settings" : {
        "fontStyle" : "bold",
        "foreground" : "#63a35c"
      },
      "settings-dark" : {
        "foreground" : "#7bcc72"
      },
      "name" : "String.regexp constant.character.escape"
    },
    {
      "scope" : "support.constant",
      "settings" : {
        "fontStyle" : "",
        "foreground" : "#0086b3"
      },
      "settings-dark" : {
        "foreground" : "#0099cd"
      },
      "name" : "Support.constant"
    },
    {
      "scope" : "support.variable",
      "settings" : {
        "foreground" : "#0086b3"
      },
      "settings-dark" : {
        "foreground" : "#0099cd"
      },
      "name" : "Support.variable"
    },
    {
      "scope": "meta.module-reference",
      "settings" : {
        "foreground" : "#0086b3"
      },
      "settings-dark" : {
        "foreground" : "#0099cd"
      },
      "name": "meta module-reference"
    },
    {
      "scope" : "markup.list",
      "settings" : {
        "foreground" : "#693a17"
      },
      "settings-dark" : {
        "foreground" : "#c26b2b"
      },
      "name" : "Markup.list"
    },
    {
      "scope" : "markup.heading, markup.heading entity.name",
      "settings" : {
        "fontStyle" : "bold",
        "foreground" : "#1d3e81"
      },
      "settings-dark" : {
        "foreground" : "#264ec5"
      },
      "name" : "Markup.heading"
    },
    {
      "scope" : "markup.quote",
      "settings" : {
        "foreground" : "#008080"
      },
      "settings-dark" : {
        "foreground" : "#00acac"
      },
      "name" : "Markup.quote"
    },
    {
      "scope" : "markup.italic",
      "settings" : {
        "fontStyle" : "italic",
        "foreground" : "#333"
      },
      "settings-dark" : {
        "foreground" : "#ddd"
      },
      "name" : "Markup.italic"
    },
    {
      "scope" : "markup.bold",
      "settings" : {
        "fontStyle" : "bold",
        "foreground" : "#333"
      },
      "settings-dark" : {
        "foreground" : "#ddd"
      },
      "name" : "Markup.bold"
    },
    {
      "scope" : "markup.raw",
      "settings" : {
        "fontStyle" : "",
        "foreground" : "#0086b3"
      },
      "settings-dark" : {
        "foreground" : "#0099cd"
      },
      "name" : "Markup.raw"
    },
    {
      "scope" : "markup.deleted, meta.diff.header.from-file",
      "settings" : {
        "background": "#ffecec",
        "foreground" : "#bd2c00"
      },
      "name" : "Markup.deleted"
    },
    {
      "scope": "markup.inserted, meta.diff.header.to-file",
      "settings" : {
        "background": "#eaffea",
        "foreground" : "#55a532"
      },
      "name" : "Markup.inserted"
    },
    {
      "scope": "meta.diff.range",
      "settings" : {
        "foreground" : "#795da3",
        "fontStyle": "bold"
      },
      "settings-dark" : {
        "foreground" : "#9774cb"
      }
    },
    {
      "scope": "meta.diff.header",
      "settings" : {
        "foreground" : "#0086b3"
      },
      "settings-dark" : {
        "foreground" : "#0099cd"
      }
    },
    {
      "scope" : "meta.separator",
      "settings" : {
        "fontStyle" : "bold",
        "foreground" : "#1d3e81"
      },
      "settings-dark" : {
        "foreground": "#264ec5"
      },
      "name" : "Meta.separator"
    },
    {
      "name": "Output",
      "scope": "meta.output",
      "settings": {
        "foreground": "#1d3e81"
      },
      "settings-dark" : {
        "foreground": "#264ec5"
      }
    }
  ],
  "comment" : "GitHub Light syntax theme",
  "name" : "GitHub Light",
  "semanticClass" : "theme.light.github",
  "uuid": "A1C4DFA0-7031-11E4-9803-0800200C9A66"
}
