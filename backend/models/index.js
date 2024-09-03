// models/associations.js
import Cart from './cart.js';
import Product from './product.js';

// Define associations
Product.hasMany(Cart, { foreignKey: 'userId' });
Cart.belongsTo(Product, { foreignKey: 'userId' });
export default { Product, Cart };
