import { GoodForHealthSection } from '../../../../components/GoodForHealthSection/GoodForHealthSection';
import { HomeHeader } from '../../../../components/HomeHeader/HomeHeader';
import { ModalLogin } from '../../../../components/Modal/ModalLogin/ModalLogin';
import { NavBar } from '../../../../components/NavBar/NavBar';
import { HomeLayout } from '../../../../components/PageLayouts/HomeLayout';
import { PlanSection } from '../../../../components/PlanSection/PlanSection.styled';
import StoreProvider from '../../../../components/Provider/StoreProvider';
import reducer, {
  onOpenModal,
  onCloseModal,
  onEmailBlur,
  onPasswordBlur,
  onEmailChange,
  onPasswordChange,
  ModalLoginSliceDriver,
} from './modalLoginSlice';
import { render, screen, fireEvent, act } from '@testing-library/react';

describe('modalLoginSlice', () => {
  describe.only('Modal open/close', () => {
    it.only('should set isOpen to true when the modal is opened', () => {
      // arrange render dom tree
      render(
        <StoreProvider >
          <HomeLayout
            renderNavBar={() => (<NavBar />)}
            renderHeader={() => (<HomeHeader />)}
            renderBody={() => (<GoodForHealthSection />)}
            renderFooter={() => (<PlanSection />)}
            renderModal={() => <ModalLogin />} />
        </StoreProvider>
      );

      // confirm - login button is visible
      expect(screen.getByRole('button', {
        name: 'Login-button',
      })).toBeVisible();

      // confirm - modal login is not visible
      expect(screen.getByRole('modal', {
        name: 'ModalLoginContainer',
      })).not.toBeVisible();

      // act - clicking on login button
      act(() => {
        fireEvent.click(
          screen.getByRole('button', {
            name: 'Login-button',
          }),
        );
      });

      // assert - modal login is visible
      // expect(screen.getByRole('modal', {
      //   name: 'ModalLoginContainer',
      // })).toBeVisible();
    });

    it('should set isOpen to false when the modal is closed', () => {
      // Test code here
    });
  });
  describe('Validation form inputs', () => {
    it('should show \'modal-login.email-required\' error when email is empty', () => {
      render(
        <StoreProvider >
          <HomeLayout
            renderNavBar={() => (<NavBar />)}
            renderHeader={() => (<HomeHeader />)}
            renderBody={() => (<GoodForHealthSection />)}
            renderFooter={() => (<PlanSection />)}
            renderModal={() => <ModalLogin />} />
        </StoreProvider>
      );

    });

    it('should show \'modal-login.email-not-found\' error when email is \'Unauthorized\'', () => {
      // Test code here
    });

    it('should show \'modal-login.email-not-correct\' error when email is \'InvalidCredentials\'', () => {
      // Test code here
    });

    it('should show \'modal-login.email-invalid\' error when email format is invalid', () => {
      // Test code here
    });

    it('should not show any error message when email is valid', () => {
      // Test code here
    });

    it('should show \'modal-login.password-required\' error when password is empty', () => {
      // Test code here
    });

    it('should show \'modal-login.password-invalid\' error when password is invalid', () => {
      // Test code here
    });

    it('should not show any error message when password is valid', () => {
      // Test code here
    });
  });

  describe('Email and Password change', () => {
    it('should clear email error message when email is changed', () => {
      // Test code here
    });

    it('should clear password error message when password is changed', () => {
      // Test code here
    });
  });

  describe('Set validation errors', () => {
    it('should set specific error messages for both email and password', () => {
      // Test code here
    });
  });

  describe('handleSubmitLogin action', () => {
    it('should set isLoading to true when login is pending', () => {
      // Test code here
    });

    it('should set isLoading to false when login is successful', () => {
      // Test code here
    });

    it('should set isLoading to false and show error when login fails', () => {
      // Test code here
    });
  });
});
