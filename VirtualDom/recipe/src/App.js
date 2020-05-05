import React, { Component } from 'react';
import RecipeList from './RecipeList'
import Navbar from './Navbar'
import RecipeInput from './RecipeInput'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        {
          id: 1,
          title: "Monster Cookie",
          ingredients: ['Sugar', 'Peanut Butter', 'Brown Sugar', 'Oats'],
          instructions: "Add all the ingredients and mix",
          image: "https://images.unsplash.com/photo-1559622214-f8a9850965bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3101&q=80"
        },
        {
          id: 2,
          title: "Monster Cookie",
          ingredients: ['Sugar', 'Peanut Butter', 'Brown Sugar', 'Oats'],
          instructions: "Add all the ingredients and mix",
          image: "https://images.unsplash.com/photo-1559622214-f8a9850965bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3101&q=80"
        },
        {
          id: 3,
          title: "Monster Cookie",
          ingredients: ['Sugar', 'Peanut Butter', 'Brown Sugar', 'Oats'],
          instructions: "Add all the ingredients and mix",
          image: "https://images.unsplash.com/photo-1559622214-f8a9850965bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3101&q=80"
        }
      ],
      nextRecipeId: 4
    }
  }

  render() {
    return (
      <div className="App" >
        <Navbar />
        <RecipeInput />
        <RecipeList recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
