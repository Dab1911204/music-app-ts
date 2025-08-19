import {Router} from 'express';
import multer from 'multer';
import * as controller from '../../controllers/admin/song.controller'
import * as uploadCloud from '../../middlewares/admin/uploadCloud.middleware';
const routes = Router();

const upload = multer();

routes.get('/',controller.index)
routes.get('/create',controller.create)
routes.post('/create',upload.fields([
    {name: 'avatar', maxCount: 1},
    {name: 'audio', maxCount: 1}
]),uploadCloud.uploadFiles,controller.createPost)
routes.get('/edit/:id',controller.edit)
routes.patch('/edit/:id',upload.fields([
    {name: 'avatar', maxCount: 1},
    {name: 'audio', maxCount: 1}
]),uploadCloud.uploadFiles,controller.editPatch)

export const songRoutes:Router = routes;