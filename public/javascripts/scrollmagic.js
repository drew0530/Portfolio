// init controller
var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 'onLeave',
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

// -- SCENE CREATION --
// ABOUT
var aboutScene = new ScrollMagic.Scene({
    triggerElement: '#about'
})
    .addTo(controller)
    .setTween(tween)
    .setPin($('#about'), {pushFollowers: false})
    .addIndicators()
    .setClassToggle('a[href="#about"]', 'active')
    .on('enter', (e) => {
        console.log('test')
        console.log(e)
        this.updateURL('about');
    })

// EXPERIENCE
var experienceScene = new ScrollMagic.Scene({
    triggerElement: '#experience'
})
.addTo(controller)
.setTween(tween)
.setPin($('#experience'), {pushFollowers: false})
.setClassToggle('a[href="#experience"]', 'active')
.addIndicators()
.on('enter', (e) => {
    this.updateURL('experience');
})

// WORK
var workScene = new ScrollMagic.Scene({
    triggerElement: '#work'
})
.addTo(controller)
.setTween(tween)
.setPin($('#work'), {pushFollowers: false})
.setClassToggle('a[href="#work"]', 'active')
.addIndicators()
.on('enter', (e) => {
    this.updateURL('work');
})

// SKILLS
var skillsScene = new ScrollMagic.Scene({
    triggerElement: '#skills'
})
.addTo(controller)
.setTween(tween)
.setPin($('#skills'), {pushFollowers: false})
.setClassToggle('a[href="#skills"]', 'active')
.addIndicators()
.on('enter', (e) => {
    this.updateURL('skills');
})

// CONTACT
var contactScene = new ScrollMagic.Scene({
    triggerElement: '#contact'
})
.addTo(controller)
.setTween(tween)
.setPin($('#contact'), {pushFollowers: false})
.setClassToggle('a[href="#contact"]', 'active')
.addIndicators()
.on('enter', (e) => {
    this.updateURL('contact');
})

console.log(contactScene)


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
