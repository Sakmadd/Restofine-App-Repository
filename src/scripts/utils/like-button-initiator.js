import FavoriteRestaurantIndexedDB from '../data/favRestaurantIndexedDB-source'
import createlikeRestaurantButton from '../views/components/detail/like-restaurant-button'
import createUnlikedRestaurantButton from '../views/components/detail/unlike-restaurant-button'

const LikeButtonInitiator = {
  async init ({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer
    this._restaurant = restaurant

    await this._renderButton()
  },

  async  _renderButton () {
    const { id } = this._restaurant

    if (await this._isRestaurantExist(id)) {
      this._renderLiked()
    } else {
      this._renderLike()
    }
  },

  async _isRestaurantExist (id) {
    const restaurant = await FavoriteRestaurantIndexedDB.getRestaurant(id)
    return !!restaurant
  },

  _renderLike () {
    this._likeButtonContainer.innerHTML = createlikeRestaurantButton()

    const likeButton = document.querySelector('#likeButton')
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIndexedDB.putRestaurant(this._restaurant)
      this._renderButton()
    })
  },

  _renderLiked () {
    this._likeButtonContainer.innerHTML = createUnlikedRestaurantButton()

    const likeButton = document.querySelector('#likeButton')
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIndexedDB.deleteRestaurant(this._restaurant.id)
      this._renderButton()
    })
  }
}

export default LikeButtonInitiator
