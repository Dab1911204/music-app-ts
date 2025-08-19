"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.result = void 0;
const song_model_1 = __importDefault(require("../../models/song.model"));
const singer_model_1 = __importDefault(require("../../models/singer.model"));
const converToSlug_1 = require("../../helpers/converToSlug");
const result = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const type = `${req.params.type}`;
    const keyword = `${req.query.keyword}`;
    let newSongs = [];
    if (keyword) {
        const keywordRegex = new RegExp(keyword, 'i');
        const stringSlug = (0, converToSlug_1.converToSlug)(keyword);
        const stringSlugRegex = new RegExp(stringSlug, 'i');
        const songs = yield song_model_1.default.find({
            $or: [
                { title: keywordRegex },
                { slug: stringSlugRegex }
            ],
            status: "active",
            deleted: false
        });
        for (const song of songs) {
            const infoSinger = yield singer_model_1.default.findOne({
                _id: song.singerId,
                status: "active",
                deleted: false
            });
            newSongs.push({
                id: song.id,
                title: song.title,
                slug: song.slug,
                avatar: song.avatar,
                like: song.like,
                infoSinger: {
                    fullName: infoSinger.fullName
                }
            });
        }
    }
    switch (type) {
        case "result":
            res.render("client/page/search/result", {
                titlePage: `Kết quả: ${keyword}`,
                keyword: keyword,
                songs: newSongs
            });
            break;
        case "suggest":
            res.json({
                code: 200,
                message: "thành công",
                songs: newSongs
            });
            break;
        default:
            break;
    }
});
exports.result = result;
