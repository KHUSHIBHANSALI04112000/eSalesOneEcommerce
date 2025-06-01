import express from 'express'


import {productRouter} from './product.js'
import {orderRouter} from './order.js'

export const router= express.Router()

router.use('/products', productRouter)
router.use('/orders', orderRouter)