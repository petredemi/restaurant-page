import Map1 from './pictures/map.jpg';
export default contact;


function contact(){
    const contact = document.createElement('div');
    contact.setAttribute('id', 'contact');
    const adress = document.createElement('div');
    adress.setAttribute('id', 'adress');
    contact.appendChild(adress);

    const adress1 = document.createElement('div');
    const adress2 = document.createElement('div');
    adress1.classList.add('adress');
    adress2.classList.add('adress');

    const h1 = document.createElement('h3');
    const h2 = document.createElement('h3');
    const h3 = document.createElement('h3');
    
    h1.textContent = 'Adress:';
    h2.textContent = 'Contact:';
    h3.textContent = 'Map:';

    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p');
    const p5 = document.createElement('p');
    const p6 = document.createElement('p');

    p1.textContent = 'No. 10, Roses Street';
    p2.textContent = 'London';
    p3.textContent = 'You could come by car, if you book a reservation by phone\
     , we have a free park place for you. You can reach us by tube, only 5 min \
     walk, or by bus which is very close.';
    p4.textContent = 'Booking and reservations:';
    p5.textContent = 'phone: 07453455555';
    p6.textContent = 'rosesgarden@gmail.com';

    p3.setAttribute('style', 'border-top: 5px solid red');
    p6.setAttribute('style', 'color:red;');

    adress1.append(h1, p1, p2, p3);
    adress2.append(h2, p4, p5, p6);

const map = document.createElement('div');
    map.setAttribute('id', 'map');
const img = new Image();
    img.src = Map1;
    img.setAttribute('width', '400px');
    map.appendChild(img);
    adress.append(adress1, adress2, h3, map);

    return contact;
}