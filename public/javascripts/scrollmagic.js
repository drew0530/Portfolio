// init controller
var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 'onLeave',
        duration: "100%" // this works just fine with duration 0 as well
    }
});

// build tween
var tween = TweenMax.from("#animate", 0.5, {autoAlpha: 0, scale: 0.7});

// get all slides
var slides = $(".panel");

function updateURL(id) {
    if (window.history && window.history.pushState) {
        history.pushState("", document.title, id);
    }
}
// create scene for every slide
for (var i=0; i<slides.length; i++) {
    new ScrollMagic.Scene({
        triggerElement: slides[i]
    })
    .addTo(controller)
    .setTween(tween)
    .setPin(slides[i], {pushFollowers: false})
    .addIndicators() // add indicators (requires plugin)
    .on('leave', function(e) {
        console.log(e)
        console.log(slides[i])
    })
}

// change behaviour of controller to animate scroll instead of jump
controller.scrollTo(function (newpos) {
    TweenMax.to(window, 0.5, {scrollTo: {y: newpos}});
})

//  bind scroll to anchor links
$(document).on("click", "a[href^='#']", function (e) {
    // Set active class to nav links
    $('.active').toggleClass('active')
    $(this).toggleClass('active')

    var id = $(this).attr("href");
    if ($(id).length > 0) {
        e.preventDefault();

        // trigger scroll
        controller.scrollTo(id);

        if (window.history && window.history.pushState) {
            history.pushState("", document.title, id);
        }
    }
});
