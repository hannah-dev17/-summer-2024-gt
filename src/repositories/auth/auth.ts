import axios, { AxiosResponse } from 'axios';
import { ENDPOINT } from '../../apis/endpoints';
import { request } from '../../apis/interceptor';
import { ResponseOK } from '../../types';
import {
  SignInBody,
  SignInByKakaoQueryParams,
  SignInByKakaoResponse,
  SignInResponse,
  SignUpBody,
  SignUpResponse,
  VerifyJwtTokenBody,
  VeryfiJwtTokenResponse,
} from './types';

export class AuthRepository {
  static signIn(body: SignInBody): Promise<ResponseOK<SignInResponse>> {
    return request.post(ENDPOINT.AUTH.SIGN_IN, body);
  }

  static verifyJwtToken(body: VerifyJwtTokenBody): Promise<AxiosResponse<ResponseOK<VeryfiJwtTokenResponse>>> {
    return axios.post(`${process.env.REACT_APP_API}${ENDPOINT.AUTH.VERIFY_JWT_TOEKN}`, body);
  }

  static signInByKakao(queryParams: SignInByKakaoQueryParams): Promise<ResponseOK<SignInByKakaoResponse>> {
    return request.get(ENDPOINT.AUTH.KAKAO_SIGN_IN_BY_CODE, { params: queryParams });
  }

  static signUp(body: SignUpBody): Promise<ResponseOK<SignUpResponse>> {
    return request.post(ENDPOINT.AUTH.SIGN_UP, body);
  }
}
