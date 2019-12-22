'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/users', 'UserController.create')

Route.post('/auth', 'SessionController.create')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.resource('/places', 'PlaceController')
  .apiOnly()
  .middleware('auth')

Route.resource('/person', 'PersonController')
.apiOnly()
.middleware('auth')

Route.resource('/stock', 'StockUnitController')
.apiOnly()
.middleware('auth')

Route.resource('/product', 'ProductController')
.apiOnly()
.middleware('auth')

Route.resource('/productcategory', 'ProductCategoryController')
.apiOnly()
.middleware('auth')