import axios, { AxiosInstance } from 'axios';
import { JWT_KEY } from '../config/constant';
import { jwtDecode } from 'jwt-decode';
import { AuthRepository } from '../repositories';

const request: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API,
  timeout: 2500,

  headers: {
    accept: 'application/json',
  },
});

request.interceptors.request.use(
  async config => {
    const jwt = window.localStorage.getItem(JWT_KEY) ?? '';

    if (jwt) {
      const decodedJwt = jwtDecode(jwt);
      const currentTime = new Date().getTime() / 1000;

      if (decodedJwt.exp ?? 0 < currentTime) {
        const response = await AuthRepository.verifyJwtToken({ jwt });
        const updatedJwt = response.data.result.jwt;

        window.localStorage.setItem(JWT_KEY, updatedJwt);
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
