import { User } from '../../../presenters/AuthPresenter/AuthPresenter';
import { RootPresenter } from '../../../presenters/RootPresenter';
import { getAPIBaseUrl } from '../../env';
export interface SignInPayload {
  emailAddress: string;
  password: string;
}
export interface IUserSesstionApi {
  signIn(data: SignInPayload): Promise<User | undefined>;
}

export class UserSesstionApi implements IUserSesstionApi {
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
}