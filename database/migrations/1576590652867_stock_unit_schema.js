'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StockUnitSchema extends Schema {
  up () {
    this.create('stock_units', (table) => {
      table.increments()

      table
        .integer('product_id')
        .unsigned()
        .references('id')
        .inTable('product')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

      table
        .integer('place_id')
        .unsigned()
        .references('id')
        .inTable('place')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

      table.string('private_name').notNullable()
      table.string('private_description').notNullable()
      table.string('private_pic_path').notNullable()
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

module.exports = StockUnitSchema
