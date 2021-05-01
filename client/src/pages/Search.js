import React, { useState, useEffect } from "react";
import axios from "axios";
import CardSearchDetails from '../components/CardSearchDetails'


function Search() {

    //set State to display cards
    const [searchedCards, setSearchedCards] = useState([]);

    //set State to render loading screen, default false so its not showing
    const [loading, setLoading] = useState(false);

    //state to set search variable, default chandra to make sure it renders, remove default later
    const [search, setSearch] = useState('Chandra');


    // handler to set search variable to whatever is in the input field
    const handleInputChange = (e) => {
        setSearch(e.target.value);
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
        axios
            .get(`https://api.magicthegathering.io/v1/cards?name=${search}`)
            .then(res => {
                setSearchedCards(res.data.cards);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
            })
    }


    // when component is initially mounted, make an api call for all cards, then set our cards to all cards
    useEffect(() => {
        //set loading to true then make api call
        setLoading(true);
        //api call
        axios
            .get(`https://api.magicthegathering.io/v1/cards`)
            .then(res => {
                //set card variable to all cards returned
                setSearchedCards(res.data.cards);
                //end loading screen
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
            })
    }, []); //only when the component mounts



    //if loading is set to true, render loading component
    if (loading) {
        return (
            // <Loading />
            <p>Loading...</p>
        )
    }


    //else render the Form + search return
    return (
        <div className="center-align search">
            <div>
                {/* <SearchForm /> */}
                <h1>Search For Magic the Gathering Cards</h1>
                <input
                    name="cardsearch"
                    value={search}
                    type="text"
                    placeholder="Search for a Card"
                    onChange={handleInputChange}
                />
                <button onClick={handleSubmitForm} type="button">Search for Cards</button>
            </div>
            <div>
                {/* <SearchReturn /> */}
                <h1>Results for "{search}"</h1>
                <div className="row justify-content-center">
                    {searchedCards.map((card) => (
                        <CardSearchDetails
                            key={card.id}
                            {...card}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Search;