import Cart from "../models/cart.js";

var addCart=async(productData)=>{
    return await Cart.create(productData);
}

const getCarts=async(id)=>{
    return await Cart.findAll();
}
const getCartById=async(id)=>{
    return await Cart.findOne({
        where:{id}
    })
}
const postCart=async(productData)=>{
    if(productData.length>1 && Array.isArray(productData)){
        return await Cart.bulkCreate(productData);
    }else{
        return await Cart.create(productData)
    }
}
const deleteCart=async(id)=>{
    return await Cart.destroy({
        where:{id}
    });
}
const updateCart=async(id,updatedProduct)=>{
    return await Cart.update(updatedProduct,{
        where:{id}
    })
}

export {getCarts,getCartById,updateCart,deleteCart,postCart,addCart}