import { action, computed, flow } from 'mobx';
import { RootPresenter } from '../RootPresenter';
import { SignInPayload } from '../../shared/apis/UserSesstionApi/UserSesstionApi';
import { toFlowGeneratorFunction } from 'to-flow-generator-function';

export enum UserSignInError {
  InvalidCredentials = 'InvalidCredentials',
  UserNotFoundError = 'UserNotFoundError',
}

export interface User {
  id: string,
  administrator: boolean,
  enabled: boolean,
  firstName: string,
  lastName: string,
  emailAddress: string,
  emailAddressVerified: boolean,
}

export class AuthPresenter implements User {
  user: User | null = null;
  constructor(private rootPresenter: RootPresenter) {
  }

  @computed get id(): string {
    return this.user?.id || '';
  }

  @computed get administrator(): boolean {
    return this.user?.administrator ?? false;
  }

  @computed get enabled(): boolean {
    return this.user?.enabled ?? false;
  }

  @computed get firstName(): string {
    return this.user?.firstName || '';
  }

  @computed get lastName(): string {
    return this.user?.lastName || '';
  }

  @computed get emailAddress(): string {
    return this.user?.emailAddress || '';
  }

  @computed get emailAddressVerified(): boolean {
    return this.user?.emailAddressVerified ?? false;
  }

  @action.bound setUser(user: User) {
    this.user = user;
  }

  @action.bound signIn = async (payload: SignInPayload) => {
    try {
      const userResponse = await this.rootPresenter.userSesstionApi.signIn(payload);

      if(!userResponse) {
        throw userResponse;
      };

      this.rootPresenter.authPresenter.setUser(userResponse.data);
    } catch(error) {
      throw error;
    }
  };
}
