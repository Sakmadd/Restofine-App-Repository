import API_ENDPOINT from '../globals/api-endpoint'

class RestaurantDbSource {
  static async listRestaurant () {
    const response = await fetch(API_ENDPOINT.RESTAURANT_LIST)
    const responseJson = await response.json()
    return responseJson.restaurants
  }

  static async detailRestaurant (id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id))
    return response.json()
  }

  static async AddCustomerReview (customerReview) {
    const response = fetch(API_ENDPOINT.ADD_REVIEW, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(customerReview)
    })
    return response
  }
}
export default RestaurantDbSource
