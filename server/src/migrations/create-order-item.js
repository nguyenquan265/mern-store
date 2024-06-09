'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Order_items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      orderID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        // references: {
        //   model: 'orders',
        //   key: 'id'
        // },
        // onUpdate: 'CASCADE',
        // onDelete: 'CASCADE'
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
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Order_items')
  }
}
