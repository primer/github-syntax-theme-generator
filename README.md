# GitHub syntax theme generators

[![NPM version](https://img.shields.io/npm/v/github-syntax-theme-generator.svg)](https://www.npmjs.org/package/github-syntax-theme-generator)
[![Build Status](https://travis-ci.org/primer/github-syntax-theme-generator.svg?branch=master)](https://travis-ci.org/primer/github-syntax-theme-generator)

> The GitHub syntax theme generator will generate themes for multiple platforms based on the GitHub syntax theme.

## Install

This repository is distributed with [npm][npm]. After [installing npm][install-npm], you can install `octicons` with this command.

```
$ npm install --save octicons
```


This repository contains the syntax highlighting theme used on github.com and
gist.github.com. It is made available as a CSS stylesheet,
[Ace](http://ace.c9.io) stylesheet, Atom theme, and TextMate bundle.

## Installing

### CSS

The `.css` files can be used directly in a website.

### Atom

    $ ln -s $(pwd)/atom/github-light ~/.atom/themes/github-light

### TextMate

Double-click the `.tmbundle` file.

## Development

    $ script/bootstrap
    $ script/generate

`script/generate` takes the theme definition in the JSON file and converts it
to the various output formats. Don't modify the generated files directly;
instead, modify the JSON file and run `script/generate` again.
