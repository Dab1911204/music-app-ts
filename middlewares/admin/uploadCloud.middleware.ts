import {Request,Response,NextFunction} from 'express';
import { uploadToCloudinary } from '../../helpers/uploadToCloudinary';


export const uploadSinger = async (req:Request, res:Response, next:NextFunction) => {
    try{
        const result = await uploadToCloudinary(req["file"].buffer);
        req.body[req["file"].fieldname] = result; // Lưu URL của ảnh đã tải lên vào req.body
    }catch(error){
        console.log(error)
    }
    next(); // Tiếp tục với middleware tiếp theo
};

export const uploadFiles = async (req:Request, res:Response, next:NextFunction) => {
    for(const key in req["files"]){
        req.body[key] = [];
        const array = req["files"][key]
        for(const item of array){
            try{
                const result = await uploadToCloudinary(item.buffer);
                req.body[key].push(result);
            }catch(error){
                console.log(error)
            }
        }
    }
    next()
}