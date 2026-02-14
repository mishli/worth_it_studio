/**
 * Contact form
 */

(function() {
    var form = document.querySelector('.contact-form');
    var successMessage = document.querySelector('[data-success-message]');
    var textarea = document.querySelector('.contact-form__textarea');

    if (!form || !successMessage) return;

    // Auto-expand textarea
    if (textarea) {
        textarea.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = this.scrollHeight + 'px';
        });
    }

    function showSuccess() {
        form.reset();
        if (textarea) textarea.style.height = 'auto';
        successMessage.classList.add('active');
        setTimeout(function() {
            successMessage.classList.remove('active');
        }, 5000);
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        var formData = new FormData(form);

        fetch(form.getAttribute('action'), {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(formData).toString()
        })
        .then(function(response) {
            if (response.ok) {
                showSuccess();
            }
        })
        .catch(function() {
            // Network error - silently fail, form data not sent
        });
    });
})();
