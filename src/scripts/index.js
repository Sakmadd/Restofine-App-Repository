import '../styles/main.scss';
import '../styles/responsive.scss'
import 'regenerator-runtime'; 

console.log('Hello Coders! :)');

const hamburgerButtonElement = document.querySelector('#hamburger');
const drawerElement = document.querySelector('#drawer');
 
hamburgerButtonElement.addEventListener('click', event => {
  drawerElement.classList.toggle('open');
  event.stopPropagation();
});