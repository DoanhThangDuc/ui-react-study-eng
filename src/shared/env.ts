import { isBrowser } from './helpers/isBrowser';
import { SeSessionStorage } from './helpers/SESessionStorage';

export const getAPIBaseUrl = (): string => {
  if (isBrowser() && SeSessionStorage.getItem('NEXT_PUBLIC_BACKEND_BASE_URL')) {
    return `${SeSessionStorage.getItem('NEXT_PUBLIC_BACKEND_BASE_URL')}`;
  }

  return process.env.NEXT_PUBLIC_BACKEND_BASE_URL || '';
};