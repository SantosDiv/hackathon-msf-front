import axios from "axios";

const AUTH_TOKEN = '';

export default function Axios () {
  const instance = axios.create({
    baseURL: 'http://localhost:3000'
  });

  instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;

  return instance;
}