'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StockUnitsSchema extends Schema {
  up () {
    this.create('stock_units', (table) => {
      table.increments()

      table
        .integer('product_id')
        .unsigned()
        .references('id')
        .inTable('products')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

      table
        .integer('place_id')
        .unsigned()
        .references('id')
        .inTable('places')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        .notNullable()

      table.string('private_name')
      table.string('private_description')
      table.string('private_pic_path')
      table.string('private_unit')
      table.integer('price')
      table.boolean('available')
      table.boolean('selloff')

      table.timestamps()
    })
  }

  down () {
    this.drop('stock_units')
  }
}

module.exports = StockUnitsSchema
