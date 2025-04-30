import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { RootPresenter } from '../RootPresenter';
import { makeAutoObservable } from 'mobx';
export class TokenInterceptorPresenter {
  constructor(
    private rootStore: RootPresenter,
  ) {
    makeAutoObservable(this);
  }
  public async call<T = any, R = AxiosResponse<T>>(
    request: AxiosRequestConfig,
  ): Promise<any> {
    try {
      const response = await Axios(request);

      const respHeaders: Record<string, string> = {};
      for (const [key, value] of Object.entries(response.headers)) {
        respHeaders[key] = value.toString();
      }

      this.rootStore.tokenPresenter.setTokensFromResponse({ headers: respHeaders });

      return response;
    } catch(error) {
      throw error;
    }
  }
}