'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {
    category(){
        return this.hasOne('App/Models/ProductCategory')
    }
}

module.exports = Product
