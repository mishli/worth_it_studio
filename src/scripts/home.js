/**
 * home content
 */

(function() {
    let homeFoldImageElm = document.getElementById('home-fold-image'),
    homeFoldTitleElm = document.getElementById('home-fold-title'),
    homeFoldSubtitleElm = document.getElementById('home-fold-subtitle'),
    homeFoldContentElm = document.getElementById('home-fold-content'),
    watcher_home_fold = scrollMonitor.create(homeFoldImageElm),	
    homeFoldImage = new RevealFx(homeFoldImageElm, {
        revealSettings : {
            bgcolor: getComputedStyle(homeFoldTitleElm).getPropertyValue('--color-second'),
            direction: 'rl',
            onCover: function(contentEl, revealerEl) {
                contentEl.style.opacity = 1;
            }
        }
    }),
    homeFoldTitle = new RevealFx(homeFoldTitleElm, {
        revealSettings : {
            bgcolor: getComputedStyle(homeFoldTitleElm).getPropertyValue('--color-third'),
            delay: 0,
            onCover: function(contentEl, revealerEl) {
                contentEl.style.opacity = 1;
            },
            onComplete: function() {
                homeFoldTitleElm.classList.add("title-bg","yellow");
                homeFoldSubtitleElm.classList.add("title-bg","yellow");
            }
        }
    }),
    homeFoldSubtitle = new RevealFx(homeFoldSubtitleElm, {
        revealSettings : {
            bgcolor: getComputedStyle(homeFoldTitleElm).getPropertyValue('--color-third'),
            delay: 150,
            onCover: function(contentEl, revealerEl) {
                contentEl.style.opacity = 1;
            }
        }
    });

    homeFoldContent = new RevealFx(homeFoldContentElm, {
        revealSettings : {
            bgcolor: 'transparent',
            duration: 300,
            delay: 800,
            onCover: function(contentEl, revealerEl) {
                contentEl.style.opacity = 1;
            }
        }
    });

    watcher_home_fold.enterViewport(function() {
        homeFoldImage.reveal();
        homeFoldTitle.reveal();
        homeFoldSubtitle.reveal();
        homeFoldContent.reveal();        
        watcher_home_fold.destroy();
    });

    // Home Why Title
    homeWhyTitleElm = document.getElementById('home-content-why-title'),
    watcher_why_title = scrollMonitor.create(homeWhyTitleElm, -150),
    whyTitle = new RevealFx(homeWhyTitleElm, {
        isContentHidden: false,
        revealSettings : {
            bgcolor: getComputedStyle(homeFoldTitleElm).getPropertyValue('--color-main'),
            onCover: function(contentEl, revealerEl) {
                contentEl.style.opacity = 1;
            },
            onComplete: function() {
                homeWhyTitleElm.classList.add("title-bg","blue");
            }
        }
    }),

    watcher_why_title.enterViewport(function() {
        whyTitle.reveal();
        watcher_why_title.destroy();
    });


    // Home Tailored Title
    homeTailoredTitleElm = document.getElementById('home-content-tailored-title'),
    watcher_tailoered_title = scrollMonitor.create(homeTailoredTitleElm, -150),
    tailoredTitle = new RevealFx(homeTailoredTitleElm, {
        isContentHidden: false,
        revealSettings : {
            bgcolor: getComputedStyle(homeFoldTitleElm).getPropertyValue('--color-main'),
            onCover: function(contentEl, revealerEl) {
                contentEl.style.opacity = 1;
            },
            onComplete: function() {
                homeTailoredTitleElm.classList.add("title-bg","blue");
            }
        }
    }),

    watcher_tailoered_title.enterViewport(function() {
        tailoredTitle.reveal();
        watcher_tailoered_title.destroy();
    });
})();