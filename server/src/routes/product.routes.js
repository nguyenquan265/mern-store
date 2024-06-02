import { Router } from 'express'
import { getAllProducts, getProductByID } from '~/controllers/product.controller'
const router = Router()

router.route('/').get(getAllProducts)
router.route('/:id').get(getProductByID)

export default router
