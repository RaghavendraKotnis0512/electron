import { Router } from 'express';
import { addCartController, deleteCartController, getCartByIdController, getCartsController, postCartController, updatedCartController } from '../controllers/cartController.js';
import authenticate from '../middleware/auth.js';

const router = Router();

router.post('/',authenticate, postCartController)
router.get('/',authenticate, getCartsController);
router.get('/:id',authenticate, getCartByIdController);
router.put('/:id',authenticate, updatedCartController);
router.delete('/:id',authenticate, deleteCartController);

export default router;
