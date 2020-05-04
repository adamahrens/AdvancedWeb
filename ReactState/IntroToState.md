# Intro to State

State can be changed. Props are immutable

```
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { favoriteColor: 'red' };

        setTimeout(() => {
            // setState is async. Eventually calls render
            this.setState({ favoriteColor: 'blue' })
        }, 3000);
    }

    render() {
        return (
            <div>
             My favorite color is { this.state.favoriteColor }
            </div>
        );
    }
}
```

Use `this.setState` to modify state

# Pure Functions

A function without side effects. Doesn't modify inputs or globabl state. It should be repeatable

```
function doubleValues(arr) {
    return arr.map( v => v * 2);
}
```

The `arr` input is never modified. Get a repeatble output.

Use object spread to not override existing keys

```
var person =  {id: 54, name: "Leroy" }

function addJob(personObj, job) {
    return {...personObj, job};
}

addJob(person, "Instructor")
```

All changes to state in React should be pure

# Component Arch

Pass state to child components as props.
Define which components own state.
Use stateless functional components


## How is state shared

Always passed from a parent to a child component as a prop. Never passed child -> parent.

```

// Stateless functional component
const InstructorItem = props => {
  return (
    <li>
      <h3>{props.name}</h3>
      <h4>
      Hobbies: {props.hobbies.join(", ")}
      </h4>
    </li>
  );
}

InstructorItem.propTypes = {
  name: PropTypes.string,
  hobbies: PropTypes.arrayOf(PropTypes.string)
};


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructors: [
        {
          name: 'Tim',
          hobbies: ['sailing', 'react']
        }, {
          name: 'Matt',
          hobbies: ['math', 'd3']
        }, {
          name: 'Colt',
          hobbies: ['css', 'hiking']
        }, {
          name: 'Elie',
          hobbies: ['music', 'es2015']
        }
      ]
    };
  }
  
  render() {
    const instructors = this.state.instructors.map((instructor, index) => (
      <InstructorItem
        key={index}
        name={instructor.name}
        hobbies={instructor.hobbies}
      />
    ));
    return (
      <div className="App">
        <ul>
          {instructors}
        </ul>
      </div>
    );
  }
}
```

Props never change but a component can be unmounted and re-mounted.

Antipattern. Pull out props and save into state. Effectively duplicating the state.

```
constructor(props) {
    super(props);
    this.state = {
        name: this.props.name,
        hobbies: this.props.hobbies
    }
}
```

## Stateless functional component

Implemented with a function instead of a class that extends on `Component`. The function just implements the render method. Can't declare state.

```
import React from 'react';

const Greeting = props => {
    <h1>Hello {props.name}</h1>
};

export default Greeting;
```

Good practice to turn any component that doesn't declare state into a functional component

## setState is tricky

setState that depends on previous state. Simple counter example.

```
this.state = {counter: 1}

this.setState({counter: this.state.counter + 1})
this.setState({counter: this.state.counter + 1})
```

Might expect it to be 3 but setState is async. Instead use the update function to `setState`

```
this.setState((prevState, props) => {
    // Return object of what the new state should be
    return {
        counter: prevState.counter + 1
    };
});
```

Remember it's async. Use a callback function if need be

```
this.setState({name: 'Leroy'});
console.log(this.state.name); // Won't be Leroy

this.setState({name: 'Leroy}, () => {
    console.log(this.state.name); // Will now be Leroy
});
```