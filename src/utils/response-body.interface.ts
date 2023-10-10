export interface ResponseBody<T> {
  statusCode: number;
  data?: T;
  message?: string;
}
