import { LazyModalWrapper, ModalDriver } from '../../LazyModalWrapper/LazyModalWrapper';
import { ModalLoginLayout } from './ModalLoginLayout';
import { useModal } from '../../../redux/hooks';

export interface ModalLoginDriver extends ModalDriver {
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