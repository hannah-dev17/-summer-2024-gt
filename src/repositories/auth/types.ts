export type SignInResponse = {
  id: number;
  jwt: string;
};

export type SignInBody = {
  loginId: string;
  password: string;
};

export type VeryfiJwtTokenResponse = {
  id: number;
  jwt: string;
};

export type VerifyJwtTokenBody = {
  jwt: string;
};

export type SignInByKakaoQueryParams = {
  code: string;
};

export type SignInByKakaoResponse = {
  id: number;
  jwt: string;
};

export type SignUpBody = {
  loginId: string;
  password: string;
  realName: string;
  phone: string;
  birthDate: string;
};

export type SignUpResponse = {
  id: number;
  loginId: string;
};

export type SignUpByKakaoBody = {
  loginId: string;
  password: string;
  realName: string;
  phone: string;
  birthDate: string;
};

export type SignUpByKakaoQueryParams = {
  code: string;
};

export type SignUpByKakaoResponse = {
  id: number;
  loginId: string;
};
