import RestaurantDbSource from '../../data/restaurantdb-source'

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
    const containerSpace = document.querySelector('.content')
    const restaurantContainer = document.createElement('restaurant-container')
    restaurantContainer.restaurants = restaurants

    containerSpace.appendChild(restaurantContainer)
  }
}
export default Home
