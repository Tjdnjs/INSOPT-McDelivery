import { Request, Response } from 'express';
import { cartService } from '../service';

//~ 장바구니 조회
const getCart = async (req: Request, res: Response) => {};
//~ 장바구니 담기
const postCart = async (req: Request, res: Response) => {};

const cartController = {
    getCart,
    postCart,
};

export default cartController;
