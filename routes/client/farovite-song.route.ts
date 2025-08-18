import {Router} from 'express';
import * as controller from '../../controllers/client/farovite-song.controller'
const routes = Router();

routes.get('/',controller.index)

export const faroviteSongRoutes:Router = routes;