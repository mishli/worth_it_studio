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
                }
            });
        }, 10);
    });

    function closeForm() {
        closeFormElm.removeEventListener('click', closeForm);
        formEl.classList.remove('overlay-open');
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
        
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
        })
        .then(() => {
            console.log("Form successfully submitted");
            console.log(formData);
            closeForm();
        })
        .catch((error) => alert(error));
    };

    formEl.addEventListener("submit", handleSubmit);    
})();
