import React, { Component } from 'react';
import errors from '../store/reducers/errors';

export default class AuthForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            profileImageUrl: ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const authType = this.props.signUp ? 'signup' : 'login';
        this.props.onAuth(authType, this.state).then(() => {
            console.log('Logged in');
        });
    };

    render() {
        const { email, username, password, profileImageUrl } = this.state;
        const { heading, buttonText, signUp, errors, history, removeError } = this.props

        history.listen(() => {
            removeError();
        })

        return (
            <div>
                <div className='row text-center'>
                    <div className='col-md-6'>
                        <form onSubmit={this.handleSubmit}>
                            <h2>{heading}</h2>
                            {errors.message && (<div className='alert alert-danger'>{JSON.stringify(errors.message)}</div>)}
                            <label htmlFor='email'>Email:</label>
                            <input className='form-control' id='email' name='email' onChange={this.handleChange} value={email} type='text' />
                            <label htmlFor='password'>Password:</label>
                            <input className='form-control' id='password' name='password' onChange={this.handleChange} type='password' />
                            {signUp && (
                                <div>
                                    <label htmlFor='username'>Username:</label>
                                    <input className='form-control' id='username' name='username' onChange={this.handleChange} value={username} type='text' />
                                    <label htmlFor='image-url'>Profile Url:</label>
                                    <input className='form-control' id='image-url' name='profileImageUrl' onChange={this.handleChange} value={profileImageUrl} type='text' />
                                </div>
                            )}
                            <button className='btn btn-primary' type='submit'>
                                {buttonText}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

