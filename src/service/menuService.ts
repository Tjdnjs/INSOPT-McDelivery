import { MenuDTO, allergy } from './../interface/MenuReturnDTO';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const getMenuByCategory = async (category: string) => {
    const menuList : MenuDTO|any = await prisma.menutbl.findMany({
        where: {
            categoryName: category,
        },
        include: {
            menu_allergytbl: {
                select: {
                    allergyName: true
                }
            }
        }
    });

    const Menu = allergies(menuList);
    return Menu;
};

const getMenuInfo = async (menuId: number) => {
    const menu : MenuDTO|any = await prisma.menutbl.findUnique({
        where: {
            menuId,
        },
        include: {
            menu_allergytbl: {
                select: {
                    allergyName: true
                }
            }
        }
    });

    if (!menu){
        return menu;
    } 
    const MenuInfo = allergy(menu);

    return MenuInfo
};

const allergy = (menu: MenuDTO) =>{
    const allergy : allergy[]|any = menu.menu_allergytbl;
    const allergies = allergy.map((el: allergy) => {
        return el.allergyName
    })
    delete menu.menu_allergytbl;
    menu.allergy = allergies;
    return menu;
}

const allergies = (li: MenuDTO[]) => {
    const returnList = li.map((menu: MenuDTO) => {
        return allergy(menu);
    })

    return returnList;
}

const menuService = {
    getMenuByCategory,
    getMenuInfo,
};

export default menuService;
