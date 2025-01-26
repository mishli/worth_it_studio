const getCssVar = (el, name) => getComputedStyle(el).getPropertyValue(name);

// helpers for common operations
const addClass = (el, ...classes) => el.classList.add(...classes);
const removeClass = (el, ...classes) => el.classList.remove(...classes);
const addBg = (id, color, prefix = 'title-bg') => addClass(document.getElementById(id), prefix, color);

function createRevealEffect(elementId, options = {}) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    const {
        color = getCssVar(element, '--color-main'),
        direction = 'rl',
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

// make functions globally available
window.createRevealEffect = createRevealEffect;
window.addClass = addClass;
window.removeClass = removeClass;
window.addBg = addBg;