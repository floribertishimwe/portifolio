function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.humburger-icon');

    menu.classList.toggle('open');
    icon.classList.toggle('open');
}

// window.addEventListener('resize', () => {
//     const menu = document.querySelector('.menu-links');
//     const icon = document.querySelector('.humburger-icon');

//     if (window.innerWidth > 1200) {
//         // Remove the 'open' class if present when resizing above 1200px
//         if (menu.classList.contains('open')) {
//             menu.classList.toggle('open');
//         }
//         // menu.classList.remove(open);
//         // icon.classList.remove(open);
//         if (icon.classList.contains('open')) {
//             icon.classList.remove('open');
//         }
//     }
// });

