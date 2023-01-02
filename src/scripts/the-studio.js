/**
 * the studio content
 */

(function() {
    // The Studio Main Title
    theStudioMainTitleElm = document.getElementById('the-studio-main-title'),    
    watcher_theStudio_main_title = scrollMonitor.create(theStudioMainTitleElm),
    theStudioMainTitle = new RevealFx(theStudioMainTitleElm, {
        isContentHidden: false,
        revealSettings : {
            bgcolor: getComputedStyle(theStudioMainTitleElm).getPropertyValue('--color-second'),
            onCover: function(contentEl, revealerEl) {
                contentEl.style.opacity = 1;
            },
            onComplete: function() {
                theStudioMainTitleElm.classList.add("title-bg","yellow");
            }
        }
    }),

    watcher_theStudio_main_title.enterViewport(function() {
        theStudioMainTitle.reveal();
        watcher_theStudio_main_title.destroy();
    });

    // The Studio Sub Title 1
    theStudioSubTitle1Elm = document.getElementById('the-studio-sub-1'),    
    watcher_theStudio_sub_title1 = scrollMonitor.create(theStudioSubTitle1Elm, -150),
    theStudioSubTitle1 = new RevealFx(theStudioSubTitle1Elm, {
        isContentHidden: false,
        revealSettings : {
            bgcolor: getComputedStyle(theStudioSubTitle1Elm).getPropertyValue('--color-main'),
            onCover: function(contentEl, revealerEl) {
                contentEl.style.opacity = 1;
            },
            onComplete: function() {
                theStudioSubTitle1Elm.classList.add("title-bg","blue");
            }
        }
    }),

    watcher_theStudio_sub_title1.enterViewport(function() {
        theStudioSubTitle1.reveal();
        watcher_theStudio_sub_title1.destroy();
    });    
})();