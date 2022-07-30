import axios from 'axios';

const breakingBadApi = axios.create({
    baseURL: 'https://breakingbadapi.com/api/',
});

export default breakingBadApi;