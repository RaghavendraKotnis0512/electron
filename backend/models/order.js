import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js';

const Order = sequelize.define('Order', {
    orderNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    totalAmount: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'pending'
    },
    shippingAddress: {
        type: DataTypes.STRING,
        allowNull: false
    },
    paymentMethod: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

export default Order;
