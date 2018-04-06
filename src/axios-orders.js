import axios from 'axios';


const instance = axios.create({
  baseURL: 'https://app-builder-practice.firebaseio.com/'
})

export default instance;
