import Sequelize from 'sequelize'
import { sequelize } from '../config/sql'

const Product = sequelize.define(
  'products',
  {
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    company: {
      type: Sequelize.STRING,
      allowNull: true
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    featured: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    publishedAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    category: {
      type: Sequelize.STRING,
      allowNull: true
    },
    image: {
      type: Sequelize.STRING,
      allowNull: true
    },
    price: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false
    },
    shipping: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    colors: {
      type: Sequelize.JSON,
      allowNull: true
    }
  },
  {
    timestamps: false
  }
)

export default Product
