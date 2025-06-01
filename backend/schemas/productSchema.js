import mongoose from "mongoose";
import { Schema } from "mongoose";

const productSchema = new Schema({
    title: {type: String},
    description: {type: String},
    price: {type: Number},
    image: {type: String},
    variants: [{type: String}],
    inventory: {type: Number}
})
export const Product = mongoose.model('Product',productSchema);

