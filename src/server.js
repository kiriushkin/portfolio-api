import 'dotenv/config';
import cors from 'cors';
import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'development') app.use(cors({ origin: '*' }));

if (process.env.NODE_ENV === 'production')
  app.use(cors({ origin: process.env.CLIENT_ORIGIN }));

app.listen(process.env.PORT);
