import express from 'express';
import worksControllers from './works.controllers.js';

const router = express.Router();

router.get('/:name', worksControllers.getWork);

router
  .route('/')
  .get(worksControllers.getWorks)
  .post(worksControllers.addWork)
  .put(worksControllers.updateWork)
  .delete(worksControllers.deleteWork);

export default router;
