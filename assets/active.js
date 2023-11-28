const navItems = document.querySelectorAll('#nav-bar li a');
// Add an event listener to each 'li a' element
navItems.forEach(function (navItem) {
    navItem.addEventListener('click', function (event) {
        // Prevent the default action of the click event
        event.preventDefault();

        // Remove the 'active' class from all 'li a' elements
        navItems.forEach(function (navItem) {
            navItem.classList.remove('active');
        });

        // Add the 'active' class to the clicked 'li a' element
        this.classList.add('active');
    });
});