// models/cart.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js';

const Cart = sequelize.define('Cart', {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    }
});

export default Cart;
