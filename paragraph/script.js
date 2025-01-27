 function handleScroll() {
            var container = document.getElementById('bgcontainer2');
            var rect = container.getBoundingClientRect();
            var isInViewport = (rect.top <= window.innerHeight) && (rect.bottom >= 0);
    
            if (isInViewport) {
                container.classList.add('reveal');
                container.classList.remove('hide');
            } else {
                container.classList.add('hide');
                container.classList.remove('reveal');
            }
        }
    
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('load', handleScroll); // To handle initial load if container is in view
    
        // Optional: Call handleScroll on resize to ensure proper behavior on viewport size changes
        window.addEventListener('resize', handleScroll);