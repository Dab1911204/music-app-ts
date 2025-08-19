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
exports.index = void 0;
const farovite_song_model_1 = __importDefault(require("../../models/farovite-song.model"));
const song_model_1 = __importDefault(require("../../models/song.model"));
const singer_model_1 = __importDefault(require("../../models/singer.model"));
const index = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const faroviteSongs = yield farovite_song_model_1.default.find({
        deleted: false
    });
    for (const faroviteSong of faroviteSongs) {
        const song = yield song_model_1.default.findOne({
            _id: faroviteSong.songId,
            deleted: false
        });
        const infoSinger = yield singer_model_1.default.findOne({
            _id: song.singerId,
            deleted: false
        });
        faroviteSong["infoSinger"] = infoSinger;
        faroviteSong["infoSong"] = song;
    }
    res.render("client/page/farovite-songs/index", {
        titlePage: "Danh sách yêu thích",
        faroviteSongs: faroviteSongs
    });
});
exports.index = index;
