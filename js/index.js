window.onload = () => {
    let menuButton = document.getElementById('menu-button');
    menuButton.addEventListener('click', () => {
        let menu = document.getElementById('menu-list');
        if(menu.classList.contains('hidden')) {
            menu.classList.remove('hidden');
            menu.classList.add('visible');
        } else {
            menu.classList.remove('visible');
            menu.classList.add('hidden');
        }
    });
}