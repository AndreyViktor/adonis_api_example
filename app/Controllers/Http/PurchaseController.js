'use strict'

const Purchase = use('App/Models/Purchase')
const StockUnit = use('App/Models/StockUnit')


/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with purchases
 */
class PurchaseController {
  /**
   * Show a list of all purchases.
   * GET purchases
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }



  /**
   * Create/save a new purchase.
   * POST purchases
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response, params }) {
    const purchase = request.body.purchase
    
    
    const items_id = purchase.items.map(({stock_id})=>stock_id)
    
    const ItemsPrice = await StockUnit.query().whereIn('id', items_id ).fetch()
    
    console.log(ItemsPrice)
    
    const place_id = params.id
    purchase.place_id = place_id

    return purchase
  }

  /**
   * Display a single purchase.
   * GET purchases/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Update purchase details.
   * PUT or PATCH purchases/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a purchase with id.
   * DELETE purchases/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = PurchaseController
