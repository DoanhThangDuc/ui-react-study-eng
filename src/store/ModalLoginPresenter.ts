import { action, computed, makeAutoObservable, observable } from 'mobx';
import { getEmailError } from '../shared/helpers/getEmailError';
import { getPasswordError } from '../shared/helpers/getPasswordError';
import { ModalDriver } from '../store/ModalPresenter/ModalPresenter';
import { RootStore } from './RootStore';

export class ModalLoginPresenter implements ModalDriver {
  @observable isLoading = false;
  @observable emailAddress = '';
  @observable emailErrorMessage = '';
  @observable password = '';
  @observable passwordErrorMessage = '';
  constructor(private rootStore: RootStore) {
    makeAutoObservable(this);
  }
  @computed get isOpen() {
    return this.rootStore.modalPresenter.isOpen;
  }
  @action.bound onOpenModal = () => {
    this.rootStore.modalPresenter.onOpenModal();
  };

  @action.bound onCloseModal = () => {
    this.rootStore.modalPresenter.onCloseModal();
  };

  @action.bound onEmailBlur =() => {
    this.emailErrorMessage = getEmailError(this.emailAddress);
  };

  @action.bound onEmailChange = (email: string) => {
    this.emailAddress = email.trim();
    this.emailErrorMessage = '';
  };

  @action.bound onPasswordBlur = () => {
    this.passwordErrorMessage = getPasswordError(this.password);
  };

  @action.bound onPasswordChange = (password: string) => {
    this.password = password.trim();
    this.passwordErrorMessage = '';
  };

  @action.bound setValidationErrors = (errors: { emailErrorMessage: string; passwordErrorMessage: string }) => {
    this.emailErrorMessage = errors.emailErrorMessage;
    this.passwordErrorMessage = errors.passwordErrorMessage;
  };
  @action.bound handleSubmitLogin = async () => {};
}
