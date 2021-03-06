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
          id: 0,
          title: "Monster Cookie",
          ingredients: ['Sugar', 'Peanut Butter', 'Brown Sugar', 'Oats'],
          instructions: "Add all the ingredients and mix",
          image: "https://images.unsplash.com/photo-1559622214-f8a9850965bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3101&q=80"
        },
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
        }
      ],
      nextRecipeId: 3,
      showForm: false
    }

    this.saveRecipe = this.saveRecipe.bind(this)
    this.toggleRecipe = this.toggleRecipe.bind(this)
  }

  saveRecipe(recipe) {
    this.setState((prevState, props) => {
      const newRecipe = { ...recipe, id: this.state.nextRecipeId }
      return { recipes: [...this.state.recipes, newRecipe], nextRecipeId: prevState.nextRecipeId + 1, showForm: false }
    });
  }

  toggleRecipe() {
    const toggled = !this.state.showForm
    this.setState({ showForm: toggled })
  }

  render() {
    const { showForm } = this.state
    return (
      <div className="App" >
        <Navbar onNewRecipe={this.toggleRecipe} />
        {showForm ? <RecipeInput onSave={this.saveRecipe} onClose={this.toggleRecipe} /> : null}
        <RecipeList recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
