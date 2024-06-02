'use strict'
const fs = require('fs')
const path = require('path')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const dataPath = path.resolve(__dirname, '../../data/products.json')
    const rawData = fs.readFileSync(dataPath)
    const products = JSON.parse(rawData).data

    const productData = products.map((product) => ({
      id: product.id,
      title: product.title,
      company: product.company,
      description: product.description,
      featured: product.featured,
      createdAt: new Date(product.createdAt),
      updatedAt: new Date(product.updatedAt),
      publishedAt: new Date(product.publishedAt),
      category: product.category,
      image: product.image,
      price: parseFloat(product.price),
      shipping: product.shipping,
      colors: JSON.stringify(product.colors)
    }))

    await queryInterface.bulkInsert('Products', productData, {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {})
  }
}
