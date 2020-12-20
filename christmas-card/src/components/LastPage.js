import React from 'react';

function LastPage(props) {
    console.log("last page props", props.location.state)
    return (
        <div className="last-page">
            <p>Merry Christmas, {props.location.state}</p>
        </div>
    )
};

export default LastPage;