import React from 'react';
import { Link } from 'react-router-dom';
import MessageTimeline from './MessageTimeline';

const Homepage = ({ currentUser }) => {
    if (currentUser.isAuthenticated === false) {
        return (
            <div className='home-hero'>
                <h1>Welcome</h1>
                <h4>New to Warbler?</h4>
                <Link to='/signup' className='btn btn-primary'>Sign Up Here</Link>
            </div>
        )
    }

    return (
        <div className='home-hero'>
            <h1>Welcome {currentUser.user.username}</h1>
            <MessageTimeline />
        </div>
    )
}

export default Homepage;