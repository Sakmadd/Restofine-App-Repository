import FavoriteRestaurantIndexedDB from '../../data/favRestaurantIndexedDB-source'
import FavoritedRestaurantInitiator from '../../utils/favorited-restaurant-show-initiator'

const Favorited = {
  async render () {
    return `
    <section class="content">
      <h2 tabindex="0">Favorited Restaurant</h2>
      <div class="posts"></div>
    </section> 
    `
  },
  async afterRender () {
    const restaurants = await FavoriteRestaurantIndexedDB.getAllRestaurants()
    const restaurantContainer = document.querySelector('.posts')

    FavoritedRestaurantInitiator.init({
      restaurantContainer,
      restaurants
    })
  }
}
export default Favorited
