import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

function Card(props) {

    return (
        <div className="card">
            <div className="empty-space" />
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                    .typeString('<span class="typewriter">Twas the night before Christmas</span>')
                    .start()
                    .pauseFor(500)
                    .typeString('<br><span class="typewriter">When all through the house</span>')
                    .pauseFor(500)
                    .typeString('<br><span class="typewriter">Not a creature was stirring</span>')
                    .pauseFor(500)
                    .typeString(`<br><span class="typewriter">Not even a ${props.location.state.name}!</span>`)
                    .pauseFor(500)
                    .deleteChars(props.location.state.name.length + 1)
                    .typeString('<br><span class="typewriter">mouse!</span>')
                    .pauseFor(1000)
                    .typeString('<br><span class="typewriter">The stockings were hung</span>')
                    .pauseFor(500)
                    .typeString('<br><span class="typewriter">By the chimney with care</span>')
                    .pauseFor(500)
                    .typeString(`<br><span class="typewriter">In hopes that ${props.location.state.name}!</span>`)
                    .pauseFor(500)
                    .deleteChars(props.location.state.name.length + 1)
                    .typeString('<br><span class="typewriter">Saint Nicholas</span>')
                    .pauseFor(500)
                    .typeString('<br><span class="typewriter">Soon would be there...<i>(End)</i></span>')
                }}
            />
            <button className="card-btn"><Link to={{ pathname: '/lastpage', state: props.location.state.name }}>Next...</Link></button>
        </div>
    )
};

export default Card;