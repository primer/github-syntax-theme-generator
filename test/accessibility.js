const test = require("ava")
const colorable = require("colorable")
const themes = require("../lib/themes")

const foregrounds = ["foreground", "caret", "invisibles", "findHighlightForeground", "highlightForeground", "bracketContentsForeground", "bracketsForeground", "gutterForeground"]
const ignore = ["selectionBorder", "guide", "activeGuide", "stackGuide"]

function colorTest(background, foreground, message) {
  // Calculate contrast
  const result = colorable([foreground, background], { compact: true, threshold: 0 }).pop()
  if (result.combinations.length > 0) {

    // Get the combination
    const combinations = result.combinations.pop()
    // accessibility scores
    // const accessibility = combinations.accessibility

    // Test
    test(message, t => {
      t.truthy(combinations.contrast > 1, "Contrast is lower than 1; " + combinations.contrast)
      // t.truthy(accessibility.aa, "didn't pass aa critera. contrast: " + combinations.contrast )
      // t.truthy(accessibility.aaLarge, "didn't pass aaLarge critera. contrast: " + combinations.contrast )
      // t.truthy(accessibility.aaa, "didn't pass aaa critera. contrast: " + combinations.contrast )
      // t.truthy(accessibility.aaaLarge, "didn't pass aaaLarge critera. contrast: " + combinations.contrast )
    })
  }
}

// For every theme
themes.forEach(theme => {

  // Pull out the background colors
  const bgColors = theme.settings.filter(setting => {
    return !setting.scope
  }).pop()

  ignore.forEach(i => {
    delete bgColors.settings[i]
  })

  const themeForegrounds = foregrounds.map(foreground => {
    return {
      "scope": foreground,
      "settings": {
        "foreground": bgColors.settings[foreground]
      },
      "name": foreground
    }
  })

  // For each setting
  theme.settings.concat(themeForegrounds).forEach(setting => {
    // make sure it's a scope setting
    if (setting.scope && setting.settings.foreground) {

      let foreground = setting.settings.foreground

      // If the scope has it's own background
      if (setting.settings.background) {
        // check against it's own background color
        colorTest(setting.settings.background, foreground, theme.name + ": " + setting.scope + " (" + foreground + ") on " + setting.settings.background + " background")
        foreground = setting.settings.background
      }

      // For each background color
      Object.keys(bgColors.settings).forEach(bg => {
        if(foregrounds.indexOf(bg) == -1) {
          // Get the background color
          const background = bgColors.settings[bg]
          if (background.indexOf("#") == 0) {
            colorTest(background, foreground, theme.name + ": " + setting.scope + " (" + foreground + ") on " + bg + " (" + background + ") background")
          }
        }
      })
    }
  })
})
