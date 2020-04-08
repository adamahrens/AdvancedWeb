import React, { Component } from 'react';
import './Recipe.css'
import PropTypes from 'prop-types';

class Recipe extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
        instructions: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
    }

    render() {
        const { title, image, instructions } = this.props;
        const ingredients = this.props.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
        ))
        return (
            <div className="recipe-card">
                <img src={image} alt={title} />
                <div className="recipe-details">
                    <h1>{title}</h1>
                    <h4>Ingredients:</h4>
                    <ul>
                        {ingredients}
                    </ul>
                    <h5>Instructions:</h5>
                    <p>{instructions}</p>
                </div>
            </div>
        )
    }
}

export default Recipe;