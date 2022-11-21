import { Router } from 'express';
import { menuController } from '../controller';

const router: Router = Router();


//* 메뉴 상세 보기 ( GET /menu/:menuId )
router.get('/:menuId', menuController.getMenuInfo);

export default router;
