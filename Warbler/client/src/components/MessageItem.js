import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';


const MessageItem = ({ date, profileImageUrl, text, username }) => (
    <div>
        <img src={profileImageUrl} alt={username} height='100' width='100' />
        <div className='message-area'>
            <Link to='/'>@{username}</Link>
            <span className='text-muted'><Moment className='text-muted' format='DD MMM YYYY'>{date}</Moment></span>
            <p>{text}</p>
        </div>
    </div >
)

export default MessageItem;