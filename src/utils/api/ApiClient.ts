import axios from 'axios';

export const ApiClient = axios.create({
    baseURL: 'https://api.example.com',
    headers: { 'Content-Type': 'application/json' }
});

