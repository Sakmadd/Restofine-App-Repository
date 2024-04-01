import CONFIG from '../../../globals/config'
import createReviewForm from './review-form'

class RestaurantDetail extends HTMLElement {
  set restaurant (restaurant) {
    this._restaurant = restaurant
    this._menus = restaurant.menus
    this.render()
  }

  render () {
    const image = document.createElement('img')
    const information = document.createElement('div')
    const review = document.createElement('div')
    const informationTextElement = document.createElement('information-text')
    const informationMenuElement = document.createElement('information-menus')
    const reviewsCustomerElement = document.createElement('reviews-customer')

    image.setAttribute('src', `${CONFIG.BASE_IMAGE_URL}${this._restaurant.pictureId}`)
    image.setAttribute('alt', `Restaurant ${this._restaurant.name}`)
    image.setAttribute('tabindex', 0)
    image.classList.add('information__image')

    information.classList.add('information')
    review.classList.add('review')

    informationTextElement.restaurant = this._restaurant
    informationMenuElement.menus = this._menus
    reviewsCustomerElement.restaurant = this._restaurant

    information.appendChild(image)
    information.appendChild(informationTextElement)
    information.appendChild(informationMenuElement)

    review.appendChild(reviewsCustomerElement)
    review.innerHTML += createReviewForm()

    this.appendChild(information)
    this.appendChild(review)
  }
}
customElements.define('restaurant-detail', RestaurantDetail)
