import { observable } from 'mobx';
import { RootPresenter } from '../RootPresenter';
import { NavBarPresenter } from '../NavBarPresenter/NavBarPresenter';

export class HomePresenter {
  @observable navbarDriver: NavBarPresenter;
  constructor(private readonly rootPresenter: RootPresenter) {
    this.navbarDriver = new NavBarPresenter(this.rootPresenter);
  }
}