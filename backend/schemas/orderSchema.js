import mongoose from "mongoose";
import { Schema } from "mongoose";

const orderSchema = new Schema({
    orderId: {type: String},
    transactionStatus: {type: String},
    fullName: {type: String},
    phoneNumber: {type: String, match: /^\d{10}$/},
    email: { type: String, required: true, match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
    address: {type: String},
    city: {type: String},
    state: {type: String},
    zipCode: {type: String},
    cardNumber: {type: String, match:  /^\d{16}$/},
    expiryDate: {type: String},
    cvv: {type: String, match: /^\d{3}$/},
    product: {
        id: {type: mongoose.Schema.Types.ObjectId, ref: 'Product'},
        title: {type: String},
        selectedVariant: {type: String},
        quantity: {type: Number},
        subTotal: {type: Number},
        total: {type: Number}
    }
})

export const Order = mongoose.model('Order',orderSchema);

