/**
 * Online content
 */

(function() {
    // Initial fold animations
    createRevealEffect('online-main-title', {
        color: 'var(--color-third)',
        immediate: true,
        onCover: (id) => addBg(id, 'yellow')
    });

    // Scroll-triggered animations
    createRevealEffect('online-sub-1', {
        onComplete: (id) => addBg(id, 'blue')
    });

    createRevealEffect('online-sub-2', {
        onComplete: (id) => addBg(id, 'blue')
    });

    createRevealEffect('online-sub-3', {
        onComplete: (id) => addBg(id, 'blue')
    });
})();