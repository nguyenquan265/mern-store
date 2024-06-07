import { Router } from 'express'
import {
  getMe,
  login,
  logout,
  refreshToken,
  register
} from '~/controllers/auth.controller'
import { protect } from '~/middlewares/auth.middleware'
const router = Router()

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/logout').post(logout)
router.route('/me').get(protect, getMe)
router.route('/refresh-token').post(refreshToken)

export default router
