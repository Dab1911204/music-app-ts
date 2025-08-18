import {Router} from 'express';
import * as controller from '../../controllers/client/songs.controller'
const routes = Router();

routes.get('/:slugTopic',controller.list)
routes.get('/detail/:slugSong',controller.detail)
routes.patch('/like/:typeLike/:idSong',controller.like)
routes.patch('/farovite/:typeFarovite/:idSong',controller.farovite)
routes.patch('/listen/:idSong',controller.listen)

export const songsRoutes:Router = routes;