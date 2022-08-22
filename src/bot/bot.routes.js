import express from 'express';
import botControllers from './bot.controllers.js';

const router = express.Router();

router.post('/', botControllers.sendMessage);

export default router;
