import { getPasswordError } from './getPasswordError';

describe('getPasswordError', () => {
  it('should return "modal-login.password-required" when password is empty', () => {
    const result = getPasswordError('');
    expect(result).toBe('modal-login.password-required');
  });

  it('should return "modal-login.password-length-invalid" when password is less than 8 characters', () => {
    const result = getPasswordError('Short1');
    expect(result).toBe('modal-login.password-length-invalid');
  });

  it('should return "modal-login.password-uppercase-character" when password lacks an uppercase letter', () => {
    const result = getPasswordError('lowercase1@');
    expect(result).toBe('modal-login.password-uppercase-character');
  });

  it('should return "modal-login.password-special-character" when password lacks a special character', () => {
    const result = getPasswordError('Password1');
    expect(result).toBe('modal-login.password-special-character');
  });

  it('should return an empty string when password is valid', () => {
    const result = getPasswordError('Valid1111@');
    expect(result).toBe('');
  });
});
