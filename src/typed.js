import Typed from 'typed.js';




const typed = new Typed('#element', {
    strings: ['We\'ve hosted many exciting events', ' We\'re more than just a student body, we are a family.'],
    typeSpeed: 70,
    backSpeed: 30,
    loop: true
  });


const cursor = document.querySelector('.typed-cursor');

cursor.classList.add('display-3', 'me-3');
