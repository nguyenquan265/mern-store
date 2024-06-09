import Sequelize from 'sequelize'
import { sequelize } from '../config/sql'

const OrderItem = sequelize.define(
  'order_items',
  {
    orderID: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    image: {
      type: Sequelize.STRING,
      allowNull: true
    },
    price: {
      type: Sequelize.STRING,
      allowNull: false
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    amount: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    company: {
      type: Sequelize.STRING,
      allowNull: false
    },
    productID: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    productColor: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {
    timestamps: false
  }
)

export default OrderItem
