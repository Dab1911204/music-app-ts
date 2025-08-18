import { Request, Response } from 'express';
import Song from '../../models/song.model';
import Singer from '../../models/singer.model';

import { converToSlug } from '../../helpers/converToSlug';

//[GET] /search/:type
export const result = async (req: Request, res: Response) => {
    const type: string = `${req.params.type}`;
    const keyword: string = `${req.query.keyword}`;
    let newSongs = [];
    if (keyword) {
        const keywordRegex = new RegExp(keyword, 'i');
        //Tạo ra slug ko dấu,có thêm dấu - ngăng cách
        const stringSlug = converToSlug(keyword)
        const stringSlugRegex = new RegExp(stringSlug, 'i');
        const songs = await Song.find({
            $or: [
                { title: keywordRegex },
                { slug: stringSlugRegex }
            ],
            status: "active",
            deleted: false
        })
        for (const song of songs) {
            const infoSinger = await Singer.findOne({
                _id: song.singerId,
                status: "active",
                deleted: false
            })
            newSongs.push({
                id: song.id,
                title: song.title,
                slug: song.slug,
                avatar: song.avatar,
                like: song.like,
                infoSinger:{
                    fullName: infoSinger.fullName
                }
            })
        }
    }
    switch (type) {
        case "result":
            res.render("client/page/search/result", {
                titlePage: `Kết quả: ${keyword}`,
                keyword: keyword,
                songs: newSongs
            })
            break
        case "suggest":
            res.json({
                code: 200,
                message:"thành công",
                songs: newSongs
            })
            break
        default:
            break
    }
}