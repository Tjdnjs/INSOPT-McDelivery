import { CartPostRequestDto } from './../interface/CartPostRequestDto';
import { Request, Response } from 'express';
import { cartService } from '../service';

//~ 장바구니 조회
const getCart = async (req: Request, res: Response) => {
    try {
        const result = await cartService.getCart();
        if (!result) return res.status(204).send({ status: 204, message: '담은 메뉴가 없습니다.' });
        return res.status(200).send({ status: 200, message: '장바구니 조회 성공', data: result });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ status: 500, message: '서버 내부 에러' });
    }
};

//~ 장바구니 담기
const postCart = async (req: Request, res: Response) => {
    const cartpostRequestDto: CartPostRequestDto = req.body;
    const { menuId } = req.params;
    try {
        const result = await cartService.postCart(+menuId, cartpostRequestDto);
        return res.status(200).send({ status: 200, message: '장바구니 담기 성공', data: result });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ status: 500, message: '서버 내부 에러' });
    }
};

const cartController = {
    getCart,
    postCart,
};

export default cartController;
