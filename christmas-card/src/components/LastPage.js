import React from 'react';
import reindeer from '../images/1.png';

function LastPage(props) {
    console.log("last page props", props.location.state)
    return (
        <div className="last-page">
            <p>Merry Christmas, {props.location.state}</p>
            <img src={reindeer} />
        </div>
    )
};

export default LastPage;