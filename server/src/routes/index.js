import { Router } from 'express'
const router = Router()

import productRouter from './product.routes'
import { ApiError } from '~/utils/ApiError'

router.use('/products', productRouter)
router.all('*', (req, res, next) =>
  next(new ApiError(404, `Can't find ${req.originalUrl} on this server!`))
)

export default router
