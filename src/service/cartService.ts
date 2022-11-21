import { CartPostRequestDto } from './../interface/CartPostRequestDto';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const getCart = async () => { };

const postCart = async (menuId: number, cartpostRequestDto: CartPostRequestDto) => {
    const createdData = await prisma.cart.create({
        data: {
            menuId,
            largeSet: cartpostRequestDto.largeSet,
            set: cartpostRequestDto.set,
            only: cartpostRequestDto.only,
        },
    });
    return createdData;
};

const cartService = {
    getCart,
    postCart,
};

export default cartService;
