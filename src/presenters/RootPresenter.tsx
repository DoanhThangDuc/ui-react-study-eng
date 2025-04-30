import { action, makeAutoObservable } from 'mobx';
import { ModalPresenter } from './ModalPresenter/ModalPresenter';
import { TokenPresenter } from './TokenPresenter/TokenPresenter';
import { UserSessionApi } from '../shared/apis/UserSessionApi/UserSessionApi';
import { TokenInterceptorPresenter } from './TokenInterceptorPresenter/TokenInterceptorPresenter';
import { AuthPresenter } from './AuthPresenter/AuthPresenter';

export class RootPresenter {
  modalPresenter: ModalPresenter;
  authPresenter: AuthPresenter;
  tokenPresenter: TokenPresenter;
  userSessionApi: UserSessionApi;
  tokenInterceptorPresenter: TokenInterceptorPresenter;
  tokenService: TokenPresenter;
  constructor() {
    this.modalPresenter = new ModalPresenter();
    this.tokenPresenter = new TokenPresenter(this);
    this.userSessionApi = new UserSessionApi(this);
    this.tokenService = new TokenPresenter(this);
    this.tokenInterceptorPresenter = new TokenInterceptorPresenter(this);
    this.authPresenter = new AuthPresenter(this);

    makeAutoObservable(this);
  }
  @action.bound async initLoginUser() {
    await this.authPresenter.getMe();
  }
}
