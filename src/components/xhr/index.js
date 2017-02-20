import axios from 'axios';

let getPeople;

getPeople = function () {
    return axios.get('https://api.justgiving.com/cbbcb882/v1/charity/2116/donations')
}

export { getPeople }