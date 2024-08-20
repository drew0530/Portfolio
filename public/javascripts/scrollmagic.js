// init controller
var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 'onCenter'
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
    triggerElement: '#about',
    duration: '100%'
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
    triggerElement: '#experience',
    duration: '100%'
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

let cards = gsap.utils.toArray(".stackCard");

let stickDistance = 0;

let firstCardST = ScrollTrigger.create({
    trigger: cards[0],
    start: "center center"
});

let lastCardST = ScrollTrigger.create({
    trigger: cards[cards.length-1],
    start: "center center"
});

cards.forEach((card, index) => {

    var scale = 1 - (cards.length - index) * 0.025;
    let scaleDown = gsap.to(card, {scale: scale, 'transform-origin': '"50% '+ (lastCardST.start + stickDistance) +'"' });

    ScrollTrigger.create({
    trigger: card,
    start: "center center",
    end: () => lastCardST.start + stickDistance,
    pin: true,
    markers: true,
    pinSpacing: false,
    ease: "none",
    animation: scaleDown,
    toggleActions: "restart none none reverse"
    });
});
//
// EDUCATION
var educationScene = new ScrollMagic.Scene({
    triggerElement: '#education',
    duration: '100%'
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
    triggerElement: '#skills',
    duration: '100%'
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

var skillsRevealElements = document.getElementsByClassName("skills");
for (var i=0; i < skillsRevealElements.length; i++) { // create a scene for each element
    new ScrollMagic.Scene({
        triggerElement: skillsRevealElements[i], // y value not modified, so we can use element as trigger as well
        offset: 0,	// start a little later
        duration: 0
    })
    .setClassToggle(skillsRevealElements[i], "visible") // add class toggle
    .addIndicators({name: "skills" + (i+1) }) // add indicators (requires plugin)
    .addTo(controller);
}
//
// CONTACT
var contactScene = new ScrollMagic.Scene({
    triggerElement: '#contact',
    duration: '100%'
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
        offset: -150,	// start a little later
        duration: 0
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

// Pass click event on contact cards to the child link
$(".contact").click(function(e) {
    e.currentTarget.lastChild.click();
})