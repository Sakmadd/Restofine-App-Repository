/* eslint-disable no-unused-vars */
import 'regenerator-runtime'
import '../styles/main.scss'
import '../styles/responsive.scss'
import './views/components/home/restaurant-container'
import './views/components/home/restaurant-item'
import './views/components/detail/information-menu'
import './views/components/detail/information-text'
import './views/components/detail/reviews-customer'
import './views/components/detail/restaurant-detail'
import './views/components/detail/like-restaurant-button'
import './views/components/detail/unlike-restaurant-button'
import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'
import App from './views/app'
import swRegister from './utils/sw-register'

const START = 10
const NUMBER_OF_IMAGES = 100

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent')
})

window.addEventListener('hashchange', () => {
  app.renderPage()
})

window.addEventListener('load', () => {
  app.renderPage()
  swRegister()
})
