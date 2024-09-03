
import { deleteProduct, getProductById, getProducts, postProduct, updateProduct } from "../services/productServices.js";

const getProductsController=async(req,res)=>{
    const data=await getProducts();
    res.status(200).json({data});
}
const getProductByIdController=async(req,res)=>{
    const data=await getProductById(req.params.id);
    res.status(200).json({data});
}
const postProductController=async(req,res)=>{
    const data=await postProduct(req.body);
    res.status(200).json({data});
}
const deleteProductController=async(req,res)=>{
    try{
        const data=await deleteProduct(req.params.id);
        res.status(200).json({data});
    }catch(error){
        res.status(500).json(error);
    }
}
const updatedProductController=async(req,res)=>{
    const data=await updateProduct(req.params.id,req.body);
    res.status(200).json({data});
}
export {getProductsController,getProductByIdController,postProductController,updatedProductController,deleteProductController};