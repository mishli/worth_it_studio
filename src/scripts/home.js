/**
 * Home content
 */

(function() {
    // Initial fold animations (hero title lines animate in css)
    createRevealEffect('home-fold-image', {
        color: 'var(--color-second)',
        delay: 300,
        immediate: true
    });

    // Scroll-triggered title reveals
    createRevealEffect('home-content-why-title', {
        color: 'var(--color-body)',
        onCover: (id) => addBg(id, 'dark')
    });

    createRevealEffect('home-content-tailored-title', {
        color: 'var(--color-third)',
        onCover: (id) => addBg(id, 'yellow')
    });

    createRevealEffect('home-steps-title', {
        onComplete: (id) => addBg(id, 'blue')
    });

    // Stats count up once visible
    createCounterAnimation(document.querySelector('[data-stats]'));

    // Manifesto: words light up as the quote scrolls through the screen
    const manifesto = document.querySelector('[data-manifesto]');

    if (manifesto && !prefersReducedMotion) {
        const words = manifesto.querySelectorAll('.manifesto__word');

        addClass(manifesto, 'is-scrubbing');
        createScrollScene(manifesto, (rect, viewportHeight) => {
            const progress = clamp((viewportHeight * 0.8 - rect.top) / (viewportHeight * 0.55));
            const litCount = Math.round(progress * words.length);

            words.forEach((word, index) => word.classList.toggle('is-lit', index < litCount));
        });
    }

    // Parallax: images drift inside their frames
    document.querySelectorAll('[data-parallax]').forEach((image) => {
        createScrollScene(image.parentElement, (rect, viewportHeight) => {
            const progress = clamp((viewportHeight - rect.top) / (viewportHeight + rect.height));

            image.style.transform = `translate3d(0, ${(0.5 - progress) * 14}%, 0)`;
        });
    });

    // Gallery reel: on wide screens the section pins and the photos scroll sideways
    const reel = document.querySelector('[data-reel]');
    const reelTrack = document.querySelector('[data-reel-track]');
    const wideScreen = window.matchMedia('(min-width: 50em)');
    let reelDistance = 0;

    function layoutReel() {
        const isPinned = wideScreen.matches && !prefersReducedMotion;

        reel.classList.toggle('is-pinned', isPinned);
        reel.style.height = '';
        reelTrack.style.transform = '';

        if (!isPinned) return;

        reelDistance = Math.max(reelTrack.scrollWidth - window.innerWidth, 0);
        reel.style.height = `${reelDistance + window.innerHeight}px`;
    }

    if (reel && reelTrack) {
        layoutReel();
        window.addEventListener('resize', layoutReel);

        createScrollScene(reel, (rect, viewportHeight) => {
            if (!reel.classList.contains('is-pinned')) return;

            const progress = clamp(-rect.top / (rect.height - viewportHeight));
            const shift = progress * reelDistance * (isRtl ? 1 : -1);

            reelTrack.style.transform = `translate3d(${shift}px, 0, 0)`;
        });
    }

    // Steps timeline: the line fills as you scroll past it
    const timelineFill = document.querySelector('[data-timeline-fill]');

    if (timelineFill) {
        createScrollScene(timelineFill.closest('.timeline__body'), (rect, viewportHeight) => {
            const progress = clamp((viewportHeight * 0.6 - rect.top) / rect.height);

            timelineFill.style.setProperty('--timeline-progress', progress.toFixed(3));
        });
    }
})();
