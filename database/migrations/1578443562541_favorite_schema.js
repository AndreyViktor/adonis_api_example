'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FavoriteSchema extends Schema {
  up () {
    this.create('favorites', (table) => {
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
      table.timestamps()
    })
  }

  down () {
    this.drop('favorites')
  }
}

module.exports = FavoriteSchema
