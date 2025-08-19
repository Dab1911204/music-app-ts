import {Router} from 'express';
import multer from 'multer';
import * as controller from '../../controllers/admin/upload.controller'
import * as uploadCloud from '../../middlewares/admin/uploadCloud.middleware';
const upload = multer();
const routes = Router();

routes.post('/',upload.single("file"),uploadCloud.uploadSinger,controller.index)

export const uploadRoutes:Router = routes;