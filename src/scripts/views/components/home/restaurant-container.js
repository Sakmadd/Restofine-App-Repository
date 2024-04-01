class RestaurantContainer extends HTMLElement {
  set restaurants (restaurants) {
    this._restaurants = restaurants
    this._renderItem()
  }

  _renderItem () {
    this._restaurants.forEach((restaurant) => {
      const restaurantItem = document.createElement('restaurant-item')
      restaurantItem.restaurant = restaurant

      this.appendChild(restaurantItem)
      this.classList.add('posts')
    })
  }
}
customElements.define('restaurant-container', RestaurantContainer)
