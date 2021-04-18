import React from 'react';
import API from '../utils/API';


// This component handles the rendering of individual cards which is then mapped over all results
// in Search.js. Also handle saving a card to the data base via save button and
// handle form submit.

function CardSearchDetails(props) {
    function handleFormSubmit(e) {
        e.preventDefault();
        API.saveCard({
            name:props.name,
            cmc:props.cmc,
            colors: props.colors,
            imageUrl: props.imageUrl,
            set: props.set
        })
            .then(res => console.log(`Saved ${props.name} to your Collection`))
            .catch(err => console.log(err));
    };

    return (
        <div>
            <h2>{props.name}</h2>
            <img src={props.imageUrl} alt={props.name} />
            <button
            onClick={handleFormSubmit}
            >Save</button>
        </div>
    )
}

export default CardSearchDetails;