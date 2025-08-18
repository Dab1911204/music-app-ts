import {Express} from 'express';
import {topicRoutes} from "./topics.route";
import {songsRoutes} from "./songs.route";
import {faroviteSongRoutes} from "./farovite-song.route";
import {searchRoutes} from "./search.route";


const clientRouters = (app:Express):void => {
    app.use('/topics',topicRoutes);
    app.use('/songs',songsRoutes);
    app.use('/farovite-songs',faroviteSongRoutes);
    app.use('/search',searchRoutes);
}

export default clientRouters;