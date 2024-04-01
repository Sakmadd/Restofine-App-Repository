import routes from '../routes/routes'
import UrlParser from '../routes/url-parser'
import drawerInitiator from '../utils/drawer-initiator'

class App {
  constructor ({ button, drawer, content }) {
    this._button = button
    this._drawer = drawer
    this._content = content

    this._initialAppshell()
  }

  _initialAppshell () {
    drawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content
    })
  }

  async renderPage () {
    const url = UrlParser.parseActiveUrlWithCombiner()
    const page = routes[url]
    const skipLinkElem = document.querySelector('.skip-link')

    this._content.innerHTML = await page.render()
    await page.afterRender()

    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault()
      document.querySelector('#mainContent').focus()
    })
  }
}
export default App
