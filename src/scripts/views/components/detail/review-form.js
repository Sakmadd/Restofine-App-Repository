const createReviewForm = () => {
  return `
    <form tabindex="0" class="review-form">
    <h2>have you ever been here?</h2>
    <label for="review-form__name">Name</label>
    <input id="review-form__name" type="text" placeholder="Whats your Name?" >
    <label for="review-form__description">Review</label>
    <input id="review-form__description" type="text" placeholder="Tell us your experience!">
    <input class="review-form__submit" type="submit" value="Submit!" >
  </form>
    `
}

export default createReviewForm
