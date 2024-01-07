import Breakfast from './breakfast.jpg';
import Fish from './fishandchips.jpg';
import Lamb from './lambribs.jpg';
import Chiken from './chikenwings.jpg';
import Pizza from './pizza.jpg';
import Prowns from './prowns.jpg';
import Wine from './wine1.jpg';

export  default menu;


function menu(){
        const menu_list = document.createElement('div');
            menu_list.setAttribute('id', 'menu-list');
        const menu = document.createElement('div');
            menu.setAttribute('id', 'menu');
            menu_list.appendChild(menu);
        const div1 = document.createElement('h3');
        const div2 = document.createElement('div');
        const div3 = document.createElement('div');
        const div4 = document.createElement('div');
        const div5 = document.createElement('div');
        const div6 = document.createElement('div');
        const div7 = document.createElement('div');
        const div8 = document.createElement('div');
        div1.setAttribute('id', 'sugestion');
        div1.textContent = 'Meal Sugestions';
        const menu2 = document.createElement('div');
        const menu3 = document.createElement('div');
        const menu4 = document.createElement('div');
        const menu5 = document.createElement('div');
        const menu6 = document.createElement('div');
        const menu7 = document.createElement('div');
        const menu8 = document.createElement('div');

        div2.appendChild(menu2);
        div3.appendChild(menu3);
        div4.appendChild(menu4);
        div5.appendChild(menu5);
        div6.appendChild(menu6);
        div7.appendChild(menu7);
        div8.appendChild(menu8);
        
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');
        const p4 = document.createElement('p');
        const p5 = document.createElement('p');
        const p6 = document.createElement('p');
        const p7 = document.createElement('p');
        const p8 = document.createElement('p');

        const h2 = document.createElement('h4');
        const h3 = document.createElement('h4');
        const h4 = document.createElement('h4');
        const h5 = document.createElement('h4');
        const h6 = document.createElement('h4');
        const h7 = document.createElement('h4');
        const h8 = document.createElement('h4');

        menu2.appendChild(h2);
        menu3.appendChild(h3);
        menu4.appendChild(h4);
        menu5.appendChild(h5);
        menu6.appendChild(h6);
        menu7.appendChild(h7);
        menu8.appendChild(h8);
        h2.textContent = 'English Breakfast';
        h3.textContent = 'Fish and Chips ';
        h4.textContent = 'Lamb Ribs';
        h5.textContent = 'Chiken Wings';
        h6.textContent = 'Pizza';
        h7.textContent = 'Prowns Salat';
        h8.textContent = 'Enjoy Drinks';
    p2.textContent= 'bacon, fried egg, sausage, mushrooms, baked beans,toast\n'  
                    'hash brown and grilled tomatoes.';
    p3.textContent= 'fish: cod, hadock, halibut with chips, green pease, tartare sauce, lemon';
    p4.textContent= 'fresh baby lamb, rice, tzatziki sauce, hot pepper sauce, green salat';
    p5.textContent= 'BBQ or Buffalo chicken bites, accompanied with blue cheese and stalks of celery.';
    p6.textContent= 'with different topics: ham, salami, chees,\n'
                    'sliced tomat, spinach, red peppers and sliced mushrooms.';
    p7.textContent= 'fride fresh prawns with lettuce, red onion, garlic, lemon and oliven oil';
    p8.textContent= 'enjoy drinks from around the world, wine, spirits, beer, soft drinks and coktails';
    
    const img2 = new Image();
    const img3 = new Image();
    const img4 = new Image();
    const img5 = new Image();
    const img6 = new Image();
    const img7 = new Image();
    const img8 = new Image();
    img2.setAttribute('height', '120px');
    img3.setAttribute('height', '120px');
    img4.setAttribute('height', '120px');
    img5.setAttribute('height', '120px');
    img6.setAttribute('height', '120px');
    img7.setAttribute('height', '120px');
    img8.setAttribute('height', '120px');

    img2.src = Breakfast;
    img3.src = Fish;
    img4.src = Lamb;
    img5.src = Chiken;
    img6.src = Pizza;
    img7.src = Prowns;
    img8.src = Wine;

    menu2.appendChild(p2);
    menu3.appendChild(p3);
    menu4.appendChild(p4);
    menu5.appendChild(p5);
    menu6.appendChild(p6);
    menu7.appendChild(p7);
    menu8.appendChild(p8);

    div2.appendChild(img2);
    div3.appendChild(img3);
    div4.appendChild(img4);
    div5.appendChild(img5);
    div6.appendChild(img6);
    div7.appendChild(img7);
    div8.appendChild(img8);

    menu.append(div1, div2, div3, div4, div5, div6, div7, div8);
        return menu_list;
}
