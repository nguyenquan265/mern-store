'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userID: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      address: {
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
      },
      publishedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
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
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders')
  }
}
