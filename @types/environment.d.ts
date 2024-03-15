declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_API: string;
      REACT_APP_ENV: 'development' | 'production';
      REACT_APP_LOGIN_INFO: string;
    }
  }
}

export {};
