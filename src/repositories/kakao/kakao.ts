import axios, { AxiosResponse } from 'axios';
import { CreateAccessTokenBody, CreateAccessTokenResponse } from './types';

export class KakaoRepository {
  static createAccessToken({ code }: CreateAccessTokenBody): Promise<AxiosResponse<CreateAccessTokenResponse>> {
    return axios.post(
      'https://kauth.kakao.com/oauth/token',
      {
        grant_type: 'authorization_code',
        client_id: process.env.REACT_APP_KAKAO_REST_API_KEY,
        redirect_uri: process.env.REACT_APP_KAKAO_REDIRECT_URI,
        code,
      },
      {
        headers: {
          'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      },
    );
  }
}
