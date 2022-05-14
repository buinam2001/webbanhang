import axios from 'axios';

export const axiosClient = axios.create({
    baseURL: 'http://localhost:5000/',
    headers: {
        'content-type': 'application/json',
    }
})
