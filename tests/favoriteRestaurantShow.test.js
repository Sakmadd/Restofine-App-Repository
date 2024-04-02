const { default: FavoritedRestaurantInitiator } = require('../src/scripts/utils/favorited-restaurant-show-initiator')

describe('Showing all favorite restaurants', () => {
  beforeEach(() => {
    document.body.innerHTML = `<section class="content">
      <h2 tabindex="0">Favorited Restaurant</h2>
        <div class="posts">
        </div>
    </section>`
  })
  describe('When no restaurants have been liked', () => {
    it('should render the information that no restaurants have been liked', () => {
      const restaurants = []
      FavoritedRestaurantInitiator.init({
        restaurantContainer: document.querySelector('.content'),
        restaurants
      })
      expect(document.querySelector('.posts')).toBeFalsy()
    })
    it('should ask for the favorite restaurants', async () => {
      const FavoriteRestaurantIndexedDB = {
        getAllRestaurants: jest.fn()
          .mockImplementation(() => [])
      }
      const restaurants = FavoriteRestaurantIndexedDB.getAllRestaurants()
      FavoritedRestaurantInitiator.init({
        restaurantContainer: document.querySelector('.content'),
        restaurants
      })
      expect(FavoriteRestaurantIndexedDB.getAllRestaurants).toHaveBeenCalledTimes(1)
    })
    it('should show the information that no movies have been liked', () => {
      const restaurants = []
      FavoritedRestaurantInitiator.init({
        restaurantContainer: document.querySelector('.content'),
        restaurants
      })
      expect(document.querySelector('.emptySign')).toBeTruthy()
    })
  })
  describe('when theres restaurants have been liked', () => {
    it('should render the movies', () => {
      const restaurants = [
        {
          id: 'rqdv5juczeskfw1e867',
          name: 'Melting Pot',
          description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ...',
          pictureId: '14',
          city: 'Medan',
          rating: 4.2
        },
        {
          id: 's1knt6za9kkfw1e867',
          name: 'Kafe Kita',
          description: 'Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. ...',
          pictureId: '25',
          city: 'Gorontalo',
          rating: 4
        }
      ]
      FavoritedRestaurantInitiator.init({
        restaurantContainer: document.querySelector('.posts'),
        restaurants
      })
      expect(document.querySelector('restaurant-container')).toBeTruthy()
    })
  })
})
