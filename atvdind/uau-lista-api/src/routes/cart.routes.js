import { Router } from 'express'
import {
  addItem,
  clearCart,
  getCart,
  removeItem,
  updateItem
} from '../controllers/cart.controller.js'

const router = Router()

router.get('/:userId', getCart)
router.post('/:userId/items', addItem)
router.patch('/:userId/items/:productId', updateItem)
router.delete('/:userId/items/:productId', removeItem)
router.delete('/:userId/items', clearCart)

export default router
