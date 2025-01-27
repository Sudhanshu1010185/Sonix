function changeImage(element) {
    const mainImage = document.getElementById('pimg');
    mainImage.src = element.src;
}

window.addEventListener('scroll', function() {
    var bgcontainer = document.getElementById('bgcontainer');
    var rect = bgcontainer.getBoundingClientRect();
    
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        bgcontainer.classList.add('reveal');
        bgcontainer.classList.remove('hide');
    } else {
        bgcontainer.classList.add('hide');
        bgcontainer.classList.remove('reveal');
    }
});