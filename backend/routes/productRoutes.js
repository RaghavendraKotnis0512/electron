import { Router } from 'express';
import { deleteProductController, getProductByIdController, getProductsController, postProductController, updatedProductController } from '../controllers/productController.js';

const router = Router();

router.post('/', postProductController);
router.get('/', getProductsController);
router.get('/:id', getProductByIdController);
router.put('/:id', updatedProductController);
router.delete('/:id', deleteProductController);

export default router;
