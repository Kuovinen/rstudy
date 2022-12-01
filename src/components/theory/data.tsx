let data = [
  {
    name: `React features.`,
    comment: (
      <ul>
        <li>uses JSX</li>
        <li>has a virtual DOM</li>
        <li>components</li>
        <li>one way data binding,from parent to child using props</li>
      </ul>
    ),
  },
  {
    name: `What is JSX.`,
    comment: (
      <span>
        JavaScript Syntax Extension is a combination of HTML and JavaScript. It
        is a syntax extension to JavaScript
      </span>
    ),
  },
  {
    name: `Browsers and JSX.`,
    comment: (
      <span>
        JSX is not supported by the browsers so it is transcompiled through
        BABEL into js code. After compilation, JSX expressions become regular
        JavaScript function calls and evaluate to JavaScript objects.
      </span>
    ),
  },
  {
    name: `What is a Virtual Dom.`,
    comment: (
      <span>
        Virtual Dom is a representation of the actual Document Object Model.
        It's a js object. Manipulating the virtual DOM is much faster, since it
        itself doesn't render, and after react makes the ui coincide with the
        updated version.
      </span>
    ),
  },
  {
    name: `Difference between ES5 and ES6 React.`,
    comment: (
      <ul>
        <li>ES5 only has VAR no LET and CONST</li>
        <li>no arrow functions</li>
        <li>import React from 'react'; vs var React = require('react');</li>
        <li>
          {`import {render} from 'react-dom'; vs var React =
          require('react-dom').render;`}
        </li>
        <li>module.exports = Component; vs export default Component;</li>
        <li>module.exports.Component = Component; vs export Component;</li>
      </ul>
    ),
  },
  {
    name: `How to create a react app?`,
    comment: (
      <ul>
        <li>npx-create-react-app app_name</li>
        <li>
          https://dev.to/ruppysuppy/create-react-app-from-scratch-like-a-pro-de0
        </li>
        <li>npm init</li>
        <span>Initializing the project</span>
        <li>npm install react react-dom</li>
        <span>React Dependencies</span>
        <li>npm install -save-dev webpack webpack-cli</li>
        <span>Webpack Dependencies</span>
        <li>npm install --save-dev babel-loader</li>
        <span>Webpack Loaders</span>
        <li>npm install --save-dev @babel/core @babel/preset-react</li>
        <span>Babel Dependencies</span>
        <li>Add .babelrc to project root</li>
        <span>Configuring Babel</span>
        <li>Add webpack.config.js to project root</li>
        <span>Configure Webpack (entry, mode,output,module )</span>
        <li>Add an /public/index.html and the basic body</li>
        <li>Creat the React App index.js and App.js</li>
        <li>Add the npm scripts to package.json</li>
      </ul>
    ),
  },
  {
    name: `Binding an event to a JSX element.`,
    comment: <span></span>,
  },
  {
    name: `How do lists work in React.`,
    comment: <span></span>,
  },
  {
    name: `How do keys help React  identify which items have changed?`,
    comment: <span></span>,
  },
  {
    name: `Forms in React`,
    comment: <span></span>,
  },
  {
    name: `Arrow functions in React`,
    comment: <span></span>,
  },
  {
    name: `What are react components.`,
    comment: <span></span>,
  },
  {
    name: `What is a state in a React componentand how is it managed?`,
    comment: <span></span>,
  },
  {
    name: `How to update state in React?`,
    comment: <span></span>,
  },
  {
    name: `Sharing data between components.`,
    comment: <span></span>,
  },
  {
    name: `State and props difference.`,
    comment: <span></span>,
  },
  {
    name: `Higher order components.`,
    comment: <span></span>,
  },
  {
    name: `Embedding components.`,
    comment: <span></span>,
  },
  {
    name: `Class vs Functional components.`,
    comment: <span></span>,
  },
  {
    name: `Lifecycle methods of React components.`,
    comment: <span></span>,
  },
  {
    name: `Routing in React, how and why?`,
    comment: <span></span>,
  },
  {
    name: `Styles in react components.`,
    comment: <span></span>,
  },
];

export default data;
