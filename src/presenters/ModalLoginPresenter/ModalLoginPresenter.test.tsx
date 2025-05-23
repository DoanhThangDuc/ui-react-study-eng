import { RootPresenter } from '../RootPresenter';
import { ModalLoginPresenter } from './ModalLoginPresenter';

describe('ModalLoginPresenter.test.tsx', () => {
  describe('validate login form', () => {
    it('should show error lable when user input invalid email address', async () => {
      // arrange presenters
      const rootPresenter = new RootPresenter();
      const presenter = new ModalLoginPresenter(rootPresenter);

      {
        // act user hover out from email field
        presenter.onEmailBlur();

        // assert - should show invalid label
        expect(presenter.emailErrorMessage).toBe('modal-login.email-required');

        // arrange reset error message
        presenter.emailErrorMessage = '';
      }

      {
        // act user input invalid email address
        presenter.onEmailChange('invalid email address');
        presenter.onEmailBlur();

        expect(presenter.emailErrorMessage).toBe('modal-login.email-invalid');

        // arrange reset error message
        presenter.emailErrorMessage = '';
      }
    });
    it('should show error lable when user input invalid password', async () => {
      // arrange presenters
      const rootPresenter = new RootPresenter();
      const presenter = new ModalLoginPresenter(rootPresenter);

      {
        // act user hover out from password field
        presenter.onPasswordBlur();

        // assert - should show invalid label
        expect(presenter.passwordErrorMessage).toBe('modal-login.password-required');

        // arrange reset error message
        presenter.passwordErrorMessage = '';
      }

      {
        // act user input invalid password
        presenter.onPasswordChange('invalid password');
        presenter.onPasswordBlur();

        expect(presenter.passwordErrorMessage).toBe('modal-login.password-uppercase-character');

        // arrange reset error message
        presenter.passwordErrorMessage = '';
      }

      {
        // act user input invalid password
        presenter.onPasswordChange('invalid password');
        presenter.onPasswordBlur();

        expect(presenter.passwordErrorMessage).toBe('modal-login.password-uppercase-character');

        // arrange reset error message
        presenter.passwordErrorMessage = '';
      }

      {
        // act user input invalid password
        presenter.onPasswordChange('123');
        presenter.onPasswordBlur();

        expect(presenter.passwordErrorMessage).toBe('modal-login.password-length-invalid');

        // arrange reset error message
        presenter.passwordErrorMessage = '';
      }

      {
        // act user input invalid password
        presenter.onPasswordChange('12345678');
        presenter.onPasswordBlur();

        expect(presenter.passwordErrorMessage).toBe('modal-login.password-uppercase-character');

        // arrange reset error message
        presenter.passwordErrorMessage = '';
      }

      {
        // act user input invalid password
        presenter.onPasswordChange('A2345678');
        presenter.onPasswordBlur();

        expect(presenter.passwordErrorMessage).toBe('modal-login.password-special-character');

        // arrange reset error message
        presenter.passwordErrorMessage = '';
      }
    });
    it('should disable login by password button when user input invalid email address and password', async () => {
      // arrange presenters
      const rootPresenter = new RootPresenter();
      const presenter = new ModalLoginPresenter(rootPresenter);

      // arrange email and password error lables
      presenter.emailErrorMessage = 'email-required';
      presenter.passwordErrorMessage = 'passwrod-required';

      // confirm login button is disable
      expect(presenter.isLoginButtonDisabled).toBeTruthy();

      // arrange spy on sign api
      jest.spyOn(presenter.rootPresenter.userSessionApi, 'signIn');

      // act click on login button
      presenter.onLoginButtonClicked();

      // assert
      expect(presenter.rootPresenter.userSessionApi.signIn).not.toHaveBeenCalled();
    });
    it('should display user not found label when user sign in with not found email address', async () => {});
    it('should display password is incorrect label when user sign in with incorrect password', async () => {});
  });

  describe('success', () => {
    it('should set user token fields correctly when user successfully log in', async () => {
      // arrange presenters
      const rootPresenter = new RootPresenter();
      const presenter = new ModalLoginPresenter(rootPresenter);

      // arrange mock api call
      const user = {
        id: 'c8b890a5-3923-42ba-ae8f-8b89d193f117',
        emailAddress: 'duc.doanh@urbn8.com',
        firstName: 'doanh',
        lastName: 'duc',
        emailAddressVerified: false,
        administrator: false,
        enabled: true
      };
      jest.spyOn(rootPresenter.userSessionApi, 'signIn').mockResolvedValue({
        data: user
      });

      // arrange fields for login form
      presenter.onEmailChange('example@example.com');
      presenter.onPasswordChange('ABC123!!@');

      // act - clicking on login button
      await presenter.onLoginButtonClicked();

      // assert - user are set correctly
      expect(rootPresenter.authPresenter?.user).toMatchObject({
        ...user
      });
    });
  });
});