import { makeAutoObservable } from 'mobx';

export class NavBarPresenter {
  constructor() {
    makeAutoObservable(this);
  }

  openLoginModal() {
  }
}
