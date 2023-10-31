import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://34.131.243.77:8000', // Replace with your API's base URL
  headers: {
    'Content-Type': 'application/json',
    // Add any other default headers here
  },
});

export default instance;
