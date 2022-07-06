// (function () {
//     const header = document.querySelector('.header');
//     window.onscroll = () => {
//         if (window.pageYOffset > 90) {
//             header.classList.add('header_active');
//         } else {
//             header.classList.remove('header_active');
//         }
//     };
// }());

// burger handler
(function () {
    const burgerItem = document.querySelector('.burger');
    const menuCloseItem = document.querySelector('.header-nav');
    const menu = document.querySelector('.header-nav')
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header-nav-active');
    })
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header-nav-active');
    })
}());