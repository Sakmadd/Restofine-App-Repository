const RestaurantShowInitiator = {
  init ({ restaurants, restaurantsContainer }) {
    this._render(restaurants, restaurantsContainer)
  },
  _render (restaurants, container) {
    const restaurantContainer = document.createElement('restaurant-container')
    restaurantContainer.restaurants = restaurants
    container.innerHTML = '<h2 tabindex="0">Explore Restaurant</h2>'
    container.append(restaurantContainer)
  }
}
export default RestaurantShowInitiator
