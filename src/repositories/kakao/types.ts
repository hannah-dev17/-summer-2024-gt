export type CreateAccessTokenBody = {
  code: string;
};

export type CreateAccessTokenResponse = {
  token_type: 'bearer';
  access_token: string;
  expires_in: number;
  refresh_token: string;
  refresh_token_expires_in: number;
};
