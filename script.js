//search box
const searchBox = document.querySelector('.search-form')
const searchIcon = document.querySelector('#search-btn')

searchIcon.addEventListener('click', () =>
{
    searchBox.classList.toggle('active')
    document.addEventListener('click', (e) =>{
        if(!e.composedPath().includes(searchIcon) &&
           !e.composedPath().includes(searchBox)){
            searchBox.classList.remove('active')
        }
    });
});
// render basket
const basketIcon = document.querySelector('#basket');
const orderCard = document.querySelector('.order-card');

basketIcon.addEventListener('click', () =>
{
    orderCard.classList.toggle('active')
    document.addEventListener('click', (e) =>{
        if(!e.composedPath().includes(basketIcon) &&
           !e.composedPath().includes(orderCard)){
            orderCard.classList.remove('active')
        }
    });
});

// render menu bars
const menuBars = document.querySelector('#menu-bars');
const navbar = document.querySelector('.navbar');

menuBars.addEventListener('click', () =>
{ navbar.classList.toggle('active')
    
    document.addEventListener('click', (e) =>{
        if(!e.composedPath().includes(menuBars) &&
           !e.composedPath().includes(navbar)){
            navbar.classList.remove('active')
        }
    });
});
