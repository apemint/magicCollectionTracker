import React, { useState, useEffect } from "react";
import API from "../utils/API";
import MyCardDetails from '../components/MyCardDetails'

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
        <div>

            <div>
                {cards.map(card => (
                    <div>
                    <MyCardDetails 
                    key={card.id}
                    {...card} />
                    <button
                    onClick={() => {deleteCard(card._id)}}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyCards;