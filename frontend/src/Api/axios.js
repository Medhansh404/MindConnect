import axios from 'axios';
// const BASE_URL = 'https://mindconnect-2ao9.onrender.com';
const BASE_URL = 'http://localhost:8080';


export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});