document.addEventListener('scroll', () => {
    const container = document.querySelector('.container');
    const containerTop = container.getBoundingClientRect().top;
    const circle = document.querySelector('.circle');
    const circle2 = document.querySelector('.circle2');
    const square = document.querySelector('.square');
    const rectangle = document.querySelector('.rectangle');

    const scrollTop = window.scrollY - container.offsetTop;
    const fadeOutStart = 600;
    const moveDownStart = 500;
    const moveDownDistance = 600;

    if (containerTop < window.innerHeight && containerTop + container.offsetHeight > 0) {
        let opacity = 0.5 - Math.min(scrollTop / fadeOutStart, 1);
        let newTop = scrollTop / moveDownStart * moveDownDistance;

        console.log(`Scroll Top: ${scrollTop}, Opacity: ${opacity}, New Top: ${newTop}`);

        if (scrollTop > 0) {
            circle.style.opacity = opacity;
            circle.style.top = `calc(10% + ${newTop}px)`;
            circle2.style.opacity = opacity;
            circle2.style.top = `calc(40% + ${newTop}px)`;
            square.style.opacity = opacity;
            square.style.top = `calc(40% + ${newTop}px)`;
            rectangle.style.opacity = opacity;
            rectangle.style.top = `calc(20% + ${newTop}px)`;
        } 
    }
});
