import axios from 'axios';

export const axiosClient = axios.create({
    baseURL: 'https://apiwebbanhang-w.herokuapp.com/',
    headers: {
        'content-type': 'application/json',
    }
})
