/**
 * my story content
 */

(function() {
    // My Story Title 1
    mystoryTitle1Elm = document.getElementById('mystory-content-title-1'),
    mystoryTitle1 = new RevealFx(mystoryTitle1Elm, {
        isContentHidden: false,
        revealSettings : {
            bgcolor: getComputedStyle(mystoryTitle1Elm).getPropertyValue('--color-third'),
            onCover: function(contentEl, revealerEl) {
                contentEl.style.opacity = 1;
                mystoryTitle1Elm.classList.add("title-bg","yellow");
            },
            onComplete: function() {
                
            }
        }
    }),

    mystoryTitle1.reveal();

    // Title 2
    mystoryTitle2Elm = document.getElementById('mystory-content-title-2'),
    watcher_mystory_title2 = scrollMonitor.create(mystoryTitle2Elm, -150),
    mystoryTitle2 = new RevealFx(mystoryTitle2Elm, {
        isContentHidden: false,
        revealSettings : {
            bgcolor: getComputedStyle(mystoryTitle2Elm).getPropertyValue('--color-main'),
            delay: 400,
            onCover: function(contentEl, revealerEl) {
                contentEl.style.opacity = 1;                
            },
            onComplete: function() {
                mystoryTitle2Elm.classList.add("title-bg","blue");
            }
        }
    }),

    watcher_mystory_title2.enterViewport(function() {
        mystoryTitle2.reveal();
        watcher_mystory_title2.destroy();
    });

    // Title 2
    mystoryTitle3Elm = document.getElementById('mystory-content-title-3'),
    watcher_mystory_title3 = scrollMonitor.create(mystoryTitle3Elm, -150),
    mystoryTitle3 = new RevealFx(mystoryTitle3Elm, {
        isContentHidden: false,
        revealSettings : {
            bgcolor: getComputedStyle(mystoryTitle3Elm).getPropertyValue('--color-main'),
            delay: 400,
            onCover: function(contentEl, revealerEl) {
                contentEl.style.opacity = 1;
            },
            onComplete: function() {
                mystoryTitle3Elm.classList.add("title-bg","blue");
            }
        }
    }),

    watcher_mystory_title3.enterViewport(function() {
        mystoryTitle3.reveal();
        watcher_mystory_title3.destroy();
    });
})();