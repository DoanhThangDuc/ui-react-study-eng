import { getEmailError } from './getEmailError';

describe('getEmailError', () => {
  it('should return "modal-login.email-required" when email is empty', () => {
    const result = getEmailError('');
    expect(result).toBe('modal-login.email-required');
  });

  it('should return "modal-login.email-not-found" when email is "Unauthorized"', () => {
    const result = getEmailError('Unauthorized');
    expect(result).toBe('modal-login.email-not-found');
  });

  it('should return "modal-login.email-not-correct" when email is "InvalidCredentials"', () => {
    const result = getEmailError('InvalidCredentials');
    expect(result).toBe('modal-login.email-not-correct');
  });

  it('should return "modal-login.email-invalid" when email does not match the regex', () => {
    const result = getEmailError('invalid-email');
    expect(result).toBe('modal-login.email-invalid');
  });

  it('should return "" when email is valid', () => {
    const result = getEmailError('valid@example.com');
    expect(result).toBe('');
  });
});
