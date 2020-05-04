# Webpack

A module bundler for modern JavaScript applications. Essentially a build tool.

Combine different javascript files into a single file

Plugin to run babel

Bundle css and images as well

`npm install -g create-react-app`

`yarn start` for development

`yarn build` for production

# Props

Immutable data passed into components. Available as `this.props`

How to pass props to a component

```
<ShowText text="hello"/>
```

Which makes it availabe as `this.props.text`

# Default Props

Default values to use

```
static defaultProps = { ingredients: [] }

IngredientList.defaultProps = { ingredients: [] };
```

# Prop Types

What props a component is expecting. Development time checker. Only works in development mode

`npm install --save prop-types`

```
static propTypes = {
    ingredients: PropTypes.arrayof(PropTypes.string).isRequired
}
```

# Prop childrens

`props.children` A collection inside a component