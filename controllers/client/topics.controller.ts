import {Request,Response} from 'express';
import Topic from "../../models/topics.model"

//[GET] /topics
export const index = async (req:Request, res:Response) => {
    const topics = await Topic.find({
        deleted: false
    })
    res.render("client/page/topics/index",{
        titlePage: "Trang chủ bài hát",
        topics: topics
    })
}
