import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Recipe.css'

class Recipe extends Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
        instructions: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }

    render() {
        const { id, title, image, instructions } = this.props;
        const ingredients = this.props.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
        ))

        return (
            <div className="recipe-card" data-id={id} >
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