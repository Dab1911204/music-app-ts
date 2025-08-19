"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const faroviteSongSchema = new mongoose_1.default.Schema({
    userId: String,
    songId: String,
    deleted: {
        type: Boolean,
        default: false
    },
    deleteAt: Date,
}, { timestamps: true });
const FaroviteSong = mongoose_1.default.model("FaroviteSong", faroviteSongSchema, "farovite-songs");
exports.default = FaroviteSong;
