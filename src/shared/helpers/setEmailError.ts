import { validateEmail } from './validateEmail';

export const setEmailError = (email: string) => {
  if (!email) {
    return 'modal-login.email-required';
  }
  if (!validateEmail(email)) {
    return 'modal-login.email-invalid';
  }
  return '';
};