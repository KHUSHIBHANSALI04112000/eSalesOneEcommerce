import express from 'express'
import {createOrder, getOrderById} from '../controllers/OrdersController.js'
export const orderRouter = express.Router();

orderRouter.post('/', createOrder)
orderRouter.get("/:orderId", getOrderById);

