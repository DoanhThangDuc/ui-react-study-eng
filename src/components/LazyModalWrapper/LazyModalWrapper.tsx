import Modal from 'react-modal';
import { sc } from './LazyModalWrapper.styled';

export interface ModalDriver {
  isOpen: boolean;
  onCloseModal: () => void
}
export const LazyModalWrapper = (props: {
  children: React.ReactNode;
  driver: ModalDriver
}) => {
  const { children, driver } = props;

  return (
    <Modal
      ariaHideApp={false}
      bodyOpenClassName="bodyOpenModal"
      isOpen={driver.isOpen}
      closeTimeoutMS={500}
      style={{
        overlay: {
          position: 'fixed',
          top: '0',
          bottom: '0',
          left: '0',
          right: '0',
          backgroundColor: 'transparent',
          width: '100%',
          height: '100%',
          minHeight: '100vh',
          overflow: 'hidden overlay',
        },
        content: {
          top: '0',
          bottom: '0',
          left: '0',
          right: '0',
          position: 'relative',
          width: '100%',
          height: '100%',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 0,
          border: 'none',
          borderRadius: 0,
          background: 'none',
          overflow: 'hidden overlay',
        },
      }}>
      <sc.ModalOverlay
        aria-label="ModalOverlay"
        onClick={props.driver.onCloseModal} />
      <sc.ModalBody>
        {children}
      </sc.ModalBody>
    </Modal>
  );
};