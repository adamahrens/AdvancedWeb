import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <header>
                <h2><a>Recipe App</a></h2>
                <nav>
                    <li><a href="#">New Recipe</a></li>
                </nav>
            </header>
        );
    }
}

export default Navbar;