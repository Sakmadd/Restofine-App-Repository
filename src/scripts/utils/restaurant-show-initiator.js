const RestaurantShowInitiator = {
  init ({ restaurants, restaurantsContainer }) {
    this._render(restaurants, restaurantsContainer)
  },
  _render (restaurants, container) {
    const restaurantContainer = document.createElement('restaurant-container')
    restaurantContainer.restaurants = restaurants
    container.appendChild(restaurantContainer)
  }
}
export default RestaurantShowInitiator
