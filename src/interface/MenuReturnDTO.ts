export interface MenuDTO {
    menuId: number;
    menuName: string;
    priceOnly: number;
    priceSet: number;
    priceLarge: number;
    categoryName: string;
    menu_allergytbl?: allergy[];
    allergy?: string[];
}

export interface allergy{
    allergyName: string;
}