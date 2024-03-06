import RestaurantDbSource from '../../data/restaurantdb-source'
import UrlParser from '../../routes/url-parser'

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
    const putMenu = document.querySelector('.information')
    const restaurantDetail = document.createElement('restaurant-detail')

    restaurantDetail.restaurant = result.restaurant
    putMenu.appendChild(restaurantDetail)
  }
}
export default Detail
