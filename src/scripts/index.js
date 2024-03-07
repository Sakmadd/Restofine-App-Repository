import 'regenerator-runtime'
import '../styles/main.scss'
import '../styles/responsive.scss'
import './views/components/home/restaurant-container'
import './views/components/home/restaurant-item'
import './views/components/detail/information-menu'
import './views/components/detail/information-text'
import './views/components/detail/reviews-customer'
import './views/components/detail/restaurant-detail'

import App from './views/app'
import swRegister from './utils/sw-register'

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
  swRegister();
})
