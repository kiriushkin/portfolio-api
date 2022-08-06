import express from 'express';
import tagsControllers from './tags.controllers.js';
import auth from '../middlewares/auth.middleware.js';

const router = express.Router();

router
  .route('/')
  .get(tagsControllers.getTags)
  .post(auth, tagsControllers.addTag)
  .put(auth, tagsControllers.updateTag)
  .delete(auth, tagsControllers.deleteTag);

export default router;
