import { Router } from 'express';
import { cartController } from '../controller';

const router: Router = Router();

//* 장바구니 조회 ( GET /cart )
router.get('/', cartController.getCart);

//* 장바구니 담기 ( POST /cart/:menuId )
router.get('/:menuId', cartController.putCart);

export default router;
