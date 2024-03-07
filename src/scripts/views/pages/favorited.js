import FavoriteRestaurantIdb from '../../data/favouritedb-source'

const Favorited = {
  async render () {
    return `
    <section class="content">
      <h2 tabindex="0">Favorited Restaurant</h2>
        <div class="posts">
        </div>
    </section> 
    `
  },
  async afterRender () {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants()
    const containerSpace = document.querySelector('.posts')
    const restaurantContainer = document.createElement('restaurant-container')
    restaurantContainer.restaurants = restaurants

    containerSpace.appendChild(restaurantContainer)
  }
}
export default Favorited
