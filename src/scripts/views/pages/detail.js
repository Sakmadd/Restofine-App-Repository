import RestaurantDbSource from '../../data/restaurantDB-source.js'
import UrlParser from '../../routes/url-parser'
import InformationInitiator from '../../utils/information-initiator'
import LikeButtonInitiator from '../../utils/like-button-initiator'
import ReviewInitiator from '../../utils/review-initiator'

const Detail = {
  async render () {
    return `
        <section class="content">
            <div class="information">
            </div>
            <div class="review"></div>
            <div id="likeButtonContainer"></div>
        </section> 
        `
  },
  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const result = await RestaurantDbSource.detailRestaurant(url.id)
    const restaurant = result.restaurant

    InformationInitiator.init({
      informationContainer: document.querySelector('.information'),
      restaurant
    })

    ReviewInitiator.init({
      reviewContainer: document.querySelector('.review'),
      restaurant
    })

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant
    })
  }
}
export default Detail
