'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlaceSchema extends Schema {
  up () {
    this.create('places', (table) => {
      table.increments()
      table
          .integer('owner_id')
          .unsigned()
          .references('id')
          .inTable('users')
          .onUpdate('CASCADE')
          .onDelete('CASCADE')
          .notNullable()

      table.string('name').notNullable()
      table.string('address')
      table.string('city')
      table.string('thumbnail_path')
      table.string('logo_path')
      table.decimal('latitude', 9, 6)
      table.decimal('longitude', 9, 6)
          
      table.timestamps()
    })
  }

  down () {
    this.drop('places')
  }
}

module.exports = PlaceSchema
