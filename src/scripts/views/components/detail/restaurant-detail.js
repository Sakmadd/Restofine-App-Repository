import CONFIG from '../../../globals/config'

class RestaurantDetail extends HTMLElement {
  set restaurant (restaurant) {
    this._restaurant = restaurant
    this.render()
  }

  render () {
    const image = document.createElement('img')
    const information = document.createElement('div')
    const review = document.createElement('div')
    const informationText = document.createElement('information-text')
    const informationMenu = document.createElement('information-menus')

    image.setAttribute('src', `${CONFIG.BASE_IMAGE_URL}${this._restaurant.pictureId}`)
    image.setAttribute('alt', `Restaurant ${this._restaurant.name}`)
    image.setAttribute('tabindex', 0)
    image.classList.add('information__image')

    information.classList.add('information')
    review.classList.add('review')

    informationText.restaurant = this._restaurant
    informationMenu.menus = this._restaurant.menus

    information.appendChild(image)
    information.appendChild(informationText)
    information.appendChild(informationMenu)

    this.appendChild(information)
  }
}
customElements.define('restaurant-detail', RestaurantDetail)
