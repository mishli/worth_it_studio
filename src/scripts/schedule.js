/**
 * Schedule content
 */

(function() {
    // Schedule Main Title
    scheduleMainTitleElm = document.getElementById('schedule-main-title'),
    scheduleMainTitle = new RevealFx(scheduleMainTitleElm, {
        isContentHidden: false,
        revealSettings : {
            bgcolor: getComputedStyle(scheduleMainTitleElm).getPropertyValue('--color-third'),
            onCover: function(contentEl, revealerEl) {
                contentEl.style.opacity = 1;
                scheduleMainTitleElm.classList.add("title-bg","yellow");
            }
        }
    }),
    scheduleMainTitle.reveal();

    // The Studio Sub Title 1
    scheduleSubTitle1Elm = document.getElementById('schedule-sub-1'),    
    watcher_schedule_sub_title1 = scrollMonitor.create(scheduleSubTitle1Elm, -150),
    scheduleSubTitle1 = new RevealFx(scheduleSubTitle1Elm, {
        isContentHidden: false,
        revealSettings : {
            bgcolor: getComputedStyle(scheduleSubTitle1Elm).getPropertyValue('--color-main'),
            onCover: function(contentEl, revealerEl) {
                contentEl.style.opacity = 1;
            },
            onComplete: function() {
                scheduleSubTitle1Elm.classList.add("title-bg","blue");
            }
        }
    }),

    watcher_schedule_sub_title1.enterViewport(function() {
        scheduleSubTitle1.reveal();
        watcher_schedule_sub_title1.destroy();
    });    
})();