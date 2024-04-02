import ReviewInitiator from '../src/scripts/utils/review-initiator'

describe('Adding A Restaurant Review ', () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ message: 'Review added successfully' })
    })
  )
  it('should show the review customer', () => {
    document.body.innerHTML = '<div class="review"></div>'
    ReviewInitiator.init({
      reviewContainer: document.querySelector('.review'),
      restaurant: { id: 'rqdv5juczeskfw1e867' }
    })
    expect(document.querySelector('reviews-customer')).toBeTruthy()
  })
  it('should show the review form', () => {
    document.body.innerHTML = '<div class="review"></div>'
    ReviewInitiator.init({
      reviewContainer: document.querySelector('.review'),
      restaurant: { id: 'rqdv5juczeskfw1e867' }
    })
    expect(document.querySelector('.review-form')).toBeTruthy()
  })
  it('should be able to fill the text box', () => {
    document.body.innerHTML = '<div class="review"></div>'
    ReviewInitiator.init({
      reviewContainer: document.querySelector('.review'),
      restaurant: { id: 'rqdv5juczeskfw1e867' }
    })
    const nameBox = document.querySelector('#review-form__name')
    const descriptionBox = document.querySelector('#review-form__description')
    nameBox.value = 'nama123'
    descriptionBox.value = 'deskripsi123'
    expect(nameBox).toBeTruthy()
    expect(descriptionBox).toBeTruthy()
  })
})
