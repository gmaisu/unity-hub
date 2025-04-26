import axios from 'axios';

// Create an Axios instance with custom configurations
const axiosInstance = axios.create({
  baseURL: 'https://terapijskiprostor.com/api/',
  // baseURL: 'http://localhost:8080/api/',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});

export default axiosInstance;