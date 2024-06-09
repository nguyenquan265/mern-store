import { Router } from 'express'
import { createOrder, getOrders } from '~/controllers/order.controller'
import { protect } from '~/middlewares/auth.middleware'

const router = Router()

router.use(protect)
router.route('/').get(getOrders).post(createOrder)

export default router
