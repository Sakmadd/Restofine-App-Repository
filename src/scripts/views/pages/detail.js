import RestaurantDbSource from '../../data/restaurantDB-source'
import UrlParser from '../../routes/url-parser'
import LikeButtonInitiator from '../../utils/like-button-initiator'
import reviewFormInitiator from '../../utils/review-form-initiator'

const Detail = {
  async render () {
    return `
        <section class="content">
            <div class="information">
            </div>
            <div id="likeButtonContainer"></div>
        </section> 
        `
  },
  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const result = await RestaurantDbSource.detailRestaurant(url.id)
    const restaurant = result.restaurant
    const putMenu = document.querySelector('.information')
    const restaurantDetailElement = document.createElement('restaurant-detail')

    restaurantDetailElement.restaurant = result.restaurant
    putMenu.appendChild(restaurantDetailElement)

    const submitReviewButton = document.querySelector('#review-form__button')

    reviewFormInitiator.init({
      restaurant,
      submitReviewButton
    })

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant
    })
  }
}
export default Detail
