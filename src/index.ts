 import * as dotenv from 'dotenv';
 dotenv.config();
 import express,{Request,Response} from 'express';
 import routes from './routes/index';
 import mongoose from 'mongoose';
 import cors from 'cors';
 import smController from './controller/smController';

 const app = express();
 const port = 3000;

 main().catch((err) => console.log(err));

 async function main(){
  await smController();
//   canadaHelpApiDataSync();   
 }