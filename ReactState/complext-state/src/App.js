import React, { Component } from 'react';
import './App.css';

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

    setTimeout(() => {
      console.log('Timeout called')
      const idx = Math.floor(Math.random() * this.state.instructors.length);
      const hobby = Math.floor(Math.random() * this.state.instructors[idx].hobbies.length);
      const ins = this.state.instructors.slice();
      ins[idx] = Object.assign({}, ins[idx]);
      ins[idx].hobbies = ins[idx].hobbies.slice();
      ins[idx].hobbies.slice(hobby, 1);
      this.setState({ instructors: ins })
    }, 5000);
  }
  render() {
    const instructors = this.state.instructors.map((instructor, index) => (
      <li key={index}>
        <h3>{instructor.name}</h3>
        <h4>Hobbies: {instructor.hobbies.join(", ")}</h4>
      </li>
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

export default App;
