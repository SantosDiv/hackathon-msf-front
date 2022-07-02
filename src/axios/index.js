import axios from "axios";

const AUTH_TOKEN = '';

const api = axios.create({
  baseURL: 'http://localhost:3000'
});

api.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export default api;
