export const setPasswordError = (password: string) => {
  if (!password) {
    return 'modal-login.password-required';
  }
  if (password.length < 8) {
    return 'modal-login.password-length-invalid';
  }
  if (!/[A-Z]/.test(password)) {
    return 'modal-login.password-uppercase-character';
  }
  if (!/[@$!%*?&#]/.test(password)) {
    return 'modal-login.password-special-character';
  }
  return '';
};