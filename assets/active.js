setTimeout(function () {
    const navItems = document.querySelectorAll('.nav-bar li a');
    console.log(navItems);
    navItems.forEach(function (navItem) {
        console.log('funfou fora');
        navItem.addEventListener('click', function (event) {
            console.log('funfou');

            // Remove the 'active' class from all 'li a' elements
            navItems.forEach(function (navItem) {
                navItem.classList.remove('active');
            });

            // Add the 'active' class to the clicked 'li a' element
            this.classList.add('active');
        });
    });
}, 2000);