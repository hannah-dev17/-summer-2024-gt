export type ResponseOK<T> = {
  error: string;
  message: string[];
  result: T;
  statusCode: number;
};
