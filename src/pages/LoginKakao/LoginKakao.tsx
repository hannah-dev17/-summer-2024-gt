import React, { useCallback, useEffect } from 'react';
import { JWT_KEY } from '../../config/constant';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ErrorResponse } from '../../types';
import { useKakaoSignIn } from '../../quries';

export function LoginKakao() {
  const navigate = useNavigate();
  const kakaoSignInQuery = useKakaoSignIn();

  const signIn = useCallback(() => {
    const code = new URL(window.location.href).searchParams.get('code');

    if (!code) {
      return;
    }

    kakaoSignInQuery.mutate(
      { code },
      {
        onSuccess: response => {
          const { jwt } = response.result;

          localStorage.setItem(JWT_KEY, jwt);
          navigate('/');
        },
        onError: error => {
          if (axios.isAxiosError<ErrorResponse>(error) && error.response) {
            const { statusCode } = error.response.data;

            if (statusCode === 400 || statusCode === 404) {
              navigate('/sign-up', { state: { signInType: 'kakao', code } });
            }
          }
        },
      },
    );
  }, [kakaoSignInQuery, navigate]);

  useEffect(() => {
    signIn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
}
