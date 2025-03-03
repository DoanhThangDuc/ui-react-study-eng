import { useState } from 'react';
import { LazyModalWrapper, ModalDriver } from '../../LazyModalWrapper/LazyModalWrapper';
import { ModalLoginLayout } from './ModalLoginLayout';
import { ModalLoginPresenter } from '../../../presenter/ModalLoginPresenter';
import { observer } from 'mobx-react-lite';
import { useRootPresenter } from '../../Provider/PresenterProvider';

export interface ModalLoginDriver extends ModalDriver {
  emailAddress: string;
  emailErrorMessage?: string
  passwordErrorMessage?: string;
  password: string;
  onEmailBlur: () => void;
  onPasswordBlur: () => void;
  onEmailChange:(email: string) => void;
  onPasswordChange:(password: string) => void;
  onOpenModal:() => void;
  handleSubmitLogin: () => Promise<void>
}
export const ModalLogin = observer(() => {
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