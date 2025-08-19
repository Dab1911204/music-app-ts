import {Request,Response} from 'express';
import Topic from '../../models/topics.model';

//[GET] /admin/upload
export const index = async (req:Request, res:Response) => {
    console.log(req.body)
    res.json({
        location: req.body.file
    })

}