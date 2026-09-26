const getCssVar = (el, name) => getComputedStyle(el).getPropertyValue(name);

// helpers for common operations
const addClass = (el, ...classes) => el.classList.add(...classes);
const removeClass = (el, ...classes) => el.classList.remove(...classes);
const addBg = (id, color, prefix = 'title-bg') => addClass(document.getElementById(id), prefix, color);

var isRtl = document.documentElement.dir === 'rtl';
var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function createRevealEffect(elementId, options = {}) {
    const element = document.getElementById(elementId);
    if (!element) return;

    const {
        color = getCssVar(element, '--color-main'),
        direction = isRtl ? 'rl' : 'lr',
        duration = 500,
        delay = 0,
        immediate = false,
        offset = -150,
        onCover = () => {},
        onComplete = () => {}
    } = options;

    const reveal = new RevealFx(element, {
        isContentHidden: false,
        revealSettings: {
            bgcolor: color,
            direction,
            duration,
            delay,
            onCover: (contentEl) => {
                contentEl.style.opacity = 1;
                onCover(elementId, contentEl);
            },
            onComplete: () => onComplete(elementId)
        }
    });

    if (immediate) {
        reveal.reveal();
    } else {
        const watcher = scrollMonitor.create(element, offset);
        watcher.enterViewport(() => {
            reveal.reveal();
            watcher.destroy();
        });
    }

    return reveal;
}

// fade elements in as they scroll into view (styles in _animations.scss)
function createScrollAnimations(selector, options = {}) {
    if (prefersReducedMotion) return;

    const { offset = -80 } = options;

    document.querySelectorAll(selector).forEach((element) => {
        addClass(element, 'animate-in');

        const watcher = scrollMonitor.create(element, offset);
        watcher.enterViewport(() => {
            addClass(element, 'is-visible');
            watcher.destroy();
        });
    });
}

// count [data-counter] numbers inside container up from data-counter-from (default 0)
// once the container scrolls into view
function createCounterAnimation(container, options = {}) {
    if (!container || prefersReducedMotion) return;

    const { duration = 1800, offset = -80 } = options;
    const counters = container.querySelectorAll('[data-counter]');

    // start from the initial value so the numbers don't jump back when counting starts
    counters.forEach((el) => {
        el.textContent = el.dataset.counterFrom || 0;
    });

    const watcher = scrollMonitor.create(container, offset);
    watcher.enterViewport(() => {
        counters.forEach((el) => {
            const counter = { value: parseInt(el.dataset.counterFrom || 0, 10) };

            anime({
                targets: counter,
                value: parseInt(el.dataset.counter, 10),
                round: 1,
                duration,
                easing: 'easeOutExpo',
                update: () => {
                    el.textContent = counter.value;
                }
            });
        });
        watcher.destroy();
    });
}

// scroll-linked effects: update(rect, viewportHeight) runs once per frame while scrolling
// or resizing, for every registered element (one shared listener for all scenes)
const scrollScenes = [];
let scenesTicking = false;

function runScrollScenes() {
    const viewportHeight = window.innerHeight;

    scrollScenes.forEach(({ element, update }) => update(element.getBoundingClientRect(), viewportHeight));
    scenesTicking = false;
}

function requestScrollScenes() {
    if (!scenesTicking) {
        window.requestAnimationFrame(runScrollScenes);
        scenesTicking = true;
    }
}

function createScrollScene(element, update) {
    if (!element || prefersReducedMotion) return;

    if (!scrollScenes.length) {
        window.addEventListener('scroll', requestScrollScenes, { passive: true });
        window.addEventListener('resize', requestScrollScenes);
    }

    scrollScenes.push({ element, update });
    requestScrollScenes();
}

const clamp = (value, min = 0, max = 1) => Math.min(Math.max(value, min), max);

// make functions globally available
window.createRevealEffect = createRevealEffect;
window.addClass = addClass;
window.removeClass = removeClass;
window.addBg = addBg;
window.createScrollAnimations = createScrollAnimations;
window.createCounterAnimation = createCounterAnimation;
window.createScrollScene = createScrollScene;
window.clamp = clamp;
