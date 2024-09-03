import Product from "../models/product.js";

const getProducts=async(id)=>{
    return await Product.findAll();
}
const getProductById=async(id)=>{
    return await Product.findOne({
        where:{id}
    })
}
const postProduct=async(productData)=>{
    if(productData.length>1 && Array.isArray(productData)){
        return await Product.bulkCreate(productData);
    }else{
        return await Product.create(productData)
    }
}
const deleteProduct=async(id)=>{
    return await Product.destroy({
        where:{id}
    });
}
const updateProduct=async(id,updatedProduct)=>{
    return await Product.update(updatedProduct,{
        where:{id}
    })
}

export {getProductById,getProducts,postProduct,updateProduct,deleteProduct};