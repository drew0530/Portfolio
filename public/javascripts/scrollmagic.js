// init controller
var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 'onCenter',
        duration: "100%" // this works just fine with duration 0 as well
    }
});

// build tween
var tween = TweenMax.from("#animate", 0.5, {autoAlpha: 0, scale: 0.7});

function updateURL(id) {
    if(history.pushState) {
        history.pushState(null, null, '#'+id);
    }
}

// ----- SCENE CREATIONS -----
//
// ABOUT
var aboutScene = new ScrollMagic.Scene({
    triggerElement: '#about'
})
    .addTo(controller)
    .setTween(tween)
    .setPin($('#about'), {pushFollowers: false})
    .addIndicators()
    .on('enter', (e) => {
        $('.active').toggleClass('active')
        this.updateURL('about');
    })
    .setClassToggle('a[href="#about"]', 'active')
//
// EXPERIENCE
var experienceScene = new ScrollMagic.Scene({
    triggerElement: '#experience'
})
    .addTo(controller)
    .setTween(tween)
    .setPin($('#experience'), {pushFollowers: false})
    .addIndicators()
    .on('enter', (e) => {
        $('.active').toggleClass('active')
        this.updateURL('experience');
    })
    .setClassToggle('a[href="#experience"]', 'active')

var experienceRevealElements = document.getElementsByClassName("exp");
for (var i=0; i < experienceRevealElements.length; i++) { // create a scene for each element
    new ScrollMagic.Scene({
        triggerElement: experienceRevealElements[i], // y value not modified, so we can use element as trigger as well
        offset: -200,	// start a little later
        triggerHook: 0
    })
    .setClassToggle(experienceRevealElements[i], "visible") // add class toggle
    .addIndicators({name: "exp" + (i+1) }) // add indicators (requires plugin)
    .addTo(controller);
}
//
// EDUCATION
var educationScene = new ScrollMagic.Scene({
    triggerElement: '#education'
})
    .addTo(controller)
    .setTween(tween)
    .setPin($('#education'), {pushFollowers: false})
    .addIndicators()
    .on('enter', (e) => {
        $('.active').toggleClass('active')
        this.updateURL('education');
    })
    .setClassToggle('a[href="#education"]', 'active')
//
// SKILLS
var skillsScene = new ScrollMagic.Scene({
    triggerElement: '#skills'
})
    .addTo(controller)
    .setTween(tween)
    .setPin($('#skills'), {pushFollowers: false})
    .addIndicators()
    .on('enter', (e) => {
        $('.active').toggleClass('active')
        this.updateURL('skills');
    })
    .setClassToggle('a[href="#skills"]', 'active')
//
// CONTACT
var contactScene = new ScrollMagic.Scene({
    triggerElement: '#contact'
})
    .addTo(controller)
    .setTween(tween)
    .setPin($('#contact'), {pushFollowers: false})
    .addIndicators()
    .on('enter', (e) => {
        $('.active').toggleClass('active')
        this.updateURL('contact');
    })
    .setClassToggle('a[href="#contact"]', 'active')

var contactRevealElements = document.getElementsByClassName("contact");
for (var i=0; i < contactRevealElements.length; i++) { // create a scene for each element
    new ScrollMagic.Scene({
        triggerElement: contactRevealElements[i], // y value not modified, so we can use element as trigger as well
        offset: -200,	// start a little later
        triggerHook: 0
    })
    .setClassToggle(contactRevealElements[i], "visible") // add class toggle
    .addIndicators({name: "contact" + (i+1) }) // add indicators (requires plugin)
    .addTo(controller);
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
            history.pushState(null, null, id);
        }
    }
});
