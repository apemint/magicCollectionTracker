import React from "react";

//This component handles the rendering of the card after clicking on it in your collection

function CardZoomIn(props) {

    return (
        <div>
            <h1>{props.name}</h1>
            <img src={props.imageUrl} alt={props.name}></img>
            <h1>{props.colors}</h1>
            <h1>{props.cmc}</h1>
            <h1>{props.set}</h1>
        </div>
    )
};

export default CardZoomIn;
