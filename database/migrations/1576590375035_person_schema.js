'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PersonSchema extends Schema {
  up () {
    this.create('people', (table) => {
      table.increments()
      table
          .integer('user_id')
          .unsigned()
          .references('id')
          .inTable('users')
          .onUpdate('CASCADE')
          .onDelete('CASCADE')
          .unique()
          
      table.string('name').notNullable()
      table.string('last_name')
      table.string('document')
      table.string('address')
      table.string('city')
      table.string('profile_pic_path')
      table.decimal('latitude', 9, 6)
      table.decimal('longitude', 9, 6)
      
      table.timestamps()
    })
  }

  down () {
    this.drop('people')
  }
}

module.exports = PersonSchema
