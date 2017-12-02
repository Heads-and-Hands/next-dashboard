import axios from 'axios';
// http://dashboard.handh.ru:3000/api
const instance = axios.create({
  baseURL: 'http://dashboard.handh.ru:3000/api',
  // baseURL: 'http://localhost:3000/api',
  headers: { 
    'Content-Type': 'application/json; charset=utf-8',
    Accept: 'application/json; charset=utf-8', 
  },
});

export default instance;
