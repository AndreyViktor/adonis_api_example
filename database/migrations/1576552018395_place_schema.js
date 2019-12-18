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
      table.string('name').notNullable()
      table.string('address').notNullable()
      table.string('city').notNullable()
      table.string('thumbnail_path').notNullable()
      table.string('logo_path').notNullable()
      table.decimal('latitude', 9, 6).notNullable()
      table.decimal('longitude', 9, 6).notNullable()
          
      table.timestamps()
    })
  }

  down () {
    this.drop('places')
  }
}

module.exports = PlaceSchema
