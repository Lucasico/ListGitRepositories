import axios from 'axios';

const apiHttp = axios.create({
  baseURL: 'https://api.github.com'
})

export default apiHttp;