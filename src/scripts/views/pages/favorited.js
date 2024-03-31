import FavoriteRestaurantIndexedDB from '../../data/favRestaurantIndexedDB-source'

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
    const restaurants = await FavoriteRestaurantIndexedDB.getAllRestaurants()
    const emptySignSpace = document.querySelector('.content')
    if (restaurants.length === 0) {
      emptySignSpace.innerHTML = '<h2>You haven\'t favorite any restaurants yet 😔 </h2>'
    } else {
      const containerSpace = document.querySelector('.posts')
      const restaurantContainer = document.createElement('restaurant-container')
      restaurantContainer.restaurants = restaurants

      containerSpace.appendChild(restaurantContainer)
    }
  }
}
export default Favorited
