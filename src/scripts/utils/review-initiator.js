import RestaurantDbSource from '../data/restaurantDB-source'

import createReviewForm from '../views/components/detail/review-form'

const ReviewInitiator = {
  init ({ restaurant, reviewContainer }) {
    this._container = reviewContainer
    this._restaurant = restaurant
    this._renderReview(this._container)
  },
  _renderReview (container) {
    const reviewsCustomerElement = document.createElement('reviews-customer')
    reviewsCustomerElement.restaurant = this._restaurant
    container.appendChild(reviewsCustomerElement)
    container.innerHTML += createReviewForm()
    this._submitEvent()
  },
  _submitEvent () {
    document.querySelector('#review-form__button').addEventListener('click', event => {
      event.stopPropagation()
      const nameInput = document.getElementById('review-form__name').value
      const descriptionInput = document.getElementById('review-form__description').value
      if (!nameInput || !descriptionInput) {
        alert('Nama dan deskripsi review harus di isi yaa!')
        return
      }
      this._sendingReview()
      this._fetchData(nameInput, descriptionInput)
    })
  },
  _sendingReview () {
    const submitReviewButton = document.querySelector('#review-form__button')
    submitReviewButton.disabled = true
    submitReviewButton.style.cursor = 'alias'
    submitReviewButton.classList.toggle('inputUnsend')
    submitReviewButton.value = 'Mengirim Review'
    submitReviewButton.disabled = true
  },

  _sendingReviewDone () {
    const submitReviewButton = document.querySelector('#review-form__button')
    submitReviewButton.disabled = false
    submitReviewButton.style.cursor = 'default'
    submitReviewButton.classList.toggle('inputUnsend')
    submitReviewButton.value = 'submit'
    submitReviewButton.disabled = false
  },

  async _afterFetchData () {
    const result = await RestaurantDbSource.detailRestaurant(this._restaurant.id)
    const restaurantDetail = result.restaurant
    const newReviewsCustomer = document.createElement('reviews-customer')
    newReviewsCustomer._reloadReviews = restaurantDetail
    document.querySelector('.review-customer').replaceWith(newReviewsCustomer)
    document.getElementById('review-form__name').value = ''
    document.getElementById('review-form__description').value = ''
    this._sendingReviewDone()
  },

  async _fetchData (nameInput, descriptionInput) {
    const customerReview = {
      id: this._restaurant.id,
      name: nameInput,
      review: descriptionInput
    }
    await RestaurantDbSource.AddCustomerReview(customerReview)
      .then(response => {
        if (response.ok) {
          this._afterFetchData()
        }
      })
      .catch(error => {
        console.error('Error submitting review:', error)
        alert('Terjadi kesalahan saat mengirim ulasan. Silakan coba lagi nanti.')
        this._sendingReviewDone(this._submitButton)
      })
  }
}
export default ReviewInitiator
