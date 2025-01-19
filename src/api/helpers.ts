import { Credentials } from 'google-auth-library';
const dotenv = require('dotenv');
dotenv.config();

export const saveGoogleAuthTokens = async (token: Credentials) => {
  process.env.GOOGLE_ACCESS_TOKEN = token.access_token || undefined;
  process.env.GOOGLE_REFRESH_TOKEN = token.refresh_token || undefined;
  process.env.GOOGLE_EXPIRY_DATE = token.expiry_date?.toString
    ? token.expiry_date.toString()
    : undefined;
};

export const isTokenExpired = (expiryDate: number) => {
  const currentTime = Date.now();
  return expiryDate <= currentTime;
};