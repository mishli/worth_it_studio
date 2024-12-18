/**
 * Pricing content
 */

(function() {
    // Pricing Main Title
    pricingMainTitleElm = document.getElementById('pricing-main-title'),
    pricingMainTitle = new RevealFx(pricingMainTitleElm, {
        isContentHidden: false,
        revealSettings : {
            bgcolor: getComputedStyle(pricingMainTitleElm).getPropertyValue('--color-third'),
            onCover: function(contentEl, revealerEl) {
                contentEl.style.opacity = 1;
                pricingMainTitleElm.classList.add("title-bg","yellow");
            }
        }
    }),
    
    pricingMainTitle.reveal();

    // Pricing Sub Title 1
    pricingSubTitle1Elm = document.getElementById('pricing-sub-1'),    
    watcher_pricing_sub_title1 = scrollMonitor.create(pricingSubTitle1Elm, -150),
    pricingSubTitle1 = new RevealFx(pricingSubTitle1Elm, {
        isContentHidden: false,
        revealSettings : {
            bgcolor: getComputedStyle(pricingSubTitle1Elm).getPropertyValue('--color-second'),
            onCover: function(contentEl, revealerEl) {
                contentEl.style.opacity = 1;
            },
            onComplete: function() {
                pricingSubTitle1Elm.classList.add("title-bg","yellow");
            }
        }
    }),

    watcher_pricing_sub_title1.enterViewport(function() {
        pricingSubTitle1.reveal();
        watcher_pricing_sub_title1.destroy();
    });    
})();