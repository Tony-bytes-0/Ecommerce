import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_URL;

const baseInstance = axios.create({
    baseURL: baseURL ,
    timeout: 100000,
    //headers: {'X-Custom-Header': 'foobar'}
  });

export default baseInstance;