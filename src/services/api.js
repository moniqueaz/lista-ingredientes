import axios from 'axios';
import { API } from './config';

const api = axios.create({
  baseURL: API,
});

export default api;
