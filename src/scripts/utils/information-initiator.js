const InformationInitiator = {
  init ({ informationContainer, restaurant }) {
    this._render(informationContainer, restaurant)
  },
  async _render (informationContainer, restaurant) {
    const restaurantDetailElement = document.createElement('restaurant-detail')
    restaurantDetailElement.restaurant = restaurant
    informationContainer.appendChild(restaurantDetailElement)
  }
}
export default InformationInitiator
