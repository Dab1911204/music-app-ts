import mongoose from 'mongoose';

const faroviteSongSchema = new mongoose.Schema(
    {
        userId: String,
        songId: String,
        deleted: {
            type: Boolean,
            default: false
        },
        deleteAt: Date,
    },
    { timestamps: true }
)

const FaroviteSong = mongoose.model("FaroviteSong", faroviteSongSchema, "farovite-songs");

export default FaroviteSong;