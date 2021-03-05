import axios from 'axios';

const api = axios.create({
    baseURL: '', // <-- Inserir Link da API
});

export default api;