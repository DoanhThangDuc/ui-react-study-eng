import reducer, {
  onOpenModal,
  onCloseModal,
  onEmailBlur,
  onPasswordBlur,
  onEmailChange,
  onPasswordChange,
  handleSubmitLogin,
  ModalLoginSliceDriver,
} from './modalLoginSlice';

describe('modalLoginSlice', () => {
  const initialState: ModalLoginSliceDriver = {
    isOpen: false,
    loading: false,
    error: null,
    emailAddress: '',
    emailErrorMessage: '',
    password: '',
    passwordErrorMessage: '',
  };

  it('should handle initial state', () => {
    expect(reducer(undefined, { type: '' })).toEqual(initialState);
  });

  it('should open modal with onOpenModal', () => {
    const state = reducer(initialState, onOpenModal());
    expect(state.isOpen).toBe(true);
    expect(state.emailAddress).toBe('');
    expect(state.password).toBe('');
  });

  it('should close modal with onCloseModal', () => {
    const state = reducer({ ...initialState, isOpen: true }, onCloseModal());
    expect(state.isOpen).toBe(false);
  });

  describe('Email validation', () => {
    it('should set error if email is empty on blur', () => {
      const state = reducer(initialState, onEmailBlur());
      expect(state.emailErrorMessage).toBe('modal-login.email-required');
    });

    it('should set error if email is invalid on blur', () => {
      const state = reducer(
        { ...initialState, emailAddress: 'invalid-email' },
        onEmailBlur()
      );
      expect(state.emailErrorMessage).toBe('modal-login.email-invalid');
    });

    it('should clear error when email is valid', () => {
      const state = reducer(
        { ...initialState, emailAddress: 'test@example.com' },
        onEmailBlur()
      );
      expect(state.emailErrorMessage).toBe('');
    });

    it('should update email on onEmailChange', () => {
      const state = reducer(initialState, onEmailChange('new@example.com'));
      expect(state.emailAddress).toBe('new@example.com');
      expect(state.emailErrorMessage).toBe('');
    });
  });

  describe('Password validation', () => {
    it('should set error if password is empty on blur', () => {
      const state = reducer(initialState, onPasswordBlur());
      expect(state.passwordErrorMessage).toBe('modal-login.password-required');
    });

    it('should set error if password is too short', () => {
      const state = reducer(
        { ...initialState, password: 'Short1!' },
        onPasswordBlur()
      );
      expect(state.passwordErrorMessage).toBe('modal-login.password-length-invalid');
    });

    it('should set error if password lacks an uppercase character', () => {
      const state = reducer(
        { ...initialState, password: 'password1!' },
        onPasswordBlur()
      );
      expect(state.passwordErrorMessage).toBe('modal-login.password-uppercase-character');
    });

    it('should set error if password lacks a special character', () => {
      const state = reducer(
        { ...initialState, password: 'Password1' },
        onPasswordBlur()
      );
      expect(state.passwordErrorMessage).toBe('modal-login.password-special-character');
    });

    it('should clear error when password is valid', () => {
      const state = reducer(
        { ...initialState, password: 'Password1!' },
        onPasswordBlur()
      );
      expect(state.passwordErrorMessage).toBe('');
    });

    it('should update password on onPasswordChange', () => {
      const state = reducer(initialState, onPasswordChange('NewPassword123!'));
      expect(state.password).toBe('NewPassword123!');
      expect(state.passwordErrorMessage).toBe('');
    });
  });

  describe('handleSubmitLogin', () => {
    it('should set errors if email or password is invalid', () => {
      const state = reducer(
        { ...initialState, emailAddress: '', password: 'short' },
        handleSubmitLogin()
      );
      expect(state.emailErrorMessage).toBe('modal-login.email-required');
      expect(state.passwordErrorMessage).toBe('modal-login.password-length-invalid');
    });

    it('should clear errors if email and password are valid', () => {
      const state = reducer(
        { ...initialState, emailAddress: 'test@example.com', password: 'Password1!' },
        handleSubmitLogin()
      );
      expect(state.emailErrorMessage).toBe('');
      expect(state.passwordErrorMessage).toBe('');
    });
  });
});
