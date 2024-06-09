import Order from '~/models/order'
import OrderItem from '~/models/orderItem'
import { ApiError } from '~/utils/ApiError'
import { catchAsync } from '~/utils/catchAsync'

export const createOrder = catchAsync(async (req, res, next) => {
  const { name, address, orderTotal, numItemsInCart, cartItems } = req.body

  if (!name || !address || !orderTotal || !numItemsInCart || !cartItems) {
    throw new ApiError(400, 'Please provide all required fields')
  }

  const order = await Order.create({
    userID: req.user.id,
    name,
    address,
    orderTotal,
    numItemsInCart
  })
  await Promise.all(
    cartItems.map(async (item) => {
      item.orderID = order.id

      await OrderItem.create(item)
    })
  )

  res.status(200).json({ status: 'success', order })
})

export const getOrders = catchAsync(async (req, res, next) => {})
