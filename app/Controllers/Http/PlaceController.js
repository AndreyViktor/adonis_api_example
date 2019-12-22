'use strict'

const Place = use('App/Models/Place')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with places
 */
class PlaceController {
  /**
   * Show a list of all places.
   * GET places
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request }) {
    const {latitude, longitude, distance} = request.all()

    const places = Place.query()
                    .PlacesNearBy(latitude, longitude, distance)
                    .fetch()

    return places
  }


  /**
   * Create/save a new place.
   * POST places
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, auth}) {
    const data = request.only(['name', 'address', 'city',
     'thumbnail_path', 'logo_path', 'latitude', 'longitude'])
  
    const place = await Place.create({owner_id: auth.user.id , ...data})

    return place
  }

  /**
   * Display a single place.
   * GET places/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const place = await Place.findOrFail(params.id)

    return place
  }


  /**
   * Update place details.
   * PUT or PATCH places/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const place = await Place.findOrFail(params.id)

    const data = request.only([
      'name',
      'address',
      'city',
      'thumbnail_path',
      'logo_path',
      'latitude',
      'longitude'])
  
    place.merge(data)
  
    await place.save()
  
    return place
  }

  /**
   * Delete a place with id.
   * DELETE places/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const place = await Place.findOrFail(params.id)

    if (place.owner_id !== auth.user.id) {
      return response.status(401).send({ error: 'Not authorized' })
    }
  
    await place.delete()
  }
}

module.exports = PlaceController
