# React Router

## HTML5 History Object
Allows javascript to manipulate the browser history. Does not cause a new `GET` request

`history.forward()`
`history.back()`
`history.pushState`

To make a Single Page App we want to ensure browser back button, bookmark a URL, and internal links behave like a regular application

## Intro to React Router

Conditionally render components based on the URL. React Router v4 is a library to manage routing in your SPA. Declarative API.

BrowserRouter uses the history object above and makes changes to the url. HashRouter adds `#` to the url

`/  vs /#`  and `/users vs /#users`

Browser requires server side support.

`npm install --save react-router-dom`

Setup 

```
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'

ReactDOM.reander(
    <Router>
        <App />
    </Router>
    document.getElementById('root')
)
```

Conditionally Render


```
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

const Homepage = () => (<div>HOMEPAGE</div>);
const About = () => (<div>ABOUT</div>)

const SwitchDemo = () => (
    <Switch>
        <Route path="/about" component={About} />
        <Route path="/" component={Homepage} />
    </Switch>
)
```

Link essentially an anchor tag. However, react-router takes over and uses history to change the URL
NavLink has an `activeStyle` 

# Route Props

A component inside of a Route gets 3 props

`match` info about how the url matches the route component

`location` where you are now, similar to window.location

`history` similar to html5 history object

# withRouter

If a component is not rendered inside of a Route component. Use `withRouter` to get the route props above.

