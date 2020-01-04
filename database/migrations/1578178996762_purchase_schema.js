'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PurchaseSchema extends Schema {
  up () {
    this.create('purchases', (table) => {
      table.increments()
      
      table
      .integer('place_id')
      .unsigned()
      .references('id')
      .inTable('places')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      .notNullable()

      table
      .integer('person_id')
      .unsigned()
      .references('id')
      .inTable('people')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      .notNullable()

      table.integer('payed_at')
      table.integer('accepeted_at')
      table.integer('prepared_at')
      table.integer('taken_at')

      table.timestamps()
    })
  }

  down () {
    this.drop('purchases')
  }
}

module.exports = PurchaseSchema
