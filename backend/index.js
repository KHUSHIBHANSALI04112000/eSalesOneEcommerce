import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import { router  } from './routes/index.js'

import './config/mongodb.js';
const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use('/',router)


app.listen(port,function(){
    console.log(`server is listening on port number ${port}`)
})