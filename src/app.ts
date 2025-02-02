import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
// eslint-disable-next-line import/no-extraneous-dependencies
import * as exphbs from 'express-handlebars';

import * as middlewares from './middlewares';
import api from './api';
import MessageResponse from './interfaces/MessageResponse';

require('dotenv').config();

const app = express();

app.engine('handlebars', exphbs.engine());
app.use(express.static('public'));
app.set('view engine', 'handlebars');
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader(
    'Content-Security-Policy',
    "img-src 'self' data: https:;"
  );
  next();
});

app.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'OK',
  });
});

app.use('/api', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
