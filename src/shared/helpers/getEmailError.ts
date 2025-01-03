const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const getEmailError = (check: string): string => {
  if (!check) {
    return 'modal-login.email-required';
  }

  if (check === 'Unauthorized') {
    return 'modal-login.email-not-found';
  }

  if (check === 'InvalidCredentials') {
    return 'modal-login.email-not-correct';
  }

  if (!EMAIL_REGEX.test(check)) {
    return 'modal-login.email-invalid';
  }

  return '';
};
