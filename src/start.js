
import Restaurant from'./restaurant.jpg';
import Restaurant1 from './restaurant1.jpg';
export  {start, restaurant, startPage, footer};


function start(){
    const title = document.createElement('div');
    const h1 = document.createElement('h1');
    title.classList.add('title');
    title.appendChild(h1);
    h1.textContent = 'Lion\'s Share Restaurant';
    return title;
}
function restaurant(){
    const restaurant = document.createElement('div');
    restaurant.classList.add('restaurant');
    const content = document.createElement('div');
    content.setAttribute('id', 'content');
    restaurant.appendChild(content);
    const links = document.createElement('div');
    links.setAttribute('id','links');
    content.appendChild(links);
    const btn1 = document.createElement('button');
    const btn2 = document.createElement('button');
    const btn3 = document.createElement('button')
    btn1.setAttribute('id', 'home_btn');
    btn2.setAttribute('id', 'menu_btn');
    btn3.setAttribute('id', 'contact_btn');
    btn1.textContent = 'Home';
    btn2.textContent = 'Menu';
    btn3.textContent = 'Contact';
    links.appendChild(btn1);
    links.appendChild(btn2);
    links.appendChild(btn3);
    document.body.appendChild(restaurant);
    return restaurant;
}
function startPage(){
    const start = document.createElement('div');
    start.setAttribute('id', 'start-page');
    const welcome = document.createElement('div');
    welcome.classList.add('welcome');
    start.appendChild(welcome);
    const h2 = document.createElement('h2');
    h2.textContent= ' Welcome to our Restaurant';
    welcome.appendChild(h2);
    const intro = document.createElement('div');
    intro.classList.add('intro');
    welcome.appendChild(intro);
    intro.textContent = 'Step into the world of culinary magic at our\
    very praised restaurant with dishes from around\
    the world where our chefs create dishes that are not only\
    delicious, but visually stunning as well.\
    the restaurand has a unique interior design, confortable to\
    spend your diner time, where you will want to come over again.';
    const myImg = new Image();
    myImg.src = Restaurant;
    myImg.setAttribute('width', '400px');
    welcome.appendChild(myImg);
    const myImg1 = new Image();
    myImg1.src = Restaurant1;
    myImg1.setAttribute('width', '400px');
    welcome.appendChild(myImg1);
    const open = document.createElement('div');
    open.classList.add('open');
    const p1 = document.createElement('h3');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p');
    const p5 = document.createElement('p');
    const p6 = document.createElement('p');
    const p7 = document.createElement('p');
    const p8 = document.createElement('p');
    p1.textContent = 'Hours:';
    p2.textContent = 'Sunday: 8am - 8pm';
    p3.textContent = 'Monday: 6am - 6pm ';
    p4.textContent = 'Tuesday: 6am - 6pm ';
    p5.textContent = 'Wednesday: 6am - 6pm ';
    p6.textContent = 'Thursday: 6am - 10pm ';
    p7.textContent = 'Friday: 6am - 10pm ';
    p8.textContent = ' Saturday: 8am - 10pm';

    open.append(p1, p2, p3, p4, p5, p6, p7, p8);
    welcome.appendChild(open);
return start;
}
function footer(){
    const footer = document.createElement('footer');
    footer.textContent = 'Copyright @PetruD Odin Project';
    return footer;

}
