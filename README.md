# React DemoTab 📑

[![npm version][npm-badge]][npm-url]
[![npm bundle size][size-badge]][npm-url]
[![CI][build-badge]][build-url]
[![semantic-release][semantic-badge]][semantic-url]
[![prettier][prettier-badge]][prettier-url]
[![TypeScript][typescript-badge]][typescript-url]

_A React component to easily create demos of other components_

## [Demo](https://mkosir.github.io/react-demo-tab)

## Install

```bash
npm install react-demo-tab
```

## Example

[![](demo-tab.gif)](https://mkosir.github.io/react-demo-tab/?path=/story/examples--button-green-jsx-css)

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import DemoTab from 'react-demo-tab';
import DemoComponent from './ButtonGreen';

const demoCode = `
import React from 'react';
import './ButtonGreen.css';

const ButtonGreen = () => <button className="btn-green">Green Button</button>;
export default ButtonGreen;`;

const demoStyle = `
.btn-green {
  background-color: green;
  font-size: 14px;
  padding: 12px 26px;
  border-radius: 6px;
}`;

const App = () => {
  return (
    <DemoTab code={demoCode} style={demoStyle}>
      <DemoComponent />
    </DemoTab>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
```

## Props

Create demo of component that is passed as a child.

Below is the complete list of possible props and their options:

> ▶︎ indicates optional prop with default value

**code**: string  
Demo code. Required.

**style**: string ▶︎ `undefined`  
Demo style.

**codeExt**: 'jsx' | 'tsx' ▶︎ `jsx`  
Code file extension for image to be displayed.

**styleExt**: 'css' | 'scss' ▶︎ `css`  
Style file extension for image to be displayed.

## Create demos with CLI tool

Instead of manually creating demos, automate the process with [DemoTab CLI tool](https://github.com/mkosir/react-demo-tab-cli).

## Development

_Easily set up a local development environment!_

Build all the examples and starts storybook server on [localhost:9009](http://localhost:9009):

- clone
- `npm install`
- `npm start`

**Start coding!** 🎉

## Built with DemoTab

- React Tilt - [Repo](https://github.com/mkosir/react-parallax-tilt) - [DemoTab](https://mkosir.github.io/react-parallax-tilt)
- Mighty Mouse - [Repo](https://github.com/mkosir/react-hook-mighty-mouse) - [DemoTab](https://mkosir.github.io/react-hook-mighty-mouse)
- Magnetic Board - [Repo](https://github.com/mkosir/react-magnetic-board) - [DemoTab](https://mkosir.github.io/react-magnetic-board)

## Contributing

All contributions are welcome!

[npm-url]: https://www.npmjs.com/package/react-demo-tab
[npm-badge]: https://img.shields.io/npm/v/react-demo-tab.svg
[size-badge]: https://badgen.net/bundlephobia/minzip/react-parallax-tilt
[build-badge]: https://github.com/mkosir/react-demo-tab/actions/workflows/main.yml/badge.svg
[build-url]: https://github.com/mkosir/react-demo-tab/actions/workflows/main.yml
[semantic-badge]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release
[typescript-badge]: https://badges.frapsoft.com/typescript/code/typescript.svg?v=101
[typescript-url]: https://github.com/microsoft/TypeScript
[prettier-badge]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg
[prettier-url]: https://github.com/prettier/prettier
