import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('#smooth-scrolling'),
    smooth: true,
    multiplier: 2
});