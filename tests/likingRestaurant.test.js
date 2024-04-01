import FavoriteRestaurantIndexedDB from '../src/scripts/data/favRestaurantIndexedDB-source'
import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator'

describe('Liking a Restaurant', () => {
  const createLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>'
  }
  beforeEach(() => {
    createLikeButtonContainer()
  })
  it('should show the like button when the movie has not been liked before', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1
      }
    })
    expect(document.querySelector('[aria-label="like this movie"]')).toBeTruthy()
  })
  it('should not show unlike movie when the movie has not been liked', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1
      }
    })
    expect(document.querySelector('[aria-label="unlike this movie"]')).toBeFalsy()
  })
  it('should be able to like the restaurant', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1
      }
    })
    document.querySelector('#likeButton').dispatchEvent(new Event('click'))
    const movie = await FavoriteRestaurantIndexedDB.getRestaurant(1)
    expect(movie).toEqual({ id: 1 })
    await FavoriteRestaurantIndexedDB.deleteRestaurant(1)
  })
  it('should not add restaurant to favorite when its already liked', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1
      }
    })
    await FavoriteRestaurantIndexedDB.putRestaurant({ id: 1 })
    document.querySelector('#likeButton').dispatchEvent(new Event('click'))
    expect(await FavoriteRestaurantIndexedDB.getAllRestaurants()).toEqual([{ id: 1 }])
    await FavoriteRestaurantIndexedDB.deleteRestaurant(1)
  })
  xit('should not add restaurant when it has no id', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: {}
      }
    })
    expect(await FavoriteRestaurantIndexedDB.getAllRestaurants()).toEqual([])
  })
})
