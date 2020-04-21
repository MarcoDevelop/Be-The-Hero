import axios from 'axios';

const api = axios.create({
    baseURL: 'http://mirandasystem.asuscomm.com:3333'
});

export default api;