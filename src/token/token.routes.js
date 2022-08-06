import express from 'express';
import tokenControllers from './token.controllers.js';
import auth from '../middlewares/auth.middleware.js';

const router = express.Router();

router.route('/').get(tokenControllers.getToken).post(tokenControllers.getUser);

router.post('/auth', auth, tokenControllers.auth);

export default router;
