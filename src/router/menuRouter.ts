import { Router } from 'express';
import { menuController } from '../controller';

const router: Router = Router();

//* 카테고리별 메뉴 조회 ( GET /menu/:categoryName )
router.get('/:categoryName', menuController.getMenuByCategory);

//* 메뉴 상세 보기 ( GET menu/:menuId )
router.get('/:menuId', menuController.getMenuInfo);

export default router;
