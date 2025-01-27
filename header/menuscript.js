document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menuButton');
    const sideMenu = document.getElementById('sideMenu');
    let lastScrollY = window.scrollY;

    menuButton.addEventListener('click', function() {
        sideMenu.classList.toggle('open'); // Toggle the side menu
        menuButton.classList.toggle('open'); // Toggle the open class for rotation

        // Change button text from ☰ to X
        if (menuButton.classList.contains('open')) {
            menuButton.textContent = '✕'; // Change to X
        } else {
            menuButton.textContent = '☰'; // Change back to hamburger
        }
    });

    window.addEventListener('scroll', function() {
        let currentScrollY = window.scrollY;

        // Close side menu when scrolling down and menu is open
        if (currentScrollY > lastScrollY && menuButton.classList.contains('open')) {
            sideMenu.classList.remove('open'); // Hide the menu
            menuButton.classList.remove('open'); // Rotate the button back
            menuButton.textContent = '☰'; // Change back to hamburger
        }

        lastScrollY = currentScrollY;
    });
});
