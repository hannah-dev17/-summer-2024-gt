import React, { useEffect } from 'react';
import { AuthRepository } from '../../repositories';
import { JWT_KEY } from '../../config/constant';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ErrorResponse } from '../../types';

export function LoginKakao() {
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');

    const signInByKakao = async () => {
      try {
        if (code) {
          const response = await AuthRepository.signInByKakao({ code });
          const { jwt } = response.result;

          localStorage.setItem(JWT_KEY, jwt);
          navigate('/');
        }
      } catch (error) {
        if (axios.isAxiosError<ErrorResponse>(error) && error.response) {
          const { statusCode } = error.response.data;

          if (statusCode === 400 || statusCode === 404) {
            navigate('/sign-up');
          }
        }
      }
    };

    signInByKakao();
  }, [navigate]);

  return <></>;
}
