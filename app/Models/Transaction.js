'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Transaction extends Model {
    purchase(){
        this.belongsTo('app/Models/Purchase')
    }
}

module.exports = Transaction
