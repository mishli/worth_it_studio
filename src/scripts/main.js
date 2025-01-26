/**
 * Main
 */

(function() {

    // Side Nav
    var navEl = document.querySelector('nav.side-menu'),
        revealer = new RevealFx(navEl),
        closeCtrl = navEl.querySelector('.close-menu');

    document.querySelector('.nav-icon').addEventListener('click', function() {
        navEl.classList.add('to-position');
        document.documentElement.classList.add('no-scroll');

        setTimeout(() => {
            revealer.reveal({
                bgcolor: getComputedStyle(navEl).getPropertyValue('--color-third'),
                duration: 300, 
                easing: 'easeInOutCubic',
                onCover: function(contentEl, revealerEl) {
                    navEl.classList.add('menu--open');
                    contentEl.style.opacity = 1;
                },
                onComplete: function() {
                    closeCtrl.addEventListener('click', closeMenu);
                }
            });
        }, 10);
    });

    function closeMenu() {
        closeCtrl.removeEventListener('click', closeMenu);
        navEl.classList.remove('menu--open');
        document.documentElement.classList.remove('no-scroll');

        revealer.reveal({
            bgcolor: getComputedStyle(navEl).getPropertyValue('--color-third'),
            direction: 'lr',
            duration: 300, 
            easing: 'easeInOutCubic',
            onCover: function(contentEl, revealerEl) {
                navEl.classList.remove('menu--open');
                contentEl.style.opacity = 0;
            },
            onComplete: function() {
                navEl.classList.remove('to-position');
            }
        });
    }
})();

// funcs
function goToUrl(url) {
    document.location.href = url;
}

function openWhatsApp() {
    const url = 'https://wa.me/972545845515?text=%D7%94%D7%99%D7%99%20%3A)%20%D7%94%D7%92%D7%A2%D7%AA%D7%99%20%D7%90%D7%9C%D7%99%D7%9A%20%D7%93%D7%A8%D7%9A%20%D7%94%D7%90%D7%AA%D7%A8%20%D7%A9%D7%9C%D7%9A%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A2%D7%95%D7%93%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%D7%95%D7%9C%D7%AA%D7%90%D7%9D%20%D7%90%D7%99%D7%9E%D7%95%D7%9F%20%D7%A0%D7%A1%D7%99%D7%95%D7%9F!';
    window.open(url, '_blank');
};