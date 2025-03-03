import { makeAutoObservable } from 'mobx';
import { NavBarPresenter } from './NavBarPresenter/NavBarPresenter';
import { ModalPresenter } from './ModalPresenter/ModalPresenter';

export class RootStore {
  modalPresenter: ModalPresenter;
  navbarPresenter: NavBarPresenter;
  constructor() {
    this.modalPresenter = new ModalPresenter();
    this.navbarPresenter = new NavBarPresenter();
    makeAutoObservable(this);
  }
}
