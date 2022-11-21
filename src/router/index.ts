import express, { Router } from 'express';
import menuRouter from './menuRouter';
import cartRouter from './cartRouter';
import categoryRouter from './categoryRouter';

const router: Router = express.Router();

router.use('/category', categoryRouter);
router.use('/menu', menuRouter);
router.use('/cart', cartRouter);

module.exports = router;
