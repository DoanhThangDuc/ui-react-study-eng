import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
export class TokenInterceptorPresenter {
  constructor() {}
  public async call<T = any, R = AxiosResponse<T>>(
    request: AxiosRequestConfig,
  ): Promise<any> {
    try {
      const response = await Axios(request);
      return response;
    } catch(error) {
      console.log('error :>> ', error);
    }
  }
}