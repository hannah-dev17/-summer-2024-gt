import axios, { AxiosResponse } from 'axios';
import { ENDPOINT } from '../../apis/endpoints';
import { request } from '../../apis/interceptor';
import { ResponseOK } from '../../types';
import {
  SignInBody,
  SignInKakaoByTokenBody,
  SignInKakaoByCodeResponse,
  SignInResponse,
  SignUpBody,
  SignUpKakaoByCodeBody,
  SignUpKakaoByCodeResponse,
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

  static signInKakaoByToken(body: SignInKakaoByTokenBody): Promise<ResponseOK<SignInKakaoByCodeResponse>> {
    return request.post(ENDPOINT.AUTH.SIGN_IN_KAKAO_BY_TOKEN, body);
  }

  static signUp(body: SignUpBody): Promise<ResponseOK<SignUpResponse>> {
    return request.post(ENDPOINT.AUTH.SIGN_UP, body);
  }

  static signUpKakaoByToken(body: SignUpKakaoByCodeBody): Promise<ResponseOK<SignUpKakaoByCodeResponse>> {
    return request.post(ENDPOINT.AUTH.SIGN_UP_KAKAO_BY_TOKEN, body);
  }
}
