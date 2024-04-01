class ReviewsCustomer extends HTMLElement {
  set restaurant (restaurant) {
    this._customerReviews = restaurant.customerReviews
    this._render()
  }

  _render () {
    this._customerReviews.forEach(customerReview => {
      const name = document.createElement('h3')
      const date = document.createElement('h3')
      const review = document.createElement('h3')

      const reviewCustomerItem = document.createElement('div')

      name.innerHTML = `${customerReview.name}`
      date.innerHTML = `${customerReview.date}`
      review.innerHTML = `${customerReview.review}`

      name.setAttribute('tabindex', 0)
      date.setAttribute('tabindex', 0)
      review.setAttribute('tabindex', 0)

      name.classList.add('review-customer-item__name')
      date.classList.add('review-customer-item__date')
      review.classList.add('review-customer-item__description')
      reviewCustomerItem.classList.add('review-customer-item')
      this.classList.add('review-customer')

      reviewCustomerItem.appendChild(name)
      reviewCustomerItem.appendChild(date)
      reviewCustomerItem.appendChild(review)
      this.appendChild(reviewCustomerItem)
    })
  }
}

customElements.define('reviews-customer', ReviewsCustomer)
