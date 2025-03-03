import { makeAutoObservable } from 'mobx';
import { ModalPresenter } from './ModalPresenter/ModalPresenter';

export class RootPresenter {
  modalPresenter: ModalPresenter;
  constructor() {
    this.modalPresenter = new ModalPresenter();
    makeAutoObservable(this);
  }
}
