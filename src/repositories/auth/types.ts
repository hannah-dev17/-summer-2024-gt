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
