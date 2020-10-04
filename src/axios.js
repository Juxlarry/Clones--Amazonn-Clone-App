import axios from 'axios'; 

const instance = axios.create({
    baseUrl: '...' //API (Cloud) URL
});

export default instance;