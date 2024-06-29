const loader = document.querySelector('#loader');


setTimeout(() => {
    loader.style.transition = 'all linear 0.5s';
    loader.style.top = '-100%';
}, 3100)