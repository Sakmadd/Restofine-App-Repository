import RestaurantDbSource from '../data/restaurantDB-source'
import API_ENDPOINT from '../globals/api-endpoint'

const reviewFormInitiator = {
  init ({ restaurant, submitReviewButton }) {
    this._restaurant = restaurant
    this._submitButton = submitReviewButton
    this._submitEvent()
  },

  _submitEvent () {
    this._submitButton.addEventListener('click', event => {
      event.stopPropagation()
      const nameInput = document.getElementById('review-form__name').value
      const descriptionInput = document.getElementById('review-form__description').value
      if (!nameInput || !descriptionInput) {
        alert('Nama dan deskripsi review harus di isi yaa!')
        return
      }
      this._fetchData(nameInput, descriptionInput)
    })
  },

  _sendingReview (submitReviewButton) {
    submitReviewButton.disabled = true
    submitReviewButton.style.cursor = 'alias'
    submitReviewButton.classList.toggle('inputUnsend')
    submitReviewButton.value = 'Mengirim Review'
    submitReviewButton.disabled = true
  },

  async _afterFetchData () {
    const result = await RestaurantDbSource.detailRestaurant(this._restaurant.id)
    const restaurantDetail = result.restaurant
    const newReviewsCustomer = document.createElement('reviews-customer')
    newReviewsCustomer._reloadReviews = restaurantDetail
    document.querySelector('.review-customer').replaceWith(newReviewsCustomer)
    document.getElementById('review-form__name').value = ''
    document.getElementById('review-form__description').value = ''
    this._sendingReviewDone(this._submitButton)
  },

  _sendingReviewDone (submitReviewButton) {
    submitReviewButton.disabled = false
    submitReviewButton.style.cursor = 'default'
    submitReviewButton.classList.toggle('inputUnsend')
    submitReviewButton.value = 'submit'
    submitReviewButton.disabled = false
  },

  _fetchData (nameInput, descriptionInput) {
    const customerReview = {
      id: this._restaurant.id,
      name: nameInput,
      review: descriptionInput
    }

    this._sendingReview(this._submitButton)
    fetch(API_ENDPOINT.ADD_REVIEW, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(customerReview)
    })
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
export default reviewFormInitiator
