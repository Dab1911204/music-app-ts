import {Router} from 'express';
import * as controller from '../../controllers/client/topics.controller'
const routes = Router();

routes.get('/',controller.index)

export const topicRoutes:Router = routes;