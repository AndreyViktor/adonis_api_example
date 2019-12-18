'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class StockUnit extends Model {
    category(){
        this.hasOne('App/Models/ProductCategory')
    }
    place(){
        this.belongsTo('App/Models/Place')
    }
    product(){
        this.hasOne('App/Models/Product')
    }
}

module.exports = StockUnit
