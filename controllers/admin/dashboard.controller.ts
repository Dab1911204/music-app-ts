import {Request,Response} from 'express';

//[GET] /admin/dashboard
export const index = async (req:Request, res:Response) => {
    res.render("admin/page/dashboard/index",{
        titlePage: "Tổng quan"
    })
}