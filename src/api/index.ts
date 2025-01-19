import express from 'express';
import { OAuth2Client } from 'google-auth-library';
import { google } from 'googleapis';
import MessageResponse from '../interfaces/MessageResponse';
import highlights from './highlights';
import auth from './auth';
import books from './books';
import { saveGoogleAuthTokens, isTokenExpired } from './helpers';

const router = express.Router();

// const SCOPES = ['https://www.googleapis.com/auth/books'];

router.get<{}, MessageResponse>('/my-library', async (req, res) => {
  const oauth2Client = new google.auth.OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET, process.env.REDIRECT_URI);

  // oauth2Client.on('tokens', (tokens) => {
  //   if (tokens.refresh_token) {
  //     saveGoogleAuthTokens(tokens); // Save new refresh token if available
  //   }
  //   console.log('Tokens refreshed:', tokens);
  // });


  async function listBookshelves(authClient: any) {
    const books = google.books({ version: 'v1', auth: authClient });
    // const response = await books.mylibrary.bookshelves.list();
    // const readBooks = await books.mylibrary.bookshelves.get({ shelf: '7' });
    // const toReadBooks = await books.mylibrary.bookshelves.get({ shelf: '2' });
    const bookList = await books.mylibrary.bookshelves.volumes.list({
      shelf: '4',
    });

    const book = bookList?.data?.items?.[0];
    const volumeInfo = book?.volumeInfo;
    console.log('book', book)
    console.log('volumeInfo', volumeInfo)
    // const layerInfo = book?.layerInfo;
    // const userInfo = book?.userInfo;
    // const saleInfo = book?.saleInfo;
    // const accessInfo = book?.accessInfo;

    // const title = volumeInfo?.title;
    // const subtitle = volumeInfo?.subtitle;
    // const author = volumeInfo?.authors?.[0];
    // const thumbnail = volumeInfo?.imageLinks?.thumbnail;
    // const description = volumeInfo?.description;
  }


  async function refreshAccessToken(_oauth2Client: OAuth2Client) {
    const { credentials } = await _oauth2Client.refreshAccessToken();
    saveGoogleAuthTokens(credentials);
    return credentials;
  }


  // try {
  //   // const code = req.query?.auth as string;
  //   // if (!code) {
  //   //   generateAuthUrl();
  //   //   return;
  //   // }
  //   // const { tokens } = await oauth2Client.getToken(code);
  //   // const tokens = {
  //   //   access_token: process.env.GOOGLE_ACCESS_TOKEN || undefined,
  //   //   scope: 'https://www.googleapis.com/auth/books',
  //   //   token_type: 'Bearer',
  //   //   expiry_date: 1736719332139
  //   // }
  //   let tokens = {
  //     access_token: process.env.GOOGLE_ACCESS_TOKEN || undefined,
  //     refresh_token: process.env.GOOGLE_REFRESH_TOKEN || undefined,
  //   };

  //   oauth2Client.setCredentials(isTokenExpired(Number(process.env.GOOGLE_EXPIRY_DATE)) ? await refreshAccessToken(oauth2Client) : tokens);

  //   await refreshAccessToken(oauth2Client);
  //   listBookshelves(oauth2Client);
  // } catch (e) {
  //   console.log('e', e);
  // }

  const specificBookHighlights = 'https://readwise.io/api/v2/highlights?book_id=47802668';
  const bookEndpoint = 'https://readwise.io/api/v2/books/' // get ids from results[].id
  // const highlight = 'https://readwise.io/api/v2/books/'

  // Make the GET request
  const response = await fetch(specificBookHighlights, {
    headers: {
      Authorization: `Token ${process.env.READWISE_ACCESS_TOKEN}` // Authorization header
    },
  });

  const data = await response.json(); // Parse the JSON response
  console.log('data', data)

  res.json({
    message: data
  });
});

router.use('/highlights', highlights);
router.use('/auth', auth);
router.use('/books', books);

export default router;
