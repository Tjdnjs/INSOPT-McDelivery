import { Router } from 'express';
import { menuController } from '../controller';

const router: Router = Router();

//* 카테고리별 메뉴 조회 ( GET /category/:categoryName )
router.get('/:categoryName', menuController.getMenuByCategory);


export default router;