import CryptoJS from 'crypto-js';

export function encryptPassword(password: string): string {
  return CryptoJS.AES.encrypt(password, process.env.SECRET_KEY).toString();
}

export function decryptPassword(encryption: string): string {
  return CryptoJS.AES.decrypt(encryption, process.env.SECRET_KEY).toString(
    CryptoJS.enc.Utf8
  );
}
