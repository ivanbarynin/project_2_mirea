document.querySelector('.header__burger').addEventListener('click', function() {
    document.querySelector('.header__nav-list').classList.toggle('active');
    this.classList.toggle('active');
});

window.addEventListener('scroll', function() {
    const backToTop = document.getElementById('back-to-top');
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

document.getElementById('back-to-top').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});