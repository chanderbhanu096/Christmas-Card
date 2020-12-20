import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Card(props) {
    console.log(props.location.state.name)

    return (
        <div className="card">
            <p>Hello, {props.location.state.name}</p>
            <button><Link to={{ pathname: '/lastpage', state: props.location.state.name }}>Next...</Link></button>
        </div>
    )
};

export default Card;