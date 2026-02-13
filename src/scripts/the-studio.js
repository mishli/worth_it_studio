/**
 * The Studio content
 */

(function () {
    // Initial fold animations
    createRevealEffect('the-studio-main-title', {
        color: 'var(--color-third)',
        immediate: true,
        onCover: (id) => addBg(id, 'yellow')
    });

    // Scroll-triggered animations
    createRevealEffect('the-studio-sub-1', {
        onComplete: (id) => addBg(id, 'blue')
    });

    createRevealEffect('the-studio-sub-2', {
        delay: 400,
        onComplete: (id) => addBg(id, 'blue')
    });
})();
