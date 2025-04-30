import { isBrowser } from './helpers/isBrowser';
import { SeLocalStorage } from './helpers/SELocalStorage';

export const getAPIBaseUrl = (): string => {
  if (isBrowser() && SeLocalStorage.getItem('NEXT_PUBLIC_BACKEND_BASE_URL')) {
    return `${SeLocalStorage.getItem('NEXT_PUBLIC_BACKEND_BASE_URL')}`;
  }

  return process.env.NEXT_PUBLIC_BACKEND_BASE_URL || '';
};