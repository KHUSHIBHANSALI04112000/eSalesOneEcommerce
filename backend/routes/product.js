import express from 'express'
import { product } from '../controllers/ProductsController.js';
export const productRouter = express.Router();

productRouter.get('/getProduct', product)