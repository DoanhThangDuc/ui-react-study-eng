import { LazyModalWrapper, ModalDriver } from '../../LazyModalWrapper/LazyModalWrapper';
import { ModalLoginLayout } from './ModalLoginLayout';
import { useModal } from '../../../store/hooks';

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
export function ModalLogin() {
  const { modalLogin: store } = useModal();

  return (
    <ModalLoginLayout
      driver={store}
      renderModalWrapper={(children) => (
        <LazyModalWrapper driver={store}>
          {children}
        </LazyModalWrapper>
      )} />
  );
}