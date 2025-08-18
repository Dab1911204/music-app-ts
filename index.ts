import express,{Express} from 'express'
import dotenv from 'dotenv';
import * as database from "./config/database"
import clientRouters from './routes/client/index.route';
import adminRouters from './routes/admin/index.route';
import { systemConfig } from './config/config';
import path from 'path';


dotenv.config();
database.connect()

const app:Express = express()
const port:Number|String = process.env.PORT || 3000

app.use(express.static('public'))

app.set('view engine', 'pug')
app.set('views', './views')

//TinyMCE
app.use('/tinymce', express.static(path.join(__dirname, 'node_modules', 'tinymce')));

app.locals.prefixAdmin = systemConfig.prefixAdmin;


clientRouters(app);
adminRouters(app);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})