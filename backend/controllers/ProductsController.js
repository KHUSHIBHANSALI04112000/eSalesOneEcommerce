import { Product } from "../schemas/productSchema.js";
export const product = async(req,res) => {
    try{
        const products = await Product.find({});
        res.status(200).json(products);

    }catch(err){
        res.status(500).json({error: err.message});
    }
}


