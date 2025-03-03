import { action, makeAutoObservable, observable } from 'mobx';
export interface ModalDriver {
  isOpen: boolean,
  onOpenModal: ()=>void,
  onCloseModal: ()=>void
}
export class ModalPresenter implements ModalDriver {
  @observable isOpen: boolean = false;
  constructor() {
    makeAutoObservable(this);
  }
  @action.bound onOpenModal = () => {
    this.isOpen = true;
  };
  @action.bound onCloseModal = () => {
    this.isOpen = false;
  };
}