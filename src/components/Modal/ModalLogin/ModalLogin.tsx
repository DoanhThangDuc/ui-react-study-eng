import { LazyModalWrapper, ModalDriver } from '../../LazyModalWrapper/LazyModalWrapper';
import { ModalLoginLayout } from './ModalLoginLayout';
import { useModal } from '../../../redux/hooks';

export interface ModalLoginDriver extends ModalDriver {
  emailAddress: string;
  isEmailValid?: boolean;
  isPasswordValid?: boolean;
  password: string;
  onBlur: (payload: any) => void;
}
export function ModalLogin() {
  const store = useModal();

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