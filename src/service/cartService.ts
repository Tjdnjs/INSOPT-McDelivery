import { CartGetResponseDto, setPriceAmount } from './../interface/CartGetResponseDto';
import { CartPostRequestDto } from './../interface/CartPostRequestDto';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const getCart = async () => {
    const menus = await prisma.cart.findMany({
        include: {
            menutbl: {
                select: {
                    menuName: true,
                    priceLarge: true,
                    priceSet: true,
                    priceOnly: true,
                }
            }
        }
    });

    if (menus.length === 0) return null;

    let resultArray: CartGetResponseDto[] = [];
    for await (let menu of menus) {
        const result = {} as CartGetResponseDto;
        const details: setPriceAmount[] = [];
        result.menuId = menu.menuId as number;

        result.title = menu.menutbl.menuName;
        result.total =
            menu.largeSet * menu.menutbl.priceLarge +
            menu.only * menu.menutbl.priceOnly +
            menu.set * menu.menutbl.priceSet;
        if (menu.largeSet !== 0) {
            const detail: setPriceAmount = {
                set: '라지 세트',
                price: menu.menutbl.priceLarge,
                amount: menu.largeSet,
            }
            details.push(detail);
        }
        if (menu.set !== 0) {
            const detail: setPriceAmount = {
                set: '세트',
                price: menu.menutbl.priceSet,
                amount: menu.set as number,
            }
            details.push(detail);
        }
        if (menu.only !== 0) {
            const detail: setPriceAmount = {
                set: '단품',
                price: menu.menutbl.priceOnly,
                amount: menu.only as number,
            }
            details.push(detail);
        }

        result.details = details;
        resultArray.push(result);
    }
    return resultArray;
};

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
