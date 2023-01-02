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
                    // document.querySelector('.menu-content').style.height = window.innerHeight + "px";
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


    // Contact Overlay
    const formEl = document.querySelector('.form-overlay'),
        formRevealer = new RevealFx(formEl),
        closeFormElm = formEl.querySelector('.close-form-overlay');

    document.querySelector('.open-overlay button').addEventListener('click', function() {
        formEl.classList.add('to-position');
        document.documentElement.classList.add('no-scroll');

        setTimeout(() => {
            formRevealer.reveal({
                bgcolor: getComputedStyle(formEl).getPropertyValue('--color-third'),
                direction: 'bt',
                duration: 400,
                onCover: function(contentEl, revealerEl) {
                    formEl.classList.add('overlay-open');
                    contentEl.style.opacity = 1;
                },
                onComplete: function() {
                    closeFormElm.addEventListener('click', closeForm);
                    // document.querySelector('.overlay-content').style.height = window.innerHeight + "px";
                }
            });
        }, 10);
    });

    function closeForm() {
        closeFormElm.removeEventListener('click', closeForm);
        formEl.classList.remove('overlay-open');
        document.documentElement.classList.remove('no-scroll');
        formRevealer.reveal({
            bgcolor: getComputedStyle(formEl).getPropertyValue('--color-third'),
            direction: 'tb',
            duration: 400, 
            onCover: function(contentEl, revealerEl) {
                formEl.classList.remove('overlay-open');
                contentEl.style.opacity = 0;
            },
            onComplete: function() {
                formEl.classList.remove('to-position');
            }
        });
    }


    // form
    const handleSubmit = (event) => {
        event.preventDefault();      
        const myForm = event.target;
        const formData = new FormData(myForm);
        const contactBoxElm = document.querySelector('.contact-message');
        
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
        })
        .then(() => {  
            closeForm();

            setTimeout(() => {
                contactBoxElm.classList.add('active');
                setTimeout(() => {
                    contactBoxElm.classList.remove('active');
                }, 3000);                
            }, 900);
        })
        .catch((error) => alert(error));
    };

    formEl.addEventListener("submit", handleSubmit);    
})();
