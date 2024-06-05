import Sequelize from 'sequelize'
import { sequelize } from '../config/sql'
import bcrypt from 'bcryptjs'

const User = sequelize.define(
  'users',
  {
    username: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [6, 20]
      }
    },
    provider: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'local'
    },
    confirmed: {
      type: Sequelize.BOOLEAN,
      defaultValue: true
    },
    blocked: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }
  },
  {
    timestamps: true,
    defaultScope: {
      attributes: { exclude: ['password'] }
    },
    scopes: {
      withPassword: {
        attributes: { include: ['password'] }
      }
    }
  }
)

User.beforeCreate(async (user, options) => {
  const hashedPassword = await bcrypt.hash(user.password, 12)
  user.password = hashedPassword
})

export default User
