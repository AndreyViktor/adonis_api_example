'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Person extends Model {
    user(){
        return this.belongsTo('App/Models/User')
    }

    purchase(){
        return this.hasMany('App/Models/Purchase')
    }
}

module.exports = Person
