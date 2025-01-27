function handleScroll() {
    const playstore = document.getElementById('reveal-playstore');
    const rect = playstore.getBoundingClientRect();
    
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        playstore.classList.add('reveal');
    } else {
        playstore.classList.remove('reveal');
    }
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll); // Handle initial load if in view