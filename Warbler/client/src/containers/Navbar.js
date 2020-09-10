import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../store/actions/auth'

class Navbar extends Component {
    logout = e => {
        e.preventDefault();
        this.props.logout();
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to='/' className='navbar-brand'>
                    <h2>Warbler</h2>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    {this.props.currentUser.isAuthenticated ? (
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to={`/users/${this.props.currentUser.user.id}/messages/new`}>New Message</Link>
                            </li>
                            <li className="nav-item">
                                <a onClick={this.logout}>Logout</a>
                            </li>
                        </ul>
                    ) : (<ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to='/signup'>Sign Up</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/login'>Log In</Link>
                        </li>
                    </ul>)}
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, { logout })(Navbar);