import { Request, Response } from 'express';
import { menuService } from '../service';

//~ 카테고리 별 메뉴 조회
const getMenuByCategory = async (req: Request, res: Response) => {};

//~ 메뉴 상세 조회
const getMenuInfo = async (req: Request, res: Response) => {};

const menuController = {
    getMenuByCategory,
    getMenuInfo,
};

export default menuController;
