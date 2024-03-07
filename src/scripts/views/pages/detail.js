import RestaurantDbSource from '../../data/restaurantdb-source'
import UrlParser from '../../routes/url-parser'
import reviewFormInitiator from '../../utils/review-form-initiator'

const Detail = {
  async render () {
    return `
        <section class="content">
            <div class="information">
            </div>
        </section> 
        `
  },
  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const result = await RestaurantDbSource.detailRestaurant(url.id)
    const restaurantId = result.restaurant.id
    const putMenu = document.querySelector('.information')
    const restaurantDetail = document.createElement('restaurant-detail')


    restaurantDetail.restaurant = result.restaurant
    putMenu.appendChild(restaurantDetail)

    const submitReviewButton = document.querySelector('#review-form__button')
    reviewFormInitiator.init({restaurantId,submitReviewButton})

  }
}
export default Detail
