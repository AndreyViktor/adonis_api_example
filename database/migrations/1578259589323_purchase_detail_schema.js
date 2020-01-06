'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PurchaseDetailSchema extends Schema {
  up () {
    this.create('purchase_details', (table) => {
      table.increments()

      table
      .integer('purchase_id')
      .unsigned()
      .references('id')
      .inTable('purchases')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      .notNullable()

      table
      .integer('stock_id')
      .unsigned()
      .references('id')
      .inTable('stock_units')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      .notNullable()

      table.integer('price')
      table.integer('count')

      table.timestamps()
    })
  }

  down () {
    this.drop('purchase_details')
  }
}

module.exports = PurchaseDetailSchema
