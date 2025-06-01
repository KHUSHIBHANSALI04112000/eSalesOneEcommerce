import {v4 as uuidv4} from 'uuid'
import mongoose from 'mongoose';
import { Order } from '../schemas/orderSchema.js';
import { Product } from '../schemas/productSchema.js';
import {sendConfirmationEmailOfOrder} from '../utils/emailService.js'

export const createOrder = async(req,res) => {
    try{
        const orderId= uuidv4();
        const random = Math.random();
        console.log(random)

        let transactionStatus;

        if(random<0.33){
            transactionStatus='approved';
        }else if(random<0.66){
            transactionStatus='declined'
        }else{
            transactionStatus='gateway_error'
        }

        const orderData= {...req.body, transactionStatus, orderId}
        const order = new Order(orderData);
        await order.save();

        if(transactionStatus==='approved'){
            await Product.updateOne(
                {_id: orderData.product.id},
                {$inc: {inventory: -orderData.product.quantity}}
            )
        }

        await sendConfirmationEmailOfOrder(orderData);

        if(transactionStatus ==='approved'){
            res.status(200).json({message: 'Order Processed Successfully', orderId})
        }else{
            res.status(400).json({message: `Transaction ${orderData.transactionStatus}`, orderId, error: orderData.transactionStatus})
        }
    }catch(error){
        res.status(500).json({message: 'Internal Server Error'})
    }
}

export const getOrderById = async(req,res) => {
    try{
        const orderId= req.params.orderId;

        const order = await Order.findOne({orderId: orderId})
        if(!order){
            res.status(400).json({message: 'Order not found'})
        }

        res.json(order)
    }catch(error){
        res.status(500).json({message: 'Internal Server Error'})
    }

}