'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TransactionSchema extends Schema {
  up () {
    this.create('transactions', (table) => {
      table.increments()
      
      table
      .integer('purchase_id')
      .unsigned()
      .references('id')
      .inTable('purchases')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      .notNullable()

      table.boolean('approved')
      table.string('card_number')
      table.string('emitter')
      table.string('transaction_value')
      table.string('acquirer')
      table.timestamps()
    })
  }

  down () {
    this.drop('transactions')
  }
}

module.exports = TransactionSchema
