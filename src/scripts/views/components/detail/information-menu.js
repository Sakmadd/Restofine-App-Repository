class InformationMenu extends HTMLElement {
  set menus (menus) {
    this._foods = menus.foods
    this._drinks = menus.drinks
    this._render()
  }

  _render () {
    const containerFoods = document.createElement('ul')
    const containerDrinks = document.createElement('ul')

    this._foods.forEach(food => {
      const li = document.createElement('li')
      li.innerHTML = `${food.name}`
      li.classList.add('information-menu__list')
      li.setAttribute('tabIndex', 0)
      containerFoods.appendChild(li)
    })
    this._drinks.forEach(drink => {
      const li = document.createElement('li')
      li.innerHTML = `${drink.name}`
      li.setAttribute('tabIndex', 0)
      li.classList.add('information-menu__list')
      containerDrinks.appendChild(li)
    })

    containerDrinks.classList.add('information-menu__tag')
    containerFoods.classList.add('information-menu__tag')
    this.classList.add('information-menu')
    this.appendChild(containerFoods)
    this.appendChild(containerDrinks)
  }
}
customElements.define('information-menus', InformationMenu)
