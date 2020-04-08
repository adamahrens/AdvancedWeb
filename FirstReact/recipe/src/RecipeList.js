import React, { Component } from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types';
import './RecipeList.css'

class RecipeList extends Component {

    static propTypes = {
        recipes: PropTypes.arrayOf(PropTypes.object).isRequired
    }

    static defaultProps = {
        recipes: [
            {
                title: "Monster Cookie",
                ingredients: ['Sugar', 'Peanut Butter', 'Brown Sugar', 'Oats'],
                instructions: "Add all the ingredients and mix",
                image: "https://images.unsplash.com/photo-1559622214-f8a9850965bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3101&q=80"
            },
            {
                title: "Monster Cookie",
                ingredients: ['Sugar', 'Peanut Butter', 'Brown Sugar', 'Oats'],
                instructions: "Add all the ingredients and mix",
                image: "https://images.unsplash.com/photo-1559622214-f8a9850965bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3101&q=80"
            },
            {
                title: "Monster Cookie",
                ingredients: ['Sugar', 'Peanut Butter', 'Brown Sugar', 'Oats'],
                instructions: "Add all the ingredients and mix",
                image: "https://images.unsplash.com/photo-1559622214-f8a9850965bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3101&q=80"
            }
        ]
    }

    render() {
        const recipes = this.props.recipes.map((r, index) => (
            <Recipe key={index} {...r} />
        ));

        return (
            <div className="recipes">
                {recipes}
            </div>
        )
    }
}

export default RecipeList;