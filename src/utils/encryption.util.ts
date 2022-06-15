import CryptoJS from 'crypto-js';

export function encryptPassword(plainPassword: string): string {
  return CryptoJS.AES.encrypt(
    plainPassword,
    process.env.CRYPTO_SECRET
  ).toString();
}

export function decryptPassword(encryptedPassword: string): string {
  return CryptoJS.AES.decrypt(
    encryptedPassword,
    process.env.CRYPTO_SECRET
  ).toString(CryptoJS.enc.Utf8);
}
