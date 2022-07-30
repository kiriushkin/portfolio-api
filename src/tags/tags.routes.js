import express from 'express';
import tagsControllers from './tags.controllers.js';

const router = express.Router();

router
  .route('/')
  .get(tagsControllers.getTags)
  .post(tagsControllers.addTag)
  .put(tagsControllers.updateTag)
  .delete(tagsControllers.deleteTag);

export default router;
