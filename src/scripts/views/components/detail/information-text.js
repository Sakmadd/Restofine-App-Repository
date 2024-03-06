class InformationText extends HTMLElement {
  set restaurant (restaurant) {
    this._name = restaurant.name
    this._description = restaurant.description
    this._city = restaurant.city
    this._address = restaurant.address
    this._render()
  }

  _render () {
    const name = document.createElement('h2')
    const address = document.createElement('p')
    const description = document.createElement('p')

    name.classList.add('information__name')
    address.classList.add('information__address')
    description.classList.add('information__description')

    name.setAttribute('tabindex', 0)
    address.setAttribute('tabindex', 0)
    description.setAttribute('tabindex', 0)

    name.innerHTML = `${this._name}`
    address.innerHTML = `${this._address}, ${this._city}`
    description.innerHTML = `${this._description}`

    this.appendChild(name)
    this.appendChild(address)
    this.appendChild(description)
  }
}
customElements.define('information-text', InformationText)
