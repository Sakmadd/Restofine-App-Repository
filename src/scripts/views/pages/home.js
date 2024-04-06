import RestaurantDbSource from '../../data/restaurantDB-source.js'
import RestaurantShowInitiator from '../../utils/restaurant-show-initiator'
import renderSkeletonItems from '../components/home/renderSkeleton'

const Home = {
  async render () {
    return `
      <section class="content">
        <h2 tabindex="0">Explore Restaurant</h2>
        <div class="restaurant-item posts">
          ${renderSkeletonItems()}
        </div>
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
