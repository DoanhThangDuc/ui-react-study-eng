import { sha256 } from 'hash.js';

//# DO NOT CHANGE THIS SALT VALUE #
const salt = '#study-english#';

export default function hashPassword(password: string, email: string): string {
  return sha256().update(`${email}${salt}${password}`).digest('hex');
}
