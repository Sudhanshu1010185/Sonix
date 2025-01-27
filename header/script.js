        // Toggle header visibility on scroll
        let lastScrollTop = 0;
        const header = document.getElementById('header');

        window.addEventListener('scroll', function() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop) {
                // Scroll down
                header.classList.add('hidden');
            } else {
                // Scroll up
                header.classList.remove('hidden');
            }
            lastScrollTop = scrollTop;
        });

        // Popup functionality
        const loginBtn = document.getElementById('login');
        const premiumBtn = document.getElementById('premium');
        const loginPopup = document.getElementById('loginPopup');
        const premiumPopup = document.getElementById('premiumPopup');
        const closeLoginPopup = document.getElementById('closeLoginPopup');
        const closePremiumPopup = document.getElementById('closePremiumPopup');

        loginBtn.addEventListener('click', function() {
            loginPopup.style.display = 'flex';
        });

        premiumBtn.addEventListener('click', function() {
            premiumPopup.style.display = 'flex';
        });

        loginPopup.addEventListener('click', function(event) {
            if (event.target === loginPopup || event.target === closeLoginPopup) {
                loginPopup.style.display = 'none';
            }
        });

        premiumPopup.addEventListener('click', function(event) {
            if (event.target === premiumPopup || event.target === closePremiumPopup) {
                premiumPopup.style.display = 'none';
            }
        });


        /*chat icon */
        window.addEventListener('scroll', function() {
            const chatButton = document.querySelector('.chat');
            if (window.scrollY > window.innerHeight * .8) { 
                chatButton.style.opacity = '1';
            } else {
                chatButton.style.opacity = '0';
            }
        });
        