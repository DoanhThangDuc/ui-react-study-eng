import { action, makeAutoObservable } from 'mobx';
import { RootPresenter } from '../RootPresenter';

export class NavBarPresenter {
  constructor(private rootPresenter: RootPresenter) {
    makeAutoObservable(this);
  }

  @action.bound onOpenModal = () => {
    this.rootPresenter.modalPresenter.onOpenModal();
  };
}
