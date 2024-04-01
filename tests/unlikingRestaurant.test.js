import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator'
import FavoriteRestaurantIndexedDB from '../src/scripts/data/favRestaurantIndexedDB-source'

describe('Unliking a Restaurant', () => {
  const createLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>'
  }
  beforeEach(async () => {
    createLikeButtonContainer()
    await FavoriteRestaurantIndexedDB.putRestaurant({ id: 1 })
  })
  afterEach(async () => {
    await FavoriteRestaurantIndexedDB.deleteRestaurant(1)
  })
  it('should show the unlike button when the restaurant has been liked before', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1
      }
    })
    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeTruthy()
  })
  it('should not show like button when the restaurant has been liked', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1
      }
    })
    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeFalsy()
  })
  it('should be able to remove liked restaurant from the favorited list', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1
      }
    })
    document.querySelector('#likeButton').dispatchEvent(new Event('click'))
    expect(await FavoriteRestaurantIndexedDB.getAllRestaurants()).toEqual([])
  })
  it('should not throw error when the user clicked unlike widget and restaurant isnt on favorited list', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1
      }
    })
    await FavoriteRestaurantIndexedDB.deleteRestaurant(1)
    document.querySelector('#likeButton').dispatchEvent(new Event('click'))
    expect(await FavoriteRestaurantIndexedDB.getAllRestaurants()).toEqual([])
  })
})
