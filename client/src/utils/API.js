import axios from 'axios';

export default {
    //get all cards in db
    getCards: function() {
        return axios.get('/api/cards');
    },

    //Gets the card with the given Id
    getCard: function(id) {
        return axios.get('/api/cards/' + id);
    },

    //Deletes the card with given id
    deleteCard: function(id) {
        return axios.delete('/api/cards/' + id);
    },

    //Saves a card to the db
    saveCard: function(cardData) {
        return axios.post('/api/cards', cardData);
    }
}