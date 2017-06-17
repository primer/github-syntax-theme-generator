const mkdirp = require("mkdirp")
const fs = require("fs")

const mappings = {
  "background": ["editor.background"],
  "foreground": ["editor.foreground"],
  "hoverHighlight": ["editor.hoverHighlightBackground"],
  "linkForeground": ["editorLink.foreground"],
  "selection": ["editor.selectionBackground"],
  "inactiveSelection": ["editor.inactiveSelectionBackground"],
  "selectionHighlightColor": ["editor.selectionHighlightBackground"],
  "wordHighlight": ["editor.wordHighlightBackground"],
  "wordHighlightStrong": ["editor.wordHighlightStrongBackground"],
  "findMatchHighlight": ["editor.findMatchHighlightBackground", "peekViewResult.matchHighlightBackground"],
  "currentFindMatchHighlight": ["editor.findMatchBackground"],
  "findRangeHighlight": ["editor.findRangeHighlightBackground"],
  "referenceHighlight": ["peekViewEditor.matchHighlightBackground"],
  "lineHighlight": ["editor.lineHighlightBackground"],
  "rangeHighlight": ["editor.rangeHighlightBackground"],
  "caret": ["editorCursor.foreground"],
  "invisibles": ["editorWhitespace.foreground"],
  "guide": ["editorIndentGuide.background"],
  "ansiBlack": ["terminal.ansiBlack"],
  "ansiRed": ["terminal.ansiRed"],
  "ansiGreen": ["terminal.ansiGreen"],
  "ansiYellow": ["terminal.ansiYellow"],
  "ansiBlue": ["terminal.ansiBlue"],
  "ansiMagenta": ["terminal.ansiMagenta"],
  "ansiCyan": ["terminal.ansiCyan"],
  "ansiWhite": ["terminal.ansiWhite"],
  "ansiBrightBlack": ["terminal.ansiBrightBlack"],
  "ansiBrightRed": ["terminal.ansiBrightRed"],
  "ansiBrightGreen": ["terminal.ansiBrightGreen"],
  "ansiBrightYellow": ["terminal.ansiBrightYellow"],
  "ansiBrightBlue": ["terminal.ansiBrightBlue"],
  "ansiBrightMagenta": ["terminal.ansiBrightMagenta"],
  "ansiBrightCyan": ["terminal.ansiBrightCyan"],
  "ansiBrightWhite": ["terminal.ansiBrightWhite"]
}

module.exports = (theme) => {
  mkdirp.sync(`build/vscode/${theme.filename}`)

  const vstheme = {
    tokenColors: []
  }

  let themeSettings = null;

  theme.settings.forEach((setting) => {
    const settings = setting.settings
    const scope = setting.scope

    if (!themeSettings && settings) {
      themeSettings = settings
    }

    if (!scope) {
      vstheme.tokenColors.push(setting)
    } else {
      const scopes = setting.scope.split(',').map(s => s.trim())
      const data = {
        scope: scopes.length > 1 ? scopes : scopes.toString(),
        settings: settings
      }
      if (setting.name) {
        data.name = setting.name
      }
      vstheme.tokenColors.push(data)
    }
  })

  if (themeSettings) {
    vstheme.colors = {}
    for (let k in mappings) {
      const v = mappings[k]
      const themeColor = themeSettings[k]
      if (v && v.length && themeColor) {
        v.forEach(n => {
          vstheme.colors[n] = themeColor
        })
      }
    }
  }


  vstheme.name = theme.name

  fs.writeFileSync(`./build/vscode/${theme.filename}/${theme.name}.json`, JSON.stringify(vstheme, null, '\t'))
}
