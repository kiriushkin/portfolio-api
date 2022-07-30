import express from 'express';
import worksRoutes from './works/works.routes.js';
import tagsRoutes from './tags/tags.routes.js';

const router = express.Router();

router.use('/works', worksRoutes);
router.use('/tags', tagsRoutes);

export default router;
