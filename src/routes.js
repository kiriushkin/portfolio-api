import express from 'express';
import worksRoutes from './works/works.routes.js';
import tagsRoutes from './tags/tags.routes.js';
import tokenRoutes from './token/token.routes.js';

const router = express.Router();

router.use('/works', worksRoutes);
router.use('/tags', tagsRoutes);
router.use('/token', tokenRoutes);

export default router;
