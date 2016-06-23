module.exports = {
  "author" : "GitHub",
  "settings" : [
    {
      "settings" : {
        "background" : "#fff",
        "caret" : "#000",
        "foreground" : "#333",
        "invisibles" : "#c0c0c0",
        "lineHighlight" : "#f5f5f5",
        "selection" : "#c8c8fa",
        "inactiveSelection" : "#f5f5f5",
        "selectionBorder" : "#f5f5f5",
        "findHighlight" : "#ed6a43",
        "findHighlightForeground" : "#fff",
        "guide" : "#c0c0c0",
        "activeGuide" : "#333",
        "stackGuide" : "#acacac",
        "highlight" : "#464a4d",
        "popupCss" : "<![CDATA[html { background-color: #e0e0e0; } h1, h2, h3, h4, h5, h6 { color: #1d3e81; margin-top: 0.2em; margin-bottom: 0.2em; } h1 { font-size: 1.5em; } h2 { font-size: 1.4em; } h3 { font-size: 1.3em; } h4 { font-size: 1.2em; } h5 { font-size: 1.1em; } h6 { font-size: 1em; } blockquote { color: #008080; display: block; font-style: italic; } pre { display: block; } a { color: #183691; font-style: underline; } body { color: #333; background-color: #fff; margin: 1px; font-size: 1em; padding: 0.2em; } .danger { color: #b52a1d; } .important, .attention { color: #795da3; } .caution, .warning { color: #ed6a43; } .note { color: #693a17; }]]>",
        "highlightForeground" : "#464a4d",
        "tagsOptions" : "underline",
        "bracketContentsOptions" : "underline",
        "bracketContentsForeground" : "#181818",
        "bracketsOptions" : "underline",
        "bracketsForeground" : "#181818",
        "gutterForeground" : "#333"
      },
      "settings-dark" : {
        "background" : "#20272b",
        "caret" : "#fff",
        "foreground" : "#ddd",
        "invisibles" : "#6e7880",
        "lineHighlight" : "#464a4d",
        "selection" : "#832563",
        "inactiveSelection" : "#464a4d",
        "selectionBorder" : "#464a4d",
        "findHighlight" : "#fb8764",
        "findHighlightForeground" : "#20272b",
        "guide" : "#6e7880",
        "activeGuide" : "#ddd",
        "stackGuide" : "#828c93",
        "highlight" : "#f5f5f5",
        "popupCss" : "<![CDATA[html { background-color: #39464d; } h1, h2, h3, h4, h5, h6 { color: #264ec5; margin-top: 0.2em; margin-bottom: 0.2em; } h1 { font-size: 1.5em; } h2 { font-size: 1.4em; } h3 { font-size: 1.3em; } h4 { font-size: 1.2em; } h5 { font-size: 1.1em; } h6 { font-size: 1em; } blockquote { color: #00acac; display: block; font-style: italic; } pre { display: block; } a { color: #3c66e2; font-style: underline; } body { color: #ddd; background-color: #20272b; margin: 1px; font-size: 1em; padding: 0.2em; } .danger { color: #e63525; } .important, .attention { color: #9774cb; } .caution, .warning { color: #fb8764; } .note { color: #c26b2b; }]]>",
        "highlightForeground" : "#f5f5f5",
        "tagsOptions" : "underline",
        "bracketContentsOptions" : "underline",
        "bracketContentsForeground" : "#eee",
        "bracketsOptions" : "underline",
        "bracketsForeground" : "#eee",
        "gutterForeground" : "#ddd"
      }
    },
    {
      "scope" : "comment, punctuation.definition.comment, string.comment",
      "settings" : {
        "foreground" : "#969896"
      },
      "name" : "Comment"
    },
    {
      "scope" : "constant, entity.name.constant, variable.other.constant, variable.language",
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
      "name" : "Clojure workaround; don't highlight these separately from their enclosing scope",
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
      "scope" : "variable.parameter.function",
      "settings" : {
        "foreground" : "#333"
      },
      "settings-dark" : {
        "foreground" : "#ddd"
      }
    },
    {
      "scope" : "entity.name.tag",
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
      "scope" : "storage.modifier.package, storage.modifier.import, storage.type.java",
      "settings": {
        "foreground" : "#333"
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
      "name" : "Ada workaround; don't highlight imports as strings",
      "scope" : "string.unquoted.import.ada",
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
      "scope" : "meta.property-name",
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
      "scope" : "variable.other",
      "settings": {
        "foreground" : "#333"
      },
      "settings-dark" : {
        "foreground" : "#ddd"
      }
    },
    {
      "scope" : "invalid.broken",
      "settings" : {
        "fontStyle" : "bold italic underline",
        "foreground" : "#b52a1d"
      },
      "settings-dark" : {
        "foreground" : "#e63525"
      },
      "name" : "Invalid - Broken"
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
      "scope" : "invalid.unimplemented",
      "settings" : {
        "fontStyle" : "bold italic underline",
        "foreground" : "#b52a1d"
      },
      "settings-dark" : {
        "foreground" : "#e63525"
      },
      "name" : "Invalid - Unimplemented"
    },
    {
      "scope" : "message.error",
      "settings" : {
        "foreground" : "#b52a1d"
      },
      "settings-dark" : {
        "foreground" : "#e63525"
      }
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
      "scope" : "source.regexp, string.regexp",
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
      "scope" : "meta.module-reference",
      "settings" : {
        "foreground" : "#0086b3"
      },
      "settings-dark" : {
        "foreground" : "#0099cd"
      },
      "name" : "meta module-reference"
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
      "scope" : "markup.deleted, meta.diff.header.from-file, punctuation.definition.deleted",
      "settings" : {
        "background" : "#ffecec",
        "foreground" : "#bd2c00"
      },
      "name" : "Markup.deleted"
    },
    {
      "scope" : "markup.inserted, meta.diff.header.to-file, punctuation.definition.inserted",
      "settings" : {
        "background" : "#eaffea",
        "foreground" : "#55a532"
      },
      "name" : "Markup.inserted"
    },
    {
      "scope" : "markup.changed, punctuation.definition.changed",
      "settings" : {
        "background" : "#ffe3b4",
        "foreground" : "#ef9700"
      }
    },
    {
      "scope" : "markup.ignored, markup.untracked",
      "settings" : {
        "foreground" : "#d8d8d8",
        "background" : "#808080"
      }
    },
    {
      "scope" : "meta.diff.range",
      "settings" : {
        "foreground" : "#795da3",
        "fontStyle" : "bold"
      },
      "settings-dark" : {
        "foreground" : "#9774cb"
      }
    },
    {
      "scope" : "meta.diff.header",
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
        "foreground" : "#264ec5"
      },
      "name" : "Meta.separator"
    },
    {
      "name" : "Output",
      "scope" : "meta.output",
      "settings": {
        "foreground" : "#1d3e81"
      },
      "settings-dark" : {
        "foreground" : "#264ec5"
      }
    },
    {
      "scope" : "brackethighlighter.tag, brackethighlighter.curly, brackethighlighter.round, brackethighlighter.square, brackethighlighter.angle, brackethighlighter.quote",
      "settings" : {
        "foreground" : "#595e62"
      },
      "settings-dark" : {
        "foreground" : "#e1e1e1"
      }
    },
    {
      "scope" : "brackethighlighter.unmatched",
      "settings" : {
        "foreground" : "#b52a1d"
      },
      "settings-dark" : {
        "foreground" : "#e63525"
      }
    },
    {
      "scope" : "sublimelinter.mark.error",
      "settings" : {
        "foreground" : "#b52a1d"
      },
      "settings-dark" : {
        "foreground" : "#e63525"
      }
    },
    {
      "scope" : "sublimelinter.mark.warning",
      "settings" : {
        "foreground" : "#ed6a43"
      },
      "settings-dark" : {
        "foreground" : "#fb8764"
      }
    },
    {
      "scope" : "sublimelinter.gutter-mark",
      "settings" : {
        "foreground" : "#c0c0c0"
      },
      "settings-dark" : {
        "foreground" : "#6e7880"
      }
    },
    {
      "scope" : "constant.other.reference.link, string.other.link",
      "settings" : {
        "foreground" : "#183691",
        "fontStyle" : "underline"
      },
      "settings-dark" : {
        "foreground" : "#3c66e2",
        "fontStyle" : "underline"
      }
    }
  ],
  "comment" : "GitHub Light syntax theme",
  "comment-dark" : "GitHub Dark syntax theme",
  "name" : "GitHub Light",
  "name-dark" : "GitHub Dark",
  "semanticClass" : "theme.light.github",
  "semanticClass-dark" : "theme.dark.github",
  "uuid" : "A1C4DFA0-7031-11E4-9803-0800200C9A66",
  "uuid-dark" : "334E03C2-391A-11E6-AC61-9E71128CAE77"
}
