import { makeAutoObservable } from 'mobx';
import { ModalPresenter } from './ModalPresenter/ModalPresenter';
import { TokenPresenter } from './TokenPresenter/TokenPresenter';
import { UserSesstionApi } from '../shared/apis/UserSesstionApi/UserSesstionApi';
import { TokenInterceptorPresenter } from './TokenInterceptorPresenter/TokenInterceptorPresenter';
import { AuthPresenter } from './AuthPresenter/AuthPresenter';

export class RootPresenter {
  modalPresenter: ModalPresenter;
  authPresenter: AuthPresenter;
  tokenPresenter: TokenPresenter;
  userSesstionApi: UserSesstionApi;
  tokenInterceptorPresenter: TokenInterceptorPresenter;
  tokenService: TokenPresenter;
  constructor() {
    this.modalPresenter = new ModalPresenter();
    this.tokenPresenter = new TokenPresenter(this);
    this.userSesstionApi = new UserSesstionApi(this);
    this.tokenService = new TokenPresenter(this);
    this.tokenInterceptorPresenter = new TokenInterceptorPresenter(this);
    this.authPresenter = new AuthPresenter(this);

    makeAutoObservable(this);
  }
}
