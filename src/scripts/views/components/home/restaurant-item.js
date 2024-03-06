import CONFIG from '../../../globals/config'

class RestaurantItem extends HTMLElement {
  set restaurant (restaurant) {
    this._restaurant = restaurant
    this.render()
  }

  render () {
    this.innerHTML = `
        <article class="post-item">
              <div class="post-item__thumbnail">
                <h3 class="ratings" tabindex="0">★ ${this._restaurant.rating}</h3>
                <img src="${CONFIG.BASE_IMAGE_URL + this._restaurant.pictureId}" class="post-item__image"  alt="Restoran ${this._restaurant.name}" />
              </div>
              <div class="post-item__content">
                <h1 class="post-item__title">
                  <a href="/#/detail/${this._restaurant.id}">${this._restaurant.name}</a>
                </h1>
                <p class="post-item__city">${this._restaurant.city}</p>
                <p tabindex="0" class="post-item__description">
                  ${this._restaurant.description}
                </p>
              </div>
            </article>
        `
  }
}

customElements.define('restaurant-item', RestaurantItem)
