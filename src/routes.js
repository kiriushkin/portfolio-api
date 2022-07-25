import express from 'express';
import worksRoutes from './works/works.routes.js';

const router = express.Router();

router.use('/works', worksRoutes);

export default router;
