import express from 'express';
import MessageResponse from '../interfaces/MessageResponse';
// import { google } from 'googleapis';

const router = express.Router();

router.get<{}, MessageResponse>('/', async (req, res) => {
  // const oauth2Client = new google.auth.OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET, process.env.REDIRECT_URI);
  const code = req.query?.code as string;
  console.log('code', code)
  // const query = req.query;
  // console.log('code', code)
  // console.log('query', query)
  // const { tokens } = await oauth2Client.getToken(code);
  // console.log('tokens', tokens)
  // oauth2Client.setCredentials(tokens);
  // console.log('redirecting to localhost:5000/api/my-library');
  res.redirect(`http://localhost:5000/api/my-library?auth=${code}`);
});

export default router;
