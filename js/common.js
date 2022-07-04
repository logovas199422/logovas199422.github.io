function BurgerMenu() {
    const burger = document.querySelector('[data-burger]')
    const menu = document.querySelector('[data-menu]')
    const cross = document.querySelector('[data-cross]')

    burger.addEventListener('click', () => {
        menu.classList.toggle('header__menu--visible')
        cross.style.display = 'flex'
    })

    cross.addEventListener('click', () => {
        menu.classList.toggle('header__menu--visible')
        cross.style.display = 'none'
    })
}

BurgerMenu();
