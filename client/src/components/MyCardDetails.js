import React from "react";
import { Card } from "react-bootstrap";

//This component handles the rendering of individual cards in MyCards.js 
//(our collection)


function MyCardDetails(props) {

    return (
        <Card fluid align="center" className="border-0 card-padding">
            <Card.Body>
            <h2>{props.name}</h2>
            <img src={props.imageUrl} alt={props.name}></img>
            </Card.Body>
        </Card>
    )

}

export default MyCardDetails;