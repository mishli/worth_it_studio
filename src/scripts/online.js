/**
 * Online content
 */

(function() {
    // Online Main Title
    onlineMainTitleElm = document.getElementById('online-main-title'),
    onlineMainTitle = new RevealFx(onlineMainTitleElm, {
        isContentHidden: false,
        revealSettings : {
            bgcolor: getComputedStyle(onlineMainTitleElm).getPropertyValue('--color-third'),
            onCover: function(contentEl, revealerEl) {
                contentEl.style.opacity = 1;
                onlineMainTitleElm.classList.add("title-bg","yellow");
            }
        }
    }),
    
    onlineMainTitle.reveal();

    // Online Sub Title 1
    onlineSubTitle1Elm = document.getElementById('online-sub-1'),    
    watcher_online_sub_title1 = scrollMonitor.create(onlineSubTitle1Elm, -150),
    onlineSubTitle1 = new RevealFx(onlineSubTitle1Elm, {
        isContentHidden: false,
        revealSettings : {
            bgcolor: getComputedStyle(onlineSubTitle1Elm).getPropertyValue('--color-main'),
            onCover: function(contentEl, revealerEl) {
                contentEl.style.opacity = 1;
            },
            onComplete: function() {
                onlineSubTitle1Elm.classList.add("title-bg","blue");
            }
        }
    }),

    watcher_online_sub_title1.enterViewport(function() {
        onlineSubTitle1.reveal();
        watcher_online_sub_title1.destroy();
    });

    // Online Sub Title 2
    onlineSubTitle2Elm = document.getElementById('online-sub-2'),    
    watcher_online_sub_title2 = scrollMonitor.create(onlineSubTitle2Elm, -150),
    onlineSubTitle2 = new RevealFx(onlineSubTitle2Elm, {
        isContentHidden: false,
        revealSettings : {
            bgcolor: getComputedStyle(onlineSubTitle2Elm).getPropertyValue('--color-main'),
            onCover: function(contentEl, revealerEl) {
                contentEl.style.opacity = 1;
            },
            onComplete: function() {
                onlineSubTitle2Elm.classList.add("title-bg","blue");
            }
        }
    }),

    watcher_online_sub_title2.enterViewport(function() {
        onlineSubTitle2.reveal();
        watcher_online_sub_title2.destroy();
    });

    // Online Sub Title 3
    onlineSubTitle3Elm = document.getElementById('online-sub-3'),    
    watcher_online_sub_title3 = scrollMonitor.create(onlineSubTitle3Elm, -150),
    onlineSubTitle3 = new RevealFx(onlineSubTitle3Elm, {
        isContentHidden: false,
        revealSettings : {
            bgcolor: getComputedStyle(onlineSubTitle3Elm).getPropertyValue('--color-main'),
            onCover: function(contentEl, revealerEl) {
                contentEl.style.opacity = 1;
            },
            onComplete: function() {
                onlineSubTitle3Elm.classList.add("title-bg","blue");
            }
        }
    }),

    watcher_online_sub_title3.enterViewport(function() {
        onlineSubTitle3.reveal();
        watcher_online_sub_title3.destroy();
    });
})();