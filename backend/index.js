import express from 'express';
import sequelize from './config/sequelize.js';
import User from './models/user.js';
import Order from './models/order.js';
import Product from "./models/index.js";
import Cart from "./models/index.js"
import productRoutes from "./routes/productRoutes.js"
import cartRoutes from "./routes/cartRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import dotenv from 'dotenv';
dotenv.config();
const port = 8080;
const app=express();
app.use(express.json());

app.use('/users',userRoutes);
app.use('/products', productRoutes); // Use product routes
app.use('/cart', cartRoutes); // Use cart routes

app.get('/', (req, res) => {
  res.send('Hello World!');
});
sequelize.sync({force:false});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
