import _ from 'lodash';
import './style.css';
import { start, restaurant, startPage, footer} from './start.js';
import menu from './menu.js';
import contact from './contact.js';


function component(){
const content = document.createElement('div');
    content.setAttribute('id', 'container');
    return content;
}
document.body.appendChild(component());
const a = document.querySelector('#container');
a.appendChild(start());
a.appendChild(restaurant());
a.appendChild(footer());
const content = document.querySelector('#content');
content.appendChild(startPage());
content.appendChild(menu());
content.appendChild(contact());
const start_page = document.querySelector('#start-page');
const menu_list = document.querySelector('#menu-list');
const contact_page = document.querySelector('#contact');
const home_btn = document.querySelector('#home_btn');
const menu_btn = document.querySelector('#menu_btn');
const contact_btn = document.querySelector('#contact_btn');

home_btn.addEventListener('click', () => {
  start_page.setAttribute('style', 'display:flex');
  menu_list.setAttribute('style', 'display:none');
  contact_page.setAttribute('style', 'display:none');
});
menu_btn.addEventListener('click', () => {
    start_page.setAttribute('style', 'display:none');
    menu_list.setAttribute('style', 'display:flex');
    contact_page.setAttribute('style', 'display:none')

});
contact_btn.addEventListener('click', () => {
  start_page.setAttribute('style', 'display:none');
  menu_list.setAttribute('style', 'display:none');
  contact_page.setAttribute('style', 'display:flex');

});






