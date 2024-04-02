import FavoriteRestaurantIndexedDB from '../src/scripts/data/favRestaurantIndexedDB-source'
import { itActsAsFavRestaurantIndexedDBModel } from './contracts/favRestaurantIndexedDBContracts'

describe('Favorite Restaurant Indexed DataBase contract test implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurantIndexedDB.getAllRestaurants()).forEach(async (restaurant) => {
      await FavoriteRestaurantIndexedDB.deleteRestaurant(restaurant.id)
    })
  })
  itActsAsFavRestaurantIndexedDBModel(FavoriteRestaurantIndexedDB)
})
