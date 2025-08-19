import {Router} from 'express';
import * as controller from '../../controllers/admin/topic.controller'
const routes = Router();

routes.get('/',controller.index)

export const topicRoutes:Router = routes;