// init controller
var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 'onLeave'
    }
});

// change behaviour of controller to animate scroll instead of jump
controller.scrollTo(function (newpos) {
    TweenMax.to(window, 0.5, {scrollTo: {y: newpos}});
})

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
    .setPin($('#about'))
    .addIndicators({name: 'about'})
    .on('enter', (e) => {
        $('.active').toggleClass('active')
        this.updateURL('about');
    })
    .setClassToggle('a[href="#about"]', 'active')

var imgs = gsap.utils.toArray(".subtitle")
var next = 1.5; // time to change
function crossfade(){
  var action = gsap.timeline()
    .to(imgs,  {y:'-=36', duration:1})
    .to(imgs[0], {y:'+=144', duration:0}) // the first to the end
  imgs.push( imgs.shift() ); // the first (shift) to the end (push) from the array
  // recursive
  gsap.delayedCall(next, crossfade);
}
gsap.delayedCall(next, crossfade);
//
// EXPERIENCE
var experienceScene = new ScrollMagic.Scene({
    triggerElement: '#experience',
    duration: '300%'
})
    .addTo(controller)
    .setPin('#experience')
    .addIndicators({name: 'experience'})
    .on('enter', (e) => {
        $('.active').toggleClass('active')
        this.updateURL('experience');
    })
    .setClassToggle('a[href="#experience"]', 'active')

// let cards = gsap.utils.toArray(".stack-card");
// let stickDistance = 0;

// let firstCardST = ScrollTrigger.create({
//     trigger: cards[0],
//     start: "center center"
// });
// let lastCardST = ScrollTrigger.create({
//     trigger: cards[cards.length-1],
//     start: "center center"
// });
// cards.forEach((card, index) => {
//     var scale = 1 - (cards.length - index) * 0.025;
//     let scaleDown = gsap.to(card, {scale: scale, 'transform-origin': '"50% '+ (lastCardST.start + stickDistance) +'"' });

//     ScrollTrigger.create({
//         trigger: card,
//         start: "center center",
//         end: () => lastCardST.start + stickDistance,
//         pin: true,
//         markers: true,
//         pinSpacing: false,
//         ease: "none",
//         animation: scaleDown,
//         toggleActions: "restart none none reverse"
//     });
// });
//
// EDUCATION
var wipeAnimation = new TimelineMax()
    .fromTo("#poly-straight-pink", 1, {y:  "100%"}, {y: "0%", ease: "power4.out"})  // in from bottom
    .fromTo("#poly-straight-dark-blue", 1, {y: "100%"}, {y: "0%", ease: "power4.out"}); // in from bottom

var educationScene = new ScrollMagic.Scene({
    triggerElement: "#education",
    triggerHook: "onCenter",
    duration: "300%"
})
    .addTo(controller)
    .setPin("#education")
    .setTween(wipeAnimation)
    .addIndicators({name: 'education'}) // add indicators (requires plugin)
    .on('enter', (e) => {
        $('.active').toggleClass('active')
        this.updateURL('education');
    })
    .setClassToggle('a[href="#education"]', 'active');
//
// SKILLS
var skillsScene = new ScrollMagic.Scene({
    triggerElement: '#skills',
    duration: '100%'
})
    .addTo(controller)
    .setPin($('#skills'), {pushFollowers: false})
    .addIndicators({name: 'skills'})
    .on('enter', (e) => {
        $('.active').toggleClass('active')
        this.updateURL('skills');
    })
    .setClassToggle('a[href="#skills"]', 'active')

let skillElements = gsap.utils.toArray(".skills")

for (var i=0; i < skillElements.length; i++) { // create a scene for each element
    new ScrollMagic.Scene({
        triggerElement: skillElements[i], // y value not modified, so we can use element as trigger as well
        offset: -150,	// start a little later
        duration: 0
    })
    .setClassToggle(skillElements[i], "visible") // add class toggle
    .addIndicators({name: "skillCard " + (i+1) }) // add indicators (requires plugin)
    .addTo(controller);
}
//
// CONTACT
var contactScene = new ScrollMagic.Scene({
    triggerElement: '#contact',
    duration: '100%'
})
    .addTo(controller)
    .setPin($('#contact'), {pushFollowers: false})
    .addIndicators({name: 'contact'})
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