import axios, { AxiosInstance } from 'axios';
import { JWT_KEY } from '../config/constant';
import { jwtDecode } from 'jwt-decode';

const request: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API,
  timeout: 2500,

  headers: {
    accept: 'application/json',
  },
});

request.interceptors.request.use(
  config => {
    const jwt = window.localStorage.getItem(JWT_KEY) ?? '';

    if (jwt) {
      const decodedJwt = jwtDecode(jwt);
      const currentTime = new Date().getTime() / 1000;

      if (decodedJwt.exp ?? 0 < currentTime) {
        // 서버에 토큰 재발급 요청 코드 작성 필요
        // eslint-disable-next-line no-console
        console.log('서버에 토큰 재발급 요청');
      } else {
        config.headers.Authorization = `Bearer ${jwt}`;
      }
    }

    return config;
  },
  error => {
    // eslint-disable-next-line no-console
    console.log(error);
    return Promise.reject(error);
  },
);

request.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  },
);

export { request };
