import { isBrowser } from './isBrowser';

export class SELocalStorage implements Storage {
  private storage: { [key: string]: string } = {};

  constructor() {}

  clear(): void {
    this.storage = {};
  }
  getItem(name: string): string | null {
    if (this.storage.hasOwnProperty(name)) {
      return this.storage[name];
    }
    return null;
  }
  key(index: number): string | null {
    return Object.keys(this.storage)[index] || null;
  }
  removeItem(name: string): void {
    delete this.storage[name];
  }
  setItem(name: string, value: string): void {
    this.storage[name] = String(value);
  }
  get length(): number {
    return Object.keys(this.storage).length;
  }
}
export const SeLocalStorage =  isBrowser() ? window.localStorage : new SELocalStorage();