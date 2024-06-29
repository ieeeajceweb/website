import LocomotiveScroll from 'locomotive-scroll';

const navigation = document.querySelector('#navigation');

const scroll = new LocomotiveScroll({
    el: document.querySelector('#smooth-scrolling'),
    smooth: true,
    multiplier: 2
});


scroll.scrollTo(navigation);


