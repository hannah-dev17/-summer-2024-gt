export type ResponseOK<T> = {
  error: string;
  message: string[];
  result: T;
  statusCode: number;
};

export type ErrorResponse = {
  statusCode: number;
  error: string;
  message: string[];
};
