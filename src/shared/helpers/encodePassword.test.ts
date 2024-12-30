import { encodePassword } from './encodePassword';

describe('encodePassword', () => {
  it('should correctly hash a password using SHA-256', async () => {
    const password = 'testPassword123';
    const expectedHash = 'ef92b778bafe771e89245b5f31b9f7db1f2a3cf1e9b920703075f75ac72ac09c';
    const hashedPassword = await encodePassword(password);

    expect(hashedPassword).toBe(expectedHash);
  });

  it('should return a hexadecimal string', async () => {
    const password = 'anotherPassword!';
    const hashedPassword = await encodePassword(password);

    expect(/^([a-f0-9]{64})$/.test(hashedPassword)).toBe(true);
  });

  it('should return different hashes for different passwords', async () => {
    const password1 = 'password1';
    const password2 = 'password2';

    const hash1 = await encodePassword(password1);
    const hash2 = await encodePassword(password2);

    expect(hash1).not.toBe(hash2);
  });
});
