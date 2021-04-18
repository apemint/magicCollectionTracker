import React from "react";

//This component handles the rendering of individual cards in MyCards.js 
//(our collection)


function MyCardDetails(props) {

    return (
        <div>
            <h2>{props.name}</h2>
            <img src={props.imageUrl} alt={props.name}></img>
        </div>
    )

}

export default MyCardDetails;