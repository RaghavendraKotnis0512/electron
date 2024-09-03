
import { addCart, deleteCart, getCartById, getCarts, postCart, updateCart } from "../services/cartServices.js";

var addCartController=async(req,res)=>{
    const add=await addCart({userId:'1',productId:'1',quantity:'2'});
    res.status(200).json(add.toJSON());
}

const getCartsController=async(req,res)=>{
    const data=await getCarts();
    res.status(200).json({data});
}
const getCartByIdController=async(req,res)=>{
    const data=await getCartById(req.params.userId);
    res.status(200).json({data});
}
const postCartController=async(req,res)=>{
    const data=await postCart(req.body);
    res.status(200).json({data});
}
const deleteCartController=async(req,res)=>{
    try{
        const data=await deleteCart(req.params.id);
        res.status(200).json({data});
    }catch(error){
        res.status(500).json(error);
    }
}
const updatedCartController=async(req,res)=>{
    const data=await updateCart(req.params.id,req.body);
    res.status(200).json({data});
}

export {getCartByIdController,getCartsController,postCartController,updatedCartController,deleteCartController,addCartController}