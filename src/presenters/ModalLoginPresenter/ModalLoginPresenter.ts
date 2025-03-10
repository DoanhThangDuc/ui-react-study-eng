import { action, computed, makeAutoObservable, observable } from 'mobx';
import { getEmailError } from '../../shared/helpers/getEmailError';
import { getPasswordError } from '../../shared/helpers/getPasswordError';
import { RootPresenter } from '../RootPresenter';
import { ModalLoginDriver } from '../../components/Modal/ModalLogin/ModalLogin';

export class ModalLoginPresenter implements ModalLoginDriver {
  @observable isLoading = false;
  @observable emailAddress = '';
  @observable emailErrorMessage = '';
  @observable password = '';
  @observable passwordErrorMessage = '';
  constructor(public rootPresenter: RootPresenter) {
    makeAutoObservable(this);
  }
  @computed get isOpen() {
    return this.rootPresenter.modalPresenter.isOpen;
  }

  @computed get isLoginButtonDisabled() {
    return !!this.passwordErrorMessage || !!this.emailErrorMessage || !this.emailAddress || !this.password;
  }
  @action.bound onOpenModal = () => {
    this.rootPresenter.modalPresenter.onOpenModal();
  };

  @action.bound onCloseModal = () => {
    this.rootPresenter.modalPresenter.onCloseModal();
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
  @action.bound onLoginButtonClicked = async () => {
    if(this.isLoginButtonDisabled || this.isLoading) return;

    const payload = {
      emailAddress: 'duc.doanh@urbn8.com',
      password: '6ca13d52ca70c883e0f0bb101e425a89e8624de51db2d2392593af6a84118090'
    };

    const userResponse = await this.rootPresenter.userSesstionApi.signIn(payload);
    console.log('userResponse :>> ', userResponse);
  };
}
