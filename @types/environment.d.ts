declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_API: string;
      REACT_APP_ENV: 'development' | 'production';
      REACT_APP_LOGIN_INFO: string;
      REACT_APP_KAKAO_JAVASCRIPT_API_KEY: string;
      REACT_APP_KAKAO_REST_API_KEY: string;
      REACT_APP_KAKAO_REDIRECT_URI: string;
    }
  }
}

export {};
