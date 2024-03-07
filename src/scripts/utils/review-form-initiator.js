import API_ENDPOINT from '../globals/api-endpoint'

const reviewFormInitiator = {
  init ({ restaurantId, submitReviewButton }) {
    submitReviewButton.addEventListener('click', event => {
      this._submitReview(restaurantId, event)
    })
  },
  _submitReview (restaurantId, event) {
    event.stopPropagation()
    const customerReview = {
      id: restaurantId,
      name: document.querySelector('#review-form__name').value,
      review: document.querySelector('#review-form__description').value
    }

    fetch(API_ENDPOINT.ADD_REVIEW, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(customerReview)
    }
    )
      .then(res => res.text())
      .then(teks => console.log(teks))
      .catch(err => console.log(err))
  }
}
export default reviewFormInitiator
