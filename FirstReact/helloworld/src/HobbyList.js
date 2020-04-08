import React, { Component } from 'react';

class HobbyList extends Component {
    render() {
        const listStyle = { fontSize: '1.5em' };
        const hobbies = ["Bark", "Sleep", "Play", "Fetch"]

        return (
            <ul style={{ listStyleType: 'none' }}>
                {hobbies.map((hobby, index) => {
                    return <li key={index} style={listStyle}>{hobby}</li>
                })}
            </ul>)
    }
}

export default HobbyList;