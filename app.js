import express from 'express';
import {join} from 'path';
import web from './routes/web.js';
const app = express();
const port = process.env.PORT || '3000';

//setup ejs template directory
app.set('views','./views');
app.set('view engine','ejs');

//load static file
app.use(express.static('public'))

//load route

app.use('/',web)



app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})