const menu = document.querySelector('#mobile-menu');/*for id, we use #*/
const menuLinks = document.querySelector('.navbar__menu');/*NOT navbar_menu, class". */

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');/*?*/ 
    menuLinks.classList.toggle('active');

});



