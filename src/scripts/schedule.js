/**
 * Schedule content
 */

(function () {
    // Initial fold animations
    createRevealEffect('schedule-main-title', {
        color: 'var(--color-third)',
        immediate: true,
        onCover: (id) => addBg(id, 'yellow')
    });

    // Scroll-triggered animations
    createRevealEffect('schedule-sub-1', {
        onComplete: (id) => addBg(id, 'blue')
    });
})();