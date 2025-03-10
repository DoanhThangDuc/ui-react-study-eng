import { useState } from 'react';
import { LazyModalWrapper, ModalDriver } from '../../LazyModalWrapper/LazyModalWrapper';
import { ModalLoginLayout } from './ModalLoginLayout';
import { ModalLoginPresenter } from '../../../presenters/ModalLoginPresenter/ModalLoginPresenter';
import { observer } from 'mobx-react-lite';
import { useRootPresenter } from '../../Provider/PresenterProvider';

export interface ModalLoginDriver extends ModalDriver {
  emailAddress: string;
  emailErrorMessage?: string
  passwordErrorMessage?: string;
  password: string;
  isLoginButtonDisabled: boolean;
  onEmailBlur: () => void;
  onPasswordBlur: () => void;
  onEmailChange:(email: string) => void;
  onPasswordChange:(password: string) => void;
  onOpenModal:() => void;
  onLoginButtonClicked: () => Promise<void>
}
export const ModalLoginSmart = observer(() => {
  const rootPresenter = useRootPresenter();
  const [presenter] = useState(() => new ModalLoginPresenter(rootPresenter));

  return (
    <ModalLoginLayout
      driver={presenter}
      renderModalWrapper={(children) => (
        <LazyModalWrapper driver={presenter}>
          {children}
        </LazyModalWrapper>
      )} />
  );
});