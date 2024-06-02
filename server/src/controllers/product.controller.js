import { Op } from 'sequelize'
import Product from '~/models/product'
import { catchAsync } from '~/utils/catchAsync'

export const getAllProducts = catchAsync(async (req, res, next) => {
  // filter
  const queryObj = { ...req.query }
  const excludedFields = ['page', 'order']
  excludedFields.forEach((el) => delete queryObj[el])

  const conditions = {}

  if (queryObj.search && queryObj.search !== 'all') {
    conditions.title = { [Op.like]: `%${queryObj.search}%` }
  }

  if (queryObj.category && queryObj.category !== 'all') {
    conditions.category = queryObj.category
  }

  if (queryObj.company && queryObj.company !== 'all') {
    conditions.company = queryObj.company
  }

  if (queryObj.price) {
    conditions.price = { [Op.lte]: queryObj.price }
  }

  if (queryObj.shipping) {
    conditions.shipping = queryObj.shipping === 'true'
  }

  if (queryObj.featured) {
    conditions.featured = queryObj.featured === 'true'
  }

  // pagination
  const page = req.query.page * 1 || 1
  const limit = 10
  const skip = (page - 1) * limit

  // order

  // query
  const products = await Product.findAndCountAll({
    where: conditions,
    offset: skip,
    limit
  })

  // set data
  const data = products.rows
  const total = products.count
  const pageCount = Math.ceil(total / limit)

  res.status(200).json({
    status: 'success',
    data,
    meta: {
      pagination: {
        page,
        pageSize: limit,
        pageCount,
        total
      },
      categories: ['all', 'Tables', 'Chairs', 'Kids', 'Sofas', 'Beds'],
      companies: ['all', 'Modenza', 'Luxora', 'Artifex', 'Comfora', 'Homestead']
    }
  })
})