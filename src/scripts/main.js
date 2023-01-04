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

    // Calendly
    document.querySelector('.open-calendly').addEventListener('click', function() {    
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        document.body.appendChild(script);

        document.head.insertAdjacentHTML('afterbegin', '<link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css">');

        const promise = new Promise((resolve, reject) => {
            script.addEventListener('load', resolve);
            script.addEventListener('error', reject);
        });

        promise.then(() => {
            console.log('Script loaded successfully');
            Calendly.showPopupWidget('https://calendly.com/worth-it-studio/15min?hide_landing_page_details=1&background_color=ffffff&text_color=413C58&primary_color=4dbedd');return false;
        }).catch(() => {
            console.log('Failed to load script');
        });        
    });
})();
