import React, { useState, useEffect } from "react";
import API from "../utils/API";
import MyCardDetails from '../components/MyCardDetails'
import { Card, Button } from "react-bootstrap";

function MyCards() {
    const [cards, setCards] = useState([])
    
    useEffect(() => {
        loadCards()
    }, [])

    function loadCards() {
        API.getCards()
        .then(res => 
            setCards(res.data)
            )
            .catch(err => console.log(err));
    };

    function deleteCard(id) {
        API.deleteCard(id)
            .then(res => loadCards())
            .catch(err => console.log(err));
    }


    return (
        <div className="center-align search">

            <div>
                <h1>My Collection</h1>
                <div className="row justify-content-center">
                {cards.map(card => (
                    <div>
                    <MyCardDetails 
                    key={card.id}
                    {...card} />
                    <Button
                    onClick={() => {deleteCard(card._id)}}>Delete</Button>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default MyCards;