//burger menu activation classes

const burger = document.querySelector('.burger'),
    menu = document.querySelector('.burger__menu'),
    overlay = document.querySelector('.overlay');

burger.addEventListener('click', () => {
    menu.classList.toggle('burger__menu_active');
    burger.classList.toggle('burger_active');
    if (document.body.style.overflow === "hidden") {
        hideOverlay()
    } else {
        showOverlay();
    }

});


function showOverlay() {
    document.body.style.overflow = "hidden";
    overlay.style.display = 'block';
}

function hideOverlay() {
    document.body.style.overflow = "";
    overlay.style.display = 'none';
}
//menu toggle
const menuItems = document.querySelectorAll('.header__menu-link'),
    menuParent = document.querySelector('.header__menu');

function hideItems() {
    menuItems.forEach(item => {
        item.classList.remove('header__menu-link_active');
    });
}

function showItems(items, i = 0) {
    items[i].classList.add('header__menu-link_active');
}
hideItems();
showItems(menuItems);


menuParent.addEventListener('click', event => {
    event.preventDefault();
    const target = event.target;
    if (target && !target.classList.contains('header__menu-link_active')) {
        menuItems.forEach((item, i) => {
            if (target == item) {
                hideItems();
                showItems(menuItems, i);
            }
        });
    }
});