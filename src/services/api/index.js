import axios from 'axios';

export default function() {
  const api = axios.create({
    baseURL: 'http://localhost:5555',
  });

  return api;
}
