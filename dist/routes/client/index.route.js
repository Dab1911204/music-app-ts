"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const topics_route_1 = require("./topics.route");
const songs_route_1 = require("./songs.route");
const farovite_song_route_1 = require("./farovite-song.route");
const search_route_1 = require("./search.route");
const clientRouters = (app) => {
    app.use('/topics', topics_route_1.topicRoutes);
    app.use('/songs', songs_route_1.songsRoutes);
    app.use('/farovite-songs', farovite_song_route_1.faroviteSongRoutes);
    app.use('/search', search_route_1.searchRoutes);
};
exports.default = clientRouters;
