import { Request, Response } from 'express';
import { menuService } from '../service';

//~ 카테고리 별 메뉴 조회
const getMenuByCategory = async (req: Request, res: Response) => {
    const { categoryName } = req.params
    const data = await menuService.getMenuByCategory(categoryName);

    if (!data){
        return res.status(400).json({ status: 400, message: `${categoryName} 카테고리 내 메뉴 조회에 실패하였습니다.`});
    }
    
    if (!data[0]){
        return res.status(200).json({status: 204, message: `${categoryName} 카테고리 내 메뉴가 존재하지 않습니다.`});
    }

    return res.status(200).json({ status: 200, message: `${categoryName} 카테고리 내 메뉴 조회 성공`, data });
};

//~ 메뉴 상세 조회
const getMenuInfo = async (req: Request, res: Response) => {
    const { menuId } = req.params;
    const data = await menuService.getMenuInfo(+menuId);

    if (!data){
        return res.status(400).json({ status: 400, message: '메뉴 조회에 실패하였습니다.'});
    }

    return res.status(200).json({ status: 200, message: '메뉴 조회 성공', data });
};

const menuController = {
    getMenuByCategory,
    getMenuInfo,
};

export default menuController;
