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
      ],
      favoriteColor: 'red'
    };

    setTimeout(() => {
      console.log('Timeout called')
      const ins = this.state.instructors.slice();
      console.log(ins);
      const idx = Math.floor(Math.random() * ins.length);
      console.log('Random instructor index ' + idx + ' is ' + ins[idx]);
      const idxHobby = Math.floor(Math.random() * ins[idx].hobbies.length);
      console.log('Random hobby index ' + idxHobby + ' is ' + ins[idx].hobbies[idxHobby]);

      // Use Object assign to update without side effects
      ins[idx] = Object.assign({}, ins[idx]);
      ins[idx].hobbies = ins[idx].hobbies.slice();
      console.log('After slicing ' + ins[idx].hobbies)

      const length = ins[idx].hobbies.length;
      const left = ins[idx].hobbies.slice(0, idxHobby);
      const right = ins[idx].hobbies.slice(idxHobby + 1, length);
      ins[idx].hobbies = left.concat(right);
      console.log('After slicing again ' + ins[idx].hobbies)

      this.setState({ instructors: ins, favoriteColor: 'blue' })
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
        <p>{this.state.favoriteColor}</p>
      </div>
    );
  }
}

export default App;
