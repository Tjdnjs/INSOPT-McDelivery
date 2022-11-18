import { Request, Response } from 'express';
import { cartService } from '../service';

//~ 장바구니 조회
const getCart = async (req: Request, res: Response) => {};
//~ 장바구니 담기
const putCart = async (req: Request, res: Response) => {};

const cartController = {
    getCart,
    putCart,
};

export default cartController;
