import { setEmailError } from './setEmailError';
import { validateEmail } from './validateEmail';

jest.mock('./validateEmail');
describe('setEmailError', () => {
  it('should return "modal-login.email-required" when email is empty', () => {
    const result = setEmailError('');
    expect(result).toBe('modal-login.email-required');
  });

  it('should return "modal-login.email-invalid" when email is not valid', () => {
    // Mock validateEmail to return false
    (validateEmail as jest.Mock).mockReturnValue(false);

    const result = setEmailError('invalid-email');
    expect(result).toBe('modal-login.email-invalid');
  });

  it('should return an empty string when email is valid', () => {
    // Mock validateEmail to return true
    (validateEmail as jest.Mock).mockReturnValue(true);

    const result = setEmailError('valid@example.com');
    expect(result).toBe('');
  });

  it('should call validateEmail with the correct email', () => {
    // Mock validateEmail to return true
    (validateEmail as jest.Mock).mockReturnValue(true);

    const email = 'test@example.com';
    setEmailError(email);

    expect(validateEmail).toHaveBeenCalledWith(email);
  });
});
