import axios from 'axios';

import { AsyncStorage } from 'react-native';

const instance = axios.create({
  baseURL: 'http://27db5d984b24.ngrok.io'
});

instance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  err => Promise.reject(err)
);

export default instance;
