import React, { Component } from 'react';
import './RecipeInput.css'

class RecipeInput extends Component {

    static defaultProps = {
        onClose() { }
    }

    constructor(props) {
        super(props);
        this.state = { title: '', instructions: '', ingredients: [''], image: '' }
        this.handleChange = this.handleChange.bind(this)
        this.handleChangeIngredient = this.handleChangeIngredient.bind(this)
        this.handleNewIngredient = this.handleNewIngredient.bind(this)
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleNewIngredient(event) {
        const { ingredients } = this.state
        this.setState({ ingredients: [...ingredients, ''] })
    }

    handleChangeIngredient(event) {
        const index = Number(event.target.name.split('-')[1])
        const ingredients = this.state.ingredients.map((ingredient, i) => (
            i === index ? event.target.value : ingredient
        ));

        this.setState({ ingredients })
    }

    render() {
        const { title, instructions, ingredients, image } = this.state
        const { onClose } = this.props

        let inputs = ingredients.map((ingredient, i) => (
            <div className="recipie-form-line" key={`ingredient-${i}`}>
                <label> {i + 1}.
                    <input type="text"
                        name={`ingredient-${i}`}
                        value={ingredient}
                        size={45}
                        autoComplete="off"
                        placeholder="Ingredient"
                        onChange={this.handleChangeIngredient} />
                </label>
            </div>
        ));

        return (
            <div className="recipe-form-container">
                <form className='recipe-form' onSubmit={() => { }}>
                    <button
                        type="button"
                        className="close-button"
                        onClick={onClose}
                    >
                        X
          </button>
                    <div className='recipe-form-line'>
                        <label htmlFor='recipe-title-input'>Title</label>
                        <input
                            id='recipe-title-input'
                            key='title'
                            name='title'
                            type='text'
                            value={title}
                            size={42}
                            autoComplete="off"
                            onChange={this.handleChange} />
                    </div>
                    <label
                        htmlFor='recipe-instructions-input'
                        style={{ marginTop: '5px' }}
                    >
                        Instructions
                    </label>
                    <textarea
                        key='instructions'
                        id='recipe-instructions-input'
                        type='Instructions'
                        name='instructions'
                        rows='8'
                        cols='50'
                        autoComplete='off'
                        value={instructions}
                        onChange={this.handleChange} />
                    {inputs}
                    <button type="button" className="buttons" onClick={this.handleNewIngredient}>+</button>
                    <div className='recipe-form-line'>
                        <label htmlFor='recipe-img-input'>Image Url</label>
                        <input
                            id='recipe-img-input'
                            type='text'
                            placeholder=''
                            name='image'
                            value={image}
                            size={36}
                            autoComplete='off'
                            onChange={this.handleChange} />
                    </div>
                    <button type="submit" className="buttons" style={{ alignSelf: 'flex-end', marginRight: 0 }}>Save</button>
                </form>
            </div>
        )
    }
}

export default RecipeInput;