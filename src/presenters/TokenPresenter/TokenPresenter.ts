import { makeAutoObservable } from 'mobx';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../../shared/constants';
import { isBrowser } from '../../shared/helpers/isBrowser';
import { SeLocalStorage } from '../../shared/helpers/SELocalStorage';

export class TokenPresenter {
  constructor() {
    makeAutoObservable(this);
  }

  public getAccessToken(): string {
    if(isBrowser()) {
      return SeLocalStorage.getItem(ACCESS_TOKEN) ||'';
    }

    return '';
  }

  public getRefreshToken(): string {
    if(isBrowser()) {
      return SeLocalStorage.getItem(REFRESH_TOKEN) || '';
    }

    return '';
  }

  public setAccessToken(token: string): void {
    if(isBrowser()) {
      SeLocalStorage.setItem(ACCESS_TOKEN, token);
    }
  }

  public setRefreshToken(token: string): void {
    if(isBrowser()) {
      SeLocalStorage.setItem(REFRESH_TOKEN, token);
    }
  }

  public removeAccessToken() {
    if(isBrowser()) {
      SeLocalStorage.removeItem(ACCESS_TOKEN);
    }
  }

  public removeRefreshToken() {
    if(isBrowser()) {
      SeLocalStorage.removeItem(REFRESH_TOKEN);
    }
  }

  public setTokensFromResponse(response: {
    headers: Record<string, string>;
  }): string {
    const accessToken =
      response.headers.authorization || response.headers.Authorization;

    if (accessToken) {
      this.setAccessToken(accessToken);
    }
    const refreshToken =
      response.headers.refreshtoken || response.headers.RefreshToken;
    if (refreshToken) {
      this.setRefreshToken(refreshToken);
    }

    return accessToken;
  }
}