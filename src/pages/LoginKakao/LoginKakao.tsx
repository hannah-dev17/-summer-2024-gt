import React, { useCallback, useEffect } from 'react';
import { JWT_KEY } from '../../constants';
import { useNavigate } from 'react-router-dom';
import { useKakaoAccessToken, useKakaoSignIn } from '../../queries';
import axios from 'axios';
import { ErrorResponse } from '../../types';
import { signUpPath } from '../../constants';

export function LoginKakao() {
  const navigate = useNavigate();
  const kakaoAccessTokenQuery = useKakaoAccessToken();
  const kakaoSignInQuery = useKakaoSignIn();

  const signIn = useCallback(() => {
    const code = new URL(window.location.href).searchParams.get('code');

    if (!code) {
      return;
    }

    kakaoAccessTokenQuery.mutate(
      { code },
      {
        onSuccess: response => {
          const { access_token: accessToken } = response.data;

          kakaoSignInQuery.mutate(
            { accessToken },
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
                    navigate(signUpPath, { state: { signInType: 'kakao', accessToken } });
                  }
                }
              },
            },
          );
        },
        onError: error => {
          // eslint-disable-next-line no-console
          console.log(error);
        },
      },
    );
  }, [kakaoAccessTokenQuery, kakaoSignInQuery, navigate]);

  useEffect(() => {
    signIn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
}
