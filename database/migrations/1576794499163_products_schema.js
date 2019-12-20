'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductsSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments()

      table
        .integer('category_id')
        .unsigned()
        .references('id')
        .inTable('product_categories')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

      table.string('name').notNullable()
      table.string('description')
      table.string('unit')
      table.string('product_pic_path')

      table.timestamps()
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductsSchema
