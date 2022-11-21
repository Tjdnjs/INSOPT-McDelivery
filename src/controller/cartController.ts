import { CartPostRequestDto } from './../interface/CartPostRequestDto';
import { Request, Response } from 'express';
import { cartService } from '../service';

//~ 장바구니 조회
const getCart = async (req: Request, res: Response) => { };

//~ 장바구니 담기
const postCart = async (req: Request, res: Response) => {
    const cartpostRequestDto: CartPostRequestDto = req.body;
    const { menuId } = req.params;
    try {
        const result = await cartService.postCart(+menuId, cartpostRequestDto);
        return res.status(200).send({ message: '장바구니 담기 성공', data: result });

    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: '서버 내부 에러' });
    }
};

const cartController = {
    getCart,
    postCart,
};

export default cartController;
