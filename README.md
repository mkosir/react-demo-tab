# React DemoTab 📑

[![npm version][npm-badge]][npm-url]
[![Build Status][build-badge]][build-url]

_[React DemoTab](https://github.com/mkosir/react-demo-tab)_

Instead of manually creating demos, automate the process with [DemoTab CLI tool](https://github.com/mkosir/react-doc-tab).

## Install

npm `npm install -D react-demo-tab`  
yarn `yarn add -D react-demo-tab`

## Development

_Easily set up a local development environment!_

Build all the examples and starts storybook server on [localhost:9009](http://localhost:9009):

- clone
- `npm install`
- `npm start`

OR

Clone this repo on your machine, navigate to its location in the terminal and run:

```bash
npm install
npm link # link your local repo to your global packages
npm run build:watch # build the files and watch for changes
```

Clone project repo that you wish to test with react-doc-tab-template library and run:

```bash
npm install
npm link react-doc-tab-template # link your local copy into this project's node_modules
npm start
```

**Start coding!** 🎉

## Contributing

All contributions are welcome!

[npm-url]: https://www.npmjs.com/package/react-doc-tab-template
[npm-badge]: https://img.shields.io/npm/v/react-doc-tab-template.svg
[build-badge]: https://travis-ci.com/mkosir/react-doc-tab-template.svg
[build-url]: https://travis-ci.com/mkosir/react-doc-tab-template
