import React from 'react';

function Card(props) {
    return (
        <div style= {{border: "1px solid blue", paddingLeft:"5px"}} className="card">
            <h2>{props.h2}</h2>
            <h3>{props.h3}</h3>
        </div>
    );
};

export default Card;