import { DataTypes } from 'sequelize';
// import bcrypt from 'bcrypt';
import sequelize from '../config/sequelize.js';

const User = sequelize.define('user', {
    
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true, 
        },
    },
    
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'customer',
    },
   
});

export default User;
