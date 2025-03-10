import { RootPresenter } from '../../../presenters/RootPresenter';
import { getAPIBaseUrl } from '../../env';

export interface SignInPayload {
  emailAddress: string,
    password: string,
}
export interface IUserSesstionApi {
  signIn(data :{
    emailAddress: string,
    password: string,
  }): Promise<void>
}
export class UserSesstionApi implements IUserSesstionApi{
  constructor(private rootPresenter: RootPresenter){}
  async signIn(data: {
    emailAddress: string,
    password: string,
  }) {
    const response = await this.rootPresenter.tokenInterceptorPresenter.call({
      method: 'POST',
      url: `${getAPIBaseUrl()}/v1/auth/signin`,
      data,
    });
    return response;
  }
}