import RestaurantDbSource from '../src/scripts/data/restaurantDB-source.js'
import API_ENDPOINT from '../src/scripts/globals/api-endpoint'
import ReviewInitiator from '../src/scripts/utils/review-initiator'

describe('Adding A Restaurant Review ', () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      status: 201,
      json: () => Promise.resolve({ message: 'Review added successfully' })
    })
  )
  beforeEach(() => {
    document.body.innerHTML = '<div class="review"></div>'
    ReviewInitiator.init({
      reviewContainer: document.querySelector('.review'),
      restaurant: { id: 'rqdv5juczeskfw1e867' }
    })
  })
  it('should show the review customer', () => {
    expect(document.querySelector('reviews-customer')).toBeTruthy()
  })
  it('should show the review form', () => {
    expect(document.querySelector('.review-form')).toBeTruthy()
  })
  it('should be able to fill the text box', () => {
    const nameBox = document.querySelector('#review-form__name')
    const descriptionBox = document.querySelector('#review-form__description')
    nameBox.value = 'nama123'
    descriptionBox.value = 'deskripsi123'
    expect(nameBox).toBeTruthy()
    expect(descriptionBox).toBeTruthy()
  })
  it('should successfully send customer review data', async () => {
    const customerReview = {
      id: 'rqdv5juczeskfw1e867',
      name: 'John Doe',
      review: 'Great food and service!'
    }
    const response = await RestaurantDbSource.AddCustomerReview(customerReview)
    expect(fetch).toHaveBeenCalledWith(API_ENDPOINT.ADD_REVIEW, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(customerReview)
    })
    expect(response.status).toBe(201)
    const responseBody = await response.json()
    expect(responseBody).toEqual({ message: 'Review added successfully' })
  })
  it('should show the review customer', async () => {
    const customerReview = {
      id: 'rqdv5juczeskfw1e867',
      name: 'John Doe',
      review: 'Great food and service!'
    }
    await RestaurantDbSource.AddCustomerReview(customerReview)
    const reviewItems = document.querySelectorAll('.review-item')
    let reviewFound = false
    reviewItems.forEach(reviewItem => {
      const nameBox = reviewItem.querySelector('#review-form__name')
      const descriptionBox = reviewItem.querySelector('#review-form__description')
      if (nameBox.textContent === customerReview.name && descriptionBox.textContent === customerReview.review) {
        reviewFound = true
      }
    })
    expect(!reviewFound).toBe(true)
  })
})
