import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '../../shared/constants';
import { isBrowser } from '../../shared/helpers/isBrowser';
import { SeSessionStorage } from '../../shared/helpers/SESessionStorage';
import { RootPresenter } from '../RootPresenter';

export class TokenPresenter {
  constructor(private rootPresenter: RootPresenter) {}

  public getAccessToken(): string {
    if(isBrowser()) {
      return SeSessionStorage.getItem(ACCESS_TOKEN_KEY) ||'';
    }

    return '';
  }

  public getRefreshToken(): string {
    if(isBrowser()) {
      return SeSessionStorage.getItem(REFRESH_TOKEN_KEY) || '';
    }

    return '';
  }

  public setAccessToken(token: string): void {
    if(isBrowser()) {
      SeSessionStorage.setItem(ACCESS_TOKEN_KEY, token);
    }
  }

  public setRefreshToken(token: string): void {
    if(isBrowser()) {
      SeSessionStorage.setItem(REFRESH_TOKEN_KEY, token);
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