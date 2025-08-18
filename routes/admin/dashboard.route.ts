import {Router} from 'express';
import * as controller from '../../controllers/admin/dashboard.controller'
const routes = Router();

routes.get('/',controller.index)

export const dashboardRoutes:Router = routes;