/**
 * Main
 */

(function() {

    // Side Nav
    var navEl = document.querySelector('nav.side-menu'),
        revealer = new RevealFx(navEl),
        closeCtrl = navEl.querySelector('.close-menu');

    document.querySelector('.nav-icon').addEventListener('click', function() {
        console.log('click')
        revealer.reveal({
            bgcolor: getComputedStyle(navEl).getPropertyValue('--color-third'),
            duration: 400, 
            easing: 'easeInOutCubic',
            onCover: function(contentEl, revealerEl) {
                navEl.classList.add('menu--open');
                contentEl.style.opacity = 1;
            },
            onComplete: function() {
                closeCtrl.addEventListener('click', closeMenu);
            }
        });
    });

    function closeMenu() {
        closeCtrl.removeEventListener('click', closeMenu);
        navEl.classList.remove('menu--open');
        revealer.reveal({
            bgcolor: getComputedStyle(navEl).getPropertyValue('--color-third'),
            direction: 'lr',
            duration: 400, 
            easing: 'easeInOutCubic',
            onCover: function(contentEl, revealerEl) {
                navEl.classList.remove('menu--open');
                contentEl.style.opacity = 0;
            }
        });
    }
    
    


    // Contact Overlay
    const formEl = document.querySelector('.form-overlay'),
        formRevealer = new RevealFx(formEl),
        closeFormElm = formEl.querySelector('.close-form-overlay');

    document.querySelector('.open-overlay button').addEventListener('click', function() {
        formRevealer.reveal({
            bgcolor: getComputedStyle(formEl).getPropertyValue('--color-third'),
            direction: 'bt',
            duration: 600,
            onCover: function(contentEl, revealerEl) {
                formEl.classList.add('overlay-open');
                contentEl.style.opacity = 1;
            },
            onComplete: function() {
                closeFormElm.addEventListener('click', closeForm);
            }
        });
    });

    function closeForm() {
        closeFormElm.removeEventListener('click', closeForm);
        formEl.classList.remove('overlay-open');
        formRevealer.reveal({
            bgcolor: getComputedStyle(formEl).getPropertyValue('--color-third'),
            direction: 'tb',
            duration: 600, 
            onCover: function(contentEl, revealerEl) {
                formEl.classList.remove('overlay-open');
                contentEl.style.opacity = 0;
            }
        });
    }

    formEl.addEventListener('submit', function(ev) {ev.preventDefault();});

    
})();
