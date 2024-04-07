import FavoriteRestaurantIndexedDB from '../src/scripts/data/favRestaurantIndexedDB-source'
import * as TestFactories from './helpers/testFactories'

describe('Liking a Restaurant', () => {
  const createLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>'
  }
  beforeEach(() => {
    createLikeButtonContainer()
  })
  it('should show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 })
    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeTruthy()
  })
  it('should not show unlike restaurant when the restaurant has not been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 })
    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy()
  })
  it('should be able to like the restaurant', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 })
    document.querySelector('#likeButton').dispatchEvent(new Event('click'))
    const restaurant = await FavoriteRestaurantIndexedDB.getRestaurant(1)
    expect(restaurant).toEqual({ id: 1 })
    await FavoriteRestaurantIndexedDB.deleteRestaurant(1)
  })
  it('should not add restaurant to favorite when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 })
    await FavoriteRestaurantIndexedDB.putRestaurant({ id: 1 })
    document.querySelector('#likeButton').dispatchEvent(new Event('click'))
    expect(await FavoriteRestaurantIndexedDB.getAllRestaurants()).toEqual([{ id: 1 }])
    await FavoriteRestaurantIndexedDB.deleteRestaurant(1)
  })
  it('should not add restaurant when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: '' })
    document.querySelector('#likeButton').dispatchEvent(new Event('click'))
    expect(await FavoriteRestaurantIndexedDB.getAllRestaurants()).toEqual([{ id: '' }])
  })
})
