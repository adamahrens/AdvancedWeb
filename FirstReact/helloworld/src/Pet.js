import React, { Component } from 'react';
import HobbyList from './HobbyList';
import './Pet.css'

class Pet extends Component {
    render() {
        return (
            <div className="card">
                <h2 className="name">Puppy</h2>
                <img src="https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=912&q=80" alt="Dog" />
                <h5 style={{ fontSize: '2em', margin: '2px' }}>Hobbies</h5>
                <HobbyList />
            </div>
        )
    }
}

export default Pet;