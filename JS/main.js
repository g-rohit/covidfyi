let mobileMenu = document.querySelector('#mobileMenu');
let desktopMenu = document.querySelector('.menu__items'); 

mobileMenu.addEventListener('click', () => {
     console.log('mobile menu clicked');
     
     if (mobileMenu.firstElementChild.classList.contains('fa-bars')) {
        console.log('mobile menu is closed...opening now');        
        mobileMenu.firstElementChild.classList = 'fal fa-times fa-2x';
        desktopMenu.style.display = 'flex';
    }
    else {
        console.log('mobile menu is open...closing now');        
        desktopMenu.style.display = 'none';
        mobileMenu.firstElementChild.classList = 'fal fa-bars fa-2x';
     }
})