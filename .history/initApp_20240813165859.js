import express from 'express';
import connectDB from '../DB/connection.js';
import authRouter from './modules/user/user.router.js';
import productRouter from './modules/product/product.router.js';

//const app = express(); 

const initApp = (app,express) => {
  connectDB();
  app.use(express.json());
  app.use('/users', authRouter);
  app.use('/products', productRouter);
 // return app; 
};

export default initApp;