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
    const restaurantId = result.restaurant.id
    const restaurant = result.restaurant
    const putMenu = document.querySelector('.information')
    const restaurantDetail = document.createElement('restaurant-detail')

    restaurantDetail.restaurant = result.restaurant
    putMenu.appendChild(restaurantDetail)

    const submitReviewButton = document.querySelector('#review-form__button')
    reviewFormInitiator.init({ restaurantId, submitReviewButton })

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant
    })
  }
}
export default Detail
