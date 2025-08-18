import { Request, Response } from 'express';
import FaroviteSong from '../../models/farovite-song.model';
import Song from '../../models/song.model';
import Singer from '../../models/singer.model';

//[GET] /farovite-songs/
export const index = async (req: Request, res: Response) => {
    const faroviteSongs = await FaroviteSong.find({
        deleted: false
    })
    for (const faroviteSong of faroviteSongs) {
        const song = await Song.findOne({
            _id: faroviteSong.songId,
            deleted: false
        })
        const infoSinger = await Singer.findOne({
            _id: song.singerId,
            deleted: false
        })
        faroviteSong["infoSinger"] = infoSinger;
        faroviteSong["infoSong"] = song;
    }
    res.render("client/page/farovite-songs/index", {
        titlePage: "Danh sách yêu thích",
        faroviteSongs: faroviteSongs
    })
}