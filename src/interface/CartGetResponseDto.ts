export interface CartGetResponseDto {
    menuId: number;
    title: string;
    total: number;
    details: setPriceAmount[];
}

export interface setPriceAmount {
    set: string;
    price: number;
    amount: number;
}
