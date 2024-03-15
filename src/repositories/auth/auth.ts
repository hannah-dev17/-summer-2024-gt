import { ENDPOINT } from '../../apis/endpoints';
import { request } from '../../apis/interceptor';
import { ResponseOK } from '../../types';
import { SignInBody, SignInResponse } from './types';

export class AuthRepository {
  static signIn(body: SignInBody): Promise<ResponseOK<SignInResponse>> {
    return request.post(ENDPOINT.AUTH.SIGN_IN, body);
  }
}
