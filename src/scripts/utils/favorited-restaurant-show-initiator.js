const FavoritedRestaurantInitiator = {
  init ({ restaurants, restaurantContainer }) {
    this._render(restaurants, restaurantContainer)
  },
  _render (restaurants, restaurantContainer) {
    if (restaurants.length === 0) {
      const contentElement = document.querySelector('.content')
      contentElement.innerHTML = '<h2 class="emptySign">You haven\'t favorite any restaurants yet 😔</h2>'
    } else {
      const restaurantContainerElement = document.createElement('restaurant-container')
      restaurantContainerElement.restaurants = restaurants
      restaurantContainer.appendChild(restaurantContainerElement)
    }
  }
}
export default FavoritedRestaurantInitiator
