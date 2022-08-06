import express from 'express';
import worksControllers from './works.controllers.js';
import auth from '../middlewares/auth.middleware.js';

const router = express.Router();

router.get('/:name', worksControllers.getWork);

router
  .route('/')
  .get(worksControllers.getWorks)
  .post(auth, worksControllers.addWork)
  .put(auth, worksControllers.updateWork)
  .delete(auth, worksControllers.deleteWork);

export default router;
