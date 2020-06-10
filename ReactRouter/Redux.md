# Intro to Redux

It's inspired by Flux and Elm. A library that stores application state. Allows to keep all state in a central store. Stored in a single Javascrpt object.

Often used with React but it's completely independent.

`npm install --save redux`

Redux is synchronous

## Action

A plain javascript object that must have a key called `type` and a `string` value. Can have more key values as well.

```
{
    type: "Logout"
}
```

## Reducer

Reducers decides what the new state should be given the old state and the current action.

```
function rootReducer(state={}, action) {
    switch(action.type) {
        case "Logout" : 
            return { ...state, login: false }
    }
}
```

## Create Store

One big javascript object to store the entire state of the application

`const store = Redux.createStore(rootReducer)`

```
 store.dispatch({ type: "Logout"})
 const updatedState = store.getState();
```

## Listen to changes

const changeCallback = () => {
    console.log('State has changed. ' + store.getState())
}

const unsubscribe = store.listen(changeCallback);


dispatch(action) -> reducer(currentState, action) -> newState -> listeners invoked


## Integrate with React

Use react-redux library. Exposes a provider component

`npm install --save react-redux`

```
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    document.getElementById('root);
)
```

## Organize Redux

`combineReducers` A redux function that allows reducer composition

`actionCreators` A function that returns an action object

src
    - actions
    - components
    - containers
    - reducers