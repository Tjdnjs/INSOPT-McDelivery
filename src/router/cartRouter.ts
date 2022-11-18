import { Router } from 'express';
import { cartController } from '../controller';

const router: Router = Router();

//* 카테고리별 메뉴 조회 ( GET /cart )
router.get('/');

//* 메뉴 상세 보기 ( GET /cart/:menuId )
router.get('/:menuId');

export default router;
