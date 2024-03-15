import axios, { AxiosResponse } from 'axios';
import { ENDPOINT } from '../../apis/endpoints';
import { request } from '../../apis/interceptor';
import { ResponseOK } from '../../types';
import { SignInBody, SignInResponse, VerifyJwtTokenBody, VeryfiJwtTokenResponse } from './types';

export class AuthRepository {
  static signIn(body: SignInBody): Promise<ResponseOK<SignInResponse>> {
    return request.post(ENDPOINT.AUTH.SIGN_IN, body);
  }

  static verifyJwtToken(body: VerifyJwtTokenBody): Promise<AxiosResponse<ResponseOK<VeryfiJwtTokenResponse>>> {
    return axios.post(`${process.env.REACT_APP_API}${ENDPOINT.AUTH.VERIFY_JWT_TOEKN}`, body);
  }
}
