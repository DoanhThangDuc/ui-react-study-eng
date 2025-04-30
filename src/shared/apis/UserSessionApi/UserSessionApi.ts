import { User } from '../../../presenters/AuthPresenter/AuthPresenter';
import { RootPresenter } from '../../../presenters/RootPresenter';
import { getAPIBaseUrl } from '../../env';
export interface SignInPayload {
  emailAddress: string;
  password: string;
}
export interface IUserSessionApi {
  signIn(data: SignInPayload): Promise<User | undefined>;
  getMe(): Promise<User | undefined>;
}

export class UserSessionApi implements IUserSessionApi {
  constructor(private rootPresenter: RootPresenter) {}

  async signIn(data: SignInPayload) {
    try {
      const response = await this.rootPresenter.tokenInterceptorPresenter.call({
        method: 'POST',
        url: `${getAPIBaseUrl()}/v1/auth/signin`,
        data,
      });

      return response;
    } catch(error) {
      throw (error as any).response.data;
    }
  }
  async getMe() {
    const accessToken = this.rootPresenter.tokenPresenter.getAccessToken();
    if(!accessToken) return;

    try {
      const response = await this.rootPresenter.tokenInterceptorPresenter.call({
        method: 'GET',
        url: `${getAPIBaseUrl()}/v1/users/me`,
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });

      return response;
    } catch(error) {
      throw (error as any).response.data;
    }
  }
}