import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator'

const createLikeButtonPresenterWithMovie = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    restaurant
  })
}
export { createLikeButtonPresenterWithMovie }
