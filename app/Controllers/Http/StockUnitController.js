'use strict'

const Place = use('App/Models/Place')
const StockUnit = use('App/Models/StockUnit')


/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with stockunits
 */
class StockUnitController {
  /**
   * Show a list of all stockunits.
   * GET stockunits
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }


  /**
   * Create/save a new stockunit.
   * POST stockunits
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response, auth }) {
    const data = request.only(['product_id',
    'place_id',
    'private_name',
    'private_description',
    'private_pic_path',
    'private_unit',
    'price',
    'available',
    'selloff'])

    const {owner_id} = await Place.findOrFail(data.place_id)

    if (owner_id !== auth.user.id) {
      return response.status(401).send({ error: 'Not authorized' })
    }
    
    const stockunit = await StockUnit.create({...data})

    return stockunit
  }

  /**
   * Display a single stockunit.
   * GET stockunits/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  

  /**
   * Update stockunit details.
   * PUT or PATCH stockunits/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a stockunit with id.
   * DELETE stockunits/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = StockUnitController
