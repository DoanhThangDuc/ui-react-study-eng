import { makeAutoObservable } from 'mobx';
import { ModalPresenter } from './ModalPresenter/ModalPresenter';
import { TokenPresenter } from './TokenPresenter/TokenPresenter';
import { UserSesstionApi } from '../shared/apis/UserSesstionApi/UserSesstionApi';
import { TokenInterceptorPresenter } from './TokenInterceptorPresenter/TokenInterceptorPresenter';

export class RootPresenter {
  modalPresenter: ModalPresenter;
  tokenPresenter: TokenPresenter;
  userSesstionApi: UserSesstionApi;
  tokenInterceptorPresenter: TokenInterceptorPresenter;
  constructor() {
    this.modalPresenter = new ModalPresenter();
    this.tokenPresenter = new TokenPresenter(this);
    this.userSesstionApi = new UserSesstionApi(this);
    this.tokenInterceptorPresenter = new TokenInterceptorPresenter();

    makeAutoObservable(this);
  }
}
