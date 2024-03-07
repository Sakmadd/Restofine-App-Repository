const createLikedButton = () => {
  return `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`
}
export default createLikedButton
