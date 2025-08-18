import {Router} from 'express';
import * as controller from '../../controllers/client/search.controller'
const routes = Router();

routes.get('/:type',controller.result)

export const searchRoutes:Router = routes;