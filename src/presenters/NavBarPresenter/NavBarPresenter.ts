import { action, computed, makeAutoObservable } from 'mobx';
import { RootPresenter } from '../RootPresenter';
import { NavBarDriver } from '../../components/NavBar/NavBar';

export class NavBarPresenter implements NavBarDriver {
  constructor(
    private rootPresenter: RootPresenter) {
    makeAutoObservable(this);
  }
  @computed get isLoggedInUser() {
    return !!this.rootPresenter.authPresenter.id;
  }
  @action.bound onOpenLoginModal = () => {
    this.rootPresenter.modalPresenter.onOpenModal();
  };
  @action.bound onLogUserOut = () => {
    this.rootPresenter.authPresenter.onLogUserOut();
  };
}
