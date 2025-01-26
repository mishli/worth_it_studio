/**
 * my story content
 */

(function () {
    // Initial fold animations
    createRevealEffect('mystory-content-title-1', {
        color: 'var(--color-third)',
        immediate: true,
        onCover: (id) => addBg(id, 'yellow')
    });

    // Scroll-triggered animations
    createRevealEffect('mystory-content-title-2', {
        delay: 400,
        backgroundClass: 'blue',
        onComplete: (id) => addBg(id, 'blue')
    });

    createRevealEffect('mystory-content-title-3', {
        delay: 400,
        backgroundClass: 'blue',
        onComplete: (id) => addBg(id, 'blue')
    });
})();