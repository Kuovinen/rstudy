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
    name: `React component lifecycle.`,
    comment: (
      <ul>
        <li>
          <h4>MOUNTING</h4>
          <ol>
            <li>
              <b>constructor(props)</b> <br />
              <span className="g">
                Used for initializing the state of the component and binding
                event-handler methods within the component.
              </span>
            </li>
            <li>
              <b>getDerivedStateFromProps(props, state)</b>
              <br />
              <span className="g">
                Used to modify the state value with any props value.
              </span>
            </li>
            <li>
              <b>render()</b>
              <span className="g">
                <br />
                The render method is the only required method for a class-based
                React component, that actually renders or inserts the HTML to
                the DOM.(returns JSX)
              </span>
            </li>
            <li>
              <b>componentDidMount()</b>
              <span className="b">
                {"  "}
                <b>useEffect</b> happens here, but after first pain, that
                comDidMount doesn't wait for.
              </span>
              <br />
              <span className="g">
                Used to add side effects like sending network requests or
                updating the component's state. Also allows you to make
                subscriptions like subscribing to the Redux store.
              </span>
            </li>
          </ol>
        </li>
        <li>
          <h4>UPDATING</h4>
          <ol>
            <li>
              <b>getDerivedStateFromProps(props, state)</b>
              <br />
              <span className="g">
                Used to modify the state value with any props value.
              </span>
            </li>
            <li>
              <b>shouldComponentUpdate()</b>
              <span className="g">
                <br />
                tell React when you don't need to re-render when a new state or
                props comes in
              </span>
            </li>
            <li>
              <b>render()</b>
              <span className="g">
                <br />
                The render method is the only required method for a class-based
                React component, that actually renders or inserts the HTML to
                the DOM.(returns JSX)
              </span>
            </li>
            <li>
              <b>getSnapshotBeforeUpdate()</b>
              <span className="g">
                <br />
                Used to give access to the previous props and state of the
                component before it's updated.A good use case for this method is
                handling scroll positions in a chat app.When a new message comes
                in as the user is viewing old messages, it shouldn’t push the
                old ones out of view. If the getSnapshotBeforeUpdate method
                returns anything, it will be passed as a parameter for the
                componentDidUpdate method.
              </span>
            </li>
            <li>
              <b>componentDidUpdate()</b>{" "}
              <span className="b">
                {"  "}
                <b>useEffect</b> with dependencies runs it's effect here{" "}
              </span>
              <span className="g">
                <br />
                Allows us to create side effects like sending network requests
                or calling the this.setState method, but with an escape way to
                prevent infinite loops.
              </span>
            </li>
          </ol>
        </li>
        <li>
          <h4>UNMOUNTING</h4>
          <ol>
            <li>
              <b>componentWillUnmount()</b>
              <span className="b">
                {"  "}
                <b>useEffect</b> clean-up function happens here{" "}
              </span>
              <br />
              <span className="g">
                Meant for any necessary clean up of the component, like
                unsubscribing to any subscriptions (i.e., Redux) or canceling
                any network requests. Once this method is done executing, the
                component will be destroyed.
              </span>
            </li>
          </ol>
        </li>
      </ul>
    ),
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
