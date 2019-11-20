import React from 'react';

const CardSample = props => {
    return (
        <div>
            <img alt="Nasa Pic of the Day" src={props.url} />
            <h2>{props.title}</h2>
            <h3>{props.date}</h3>
            <p>{props.explanation}</p>
        </div>
    )
};


export default CardSample;