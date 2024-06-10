import Sequelize from 'sequelize'
import { sequelize } from '../config/sql'
import OrderItem from './orderItem'

const Order = sequelize.define(
  'orders',
  {
    userID: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    orderTotal: {
      type: Sequelize.STRING,
      allowNull: false
    },
    numItemsInCart: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW
    },
    publishedAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW
    }
  },
  {
    timestamps: false
  }
)

// associations
Order.hasMany(OrderItem, { foreignKey: 'orderID' })
OrderItem.belongsTo(Order, { as: 'Order', foreignKey: 'orderID' })

export default Order
