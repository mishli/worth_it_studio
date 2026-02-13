/**
 * Home content
 */

(function() {
    // Initial fold animations
    createRevealEffect('home-fold-image', {
        color: 'var(--color-second)',
        immediate: true
    });

    createRevealEffect('home-fold-title', {
        color: 'var(--color-third)',
        immediate: true,
        onCover: (id) => {
            addBg(id, 'yellow');
            addBg('home-fold-subtitle', 'yellow');
        }
    });

    createRevealEffect('home-fold-subtitle', {
        color: 'var(--color-third)',
        delay: 150,
        immediate: true
    });

    createRevealEffect('home-fold-content', {
        color: 'transparent',
        duration: 300,
        delay: 470,
        immediate: true
    });

    // Scroll-triggered animations
    createRevealEffect('home-content-why-title', {
        onComplete: (id) => addBg(id, 'blue')
    });

    createRevealEffect('home-content-tailored-title', {
        onComplete: (id) => addBg(id, 'blue')
    });
})();