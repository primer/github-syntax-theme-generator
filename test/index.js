import test from "ava"
import colorable from "colorable"
import theme from "../lib/theme"


var bgColors = theme.settings.filter(setting => {
  return !setting.scope
}).pop()

var foregrounds = ["foreground", "caret"]
var variants    = ["settings", "settings-dark"]

bgColors.settings = Object.assign(bgColors.settings, {
  "diff-deleted": "#ffecec",
  "diff-added": "#eaffea",
  "markdown": "#f7f7f7"
})

// These aren't backgrounds
foregrounds.forEach( foreground => {
  var obj = {
    "scope": foreground,
    "name": foreground
  }
  variants.forEach( variant => {
    obj[variant] = {
      "foreground": bgColors[variant][foreground]
    }
    delete bgColors[variant][foreground]
    delete bgColors[variant].invisibles
  })
  theme.settings.push(obj)
})

function colorTest(background, foreground, message) {
  // Calculate contrast
  var result = colorable([foreground, background], { compact: true, threshold: 0 }).pop()
  if (result.combinations.length > 0) {

    // Get the combination
    var combinations = result.combinations.pop()
    // accessibility scores
    var accessibility = combinations.accessibility

    // Test
    test(message, t => {
      t.truthy(accessibility.aa, "didn't pass aa critera. contrast: " + combinations.contrast )
      t.truthy(accessibility.aaLarge, "didn't pass aaLarge critera. contrast: " + combinations.contrast )
      // t.truthy(accessibility.aaa, "didn't pass aaa critera. contrast: " + combinations.contrast )
      t.truthy(accessibility.aaaLarge, "didn't pass aaaLarge critera. contrast: " + combinations.contrast )
    })
  }
}

theme.settings.forEach( setting => {
  if (setting.scope) {
    // For each theme, light, dark
    variants.forEach( variant => {

      if(setting[variant] && setting[variant].foreground) {

        var foreground = setting[variant].foreground

        if (setting[variant].background) {
          // check against it's own background color
          colorTest(setting[variant].background, foreground, (variant == "settings" ? "Light": "Dark") + " theme: " + setting.scope + " (" + foreground + ") on " + setting[variant].background + " background")
        } else {
          // For each background color
          Object.keys(bgColors[variant]).forEach( bg => {
            // Get the background color
            var background = bgColors[variant][bg]
            colorTest(background, foreground, (variant == "settings" ? "Light": "Dark") + " theme: " + setting.scope + " (" + foreground + ") on " + bg + " (" + background + ") background")
          })
        }
      }
    })
  }
})
