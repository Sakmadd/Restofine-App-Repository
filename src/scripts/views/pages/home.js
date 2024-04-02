import RestaurantDbSource from '../../data/restaurantDB-source'
import RestaurantShowInitiator from '../../utils/restaurant-show-initiator'

const Home = {
  async render () {
    return `
        <section class="content">
        <h2 tabindex="0">Explore Restaurant</h2>
        </section> 
        `
  },
  async afterRender () {
    const restaurants = await RestaurantDbSource.listRestaurant()
    const restaurantsContainer = document.querySelector('.content')
    RestaurantShowInitiator.init({
      restaurantsContainer,
      restaurants
    })
  }
}
export default Home
