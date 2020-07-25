# Redux
State management. Information that changes and Redux provides one central location.

Boilerplate gives you `applyMiddleware` `bindActionCreators` `combineReducers` `compose` and `createStore`

Need to create a store first for data that is shared.
Cant create a store without a reducer.
A reducer is a function that determines what our sate looks like and how we change state
First time you create a store, an initial state is created with a special action of `@@redux/INIT`
Make sure reducers are pure functions. Always make copies before updating the state. This allows redux to "time travel"

## getState()

Call `store.getState()`

## Make changes

Call `dispatch` on the store. Must specifiy a `type` property but can also add others

```
{ type: 'thingTodo', id: 1, store: true }
```

## Spread out

```
const initState = {
    id: 0,
    todos: []
}

var newState = { ...initState }
newState.id++
todos: [...newState.todos, { task: 'New task', id: newState.id}]
```

# Redux React Intro

Sync up React with our store
Use redux-dev-tools in Chrome
