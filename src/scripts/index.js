import 'regenerator-runtime'; 
import '../styles/main.scss';
import '../styles/responsive.scss'
import App from './views/app';

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});