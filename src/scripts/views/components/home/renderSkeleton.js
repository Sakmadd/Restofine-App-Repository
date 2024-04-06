const renderSkeletonItems = () => {
  let skeletonItems = ''
  for (let i = 0; i < 6; i++) {
    skeletonItems += `
      <restaurant-item>
        <article class="post-item skeleton-width">
          <div class="post-item__image skeleton"></div>
          <div class="post-item__content">
            <div class="post-item__title skeleton skeleton-text"></div>
            <div class="post-item__city skeleton skeleton-text"></div>
            <div class="post-item__description skeleton skeleton-text"></div>
            <div class="post-item__description skeleton skeleton-text"></div>
            <div class="post-item__description skeleton skeleton-text"></div>
            <div class="post-item__description skeleton skeleton-text"></div>
          </div>
        </article>
      </restaurant-item>
    `
  }
  return skeletonItems
}

export default renderSkeletonItems
