// models/product.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js';

const Product = sequelize.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

export default Product;
