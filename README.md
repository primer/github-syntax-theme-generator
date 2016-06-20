# GitHub syntax theme generators

[![NPM version](https://img.shields.io/npm/v/github-syntax-theme-generator.svg)](https://www.npmjs.org/package/github-syntax-theme-generator)
[![Build Status](https://travis-ci.org/primer/github-syntax-theme-generator.svg?branch=master)](https://travis-ci.org/primer/github-syntax-theme-generator)

> The GitHub syntax theme generator will generate themes for multiple platforms based on the GitHub syntax theme.

## Install

All of the built themes in this package are distributed at separate repositories. It's recommended that you install one of these if you're looking for a specific theme.

### CSS

The CSS syntax theme is based on a custom syntax highlighter in use by GitHub. The prefixes to the classes are `.pl-` for Prettylights.

- [github-syntax-light](https://github.com/primer/github-syntax-light)
- [github-syntax-dark](https://github.com/primer/github-syntax-dark)

### [Ace][ace]

The [Ace][ace] syntax theme is generated using a built in tool by Ace to convert [TextMate][tm] themes to Ace themes.

- [github-ace-light](https://github.com/primer/github-ace-light)
- [github-ace-dark](https://github.com/primer/github-ace-dark)

### [Atom][atom]

The [Atom][atom] theme is built by `apm` converted from the [TextMate][tm] theme.

- [github-atom-light-syntax](https://github.com/primer/github-atom-light-syntax)
- [github-atom-dark-syntax]()https://github.com/primer/github-atom-dark-syntax

### [TextMate][tm]

For [TextMate][tm] or any other TextMate compatible editors, you can use the [github-textmate-theme](https://github.com/primer/github-textmate-theme).


## Development

Clone this repository and after `npm install`. Run

```
$ npm run build
```

This will run the script that will build all the themes.

## Adapters

The theme adapters are located in `./lib/adapters/` directory. Each one will complete a specific task to build that theme.

## Contributing

If you would like to see the theme compiled for another platform, we welcome pull requests.

## License

[MIT](./LICENSE) &copy; [GitHub](https://github.com/)

[ace]: https://github.com/ajaxorg/ace
[tm]: https://github.com/textmate/textmate
[atom]: https://atom.io/
