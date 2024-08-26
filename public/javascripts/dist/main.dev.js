"use strict";

var _this = void 0;

var controller = new ScrollMagic.Controller({
  globalSceneOptions: {
    triggerHook: "onLeave"
  }
}); // TODO: Loop each section creation & override defaults for each unique modifier

var sections = gsap.utils.toArray("section");
var currentSection = sections[0]; // stretch out the body height according to however many sections there are.

gsap.set("body", {
  height: sections.length * 100 + "%"
}); // change behaviour of controller to animate scroll instead of jump

controller.scrollTo(function (newpos) {
  TweenMax.to(window, 0.5, {
    scrollTo: {
      y: newpos
    }
  });
});

function updateURL(id) {
  if (history.pushState) {
    history.pushState(null, null, "#" + id);
  }
} //  bind scroll to anchor links


$(document).on("click", "a[href^='#']", function (e) {
  // Set active class to nav links
  $(".active").toggleClass("active");
  $(this).toggleClass("active");
  var id = $(this).attr("href");

  if ($(id).length > 0) {
    e.preventDefault(); // trigger scroll

    controller.scrollTo(id);

    if (window.history && window.history.pushState) {
      history.pushState(null, null, id);
    }
  }
}); // Pass click event on contact cards to the child link

$(".contact").click(function (e) {
  e.currentTarget.lastChild.click();
}); // ----- SCENE CREATIONS -----
//
// ABOUT

var aboutScene = new ScrollMagic.Scene({
  triggerElement: "#about",
  duration: "100%"
}).addTo(controller).setPin("#about").addIndicators({
  name: "about"
}).on("enter", function () {
  $(".active").toggleClass("active");

  _this.updateURL("about");
}).setClassToggle('a[href="#about"]', "active"); // Subtitle vertical marquee w/ delay

var imgs = gsap.utils.toArray(".subtitle");
var next = 1.5; // time to change

function crossfade() {
  var action = gsap.timeline().to(imgs, {
    y: "-=36",
    duration: 1
  }).to(imgs[0], {
    y: "+=144",
    duration: 0
  }); // the first to the end

  imgs.push(imgs.shift()); // the first (shift) to the end (push) from the array
  // recursive

  gsap.delayedCall(next, crossfade);
}

gsap.delayedCall(next, crossfade); //
// EXPERIENCE

var experienceScene = new ScrollMagic.Scene({
  triggerElement: "#experience",
  duration: "200%"
}).addTo(controller).setPin("#experience").addIndicators({
  name: "experience"
}).on("enter", function () {
  $(".active").toggleClass("active");

  _this.updateURL("experience");
}).setClassToggle('a[href="#experience"]', "active"); // Stack of experience cards w/ Flip

var stackContainer = document.querySelector(".stack-container");
var stackCards = gsap.utils.toArray(".stack-card"); //   .fromTo('#SFSE', , {y:'0', x:'0', opacity: 1}, {y:'20px', x:'-20px', opacity: 0})
// for(let i = 0; i < stackCards.length; i++) {
// }
// function moveCard() {
// 	const lastCard = slider.querySelector(".stack-card:last-child");
// 	if (stackContainer && lastCard) {
// 		lastCard.style.display = "none"; // Hide the last item
// 		const newCard = document.createElement("div");
// 		newCard.className = lastCard.className; // Set the same class name
// 		newCard.textContent = lastCard.textContent; // Copy the text content
// 		stackContainer.insertBefore(newCard, stackContainer.firstChild); // Insert the new item at the beginning of the slider
// 	}
// }
// let state = Flip.getState(".stack-card");
// moveCard();
// Flip.from(state, {
// 	targets: ".stack-card",
// 	ease: "sine.inOut",
// 	absolute: true,
// 	onEnter: (elements) => {
// 		return gsap.from(elements, {
// 			yPercent: 20,
// 			opacity: 0,
// 			ease: "sine.out",
// 		});
// 	},
// 	onLeave: (element) => {
// 		return gsap.to(element, {
// 			yPercent: 20,
// 			xPercent: -20,
// 			transformOrigin: "bottom left",
// 			opacity: 0,
// 			ease: "sine.out",
// 			onComplete() {
// 				console.log("logging", element[0]);
// 				stackContainer.removeChild(element[0]);
// 			},
// 		});
// 	},
// });
// EDUCATION

var educationTimeline = new TimelineMax().fromTo("#poly-straight-pink", 1, {
  y: "100%",
  opacity: 0
}, {
  y: "0%",
  opacity: 1,
  ease: "power4.out"
}) // in from bottom
.fromTo("#poly-straight-dark-blue", 1, {
  y: "100%",
  opacity: 0
}, {
  y: "0%",
  opacity: 1,
  ease: "power4.out"
}); // in from bottom

var educationScene = new ScrollMagic.Scene({
  triggerElement: "#education",
  triggerHook: "onCenter",
  duration: "200%"
}).addTo(controller).setPin("#education").setTween(educationTimeline).addIndicators({
  name: "education"
}) // add indicators (requires plugin)
.on("enter", function () {
  $(".active").toggleClass("active");

  _this.updateURL("education");
}).setClassToggle('a[href="#education"]', "active"); //
// SKILLS

var skillsTimeline = new TimelineMax().fromTo("#Languages", 0.3, {
  y: "100px",
  opacity: 0
}, {
  y: "0px",
  opacity: 1,
  ease: "power3.InOut"
}).fromTo("#Frameworks", 0.3, {
  y: "100px",
  opacity: 0
}, {
  y: "0px",
  opacity: 1,
  ease: "power3.InOut"
}).fromTo("#Services", 0.3, {
  y: "100px",
  opacity: 0
}, {
  y: "0px",
  opacity: 1,
  ease: "power3.InOut"
});
var skillsScene = new ScrollMagic.Scene({
  triggerElement: "#skills",
  triggerHook: "onCenter",
  duration: "100%"
}).addTo(controller).setPin("#skills").setTween(skillsTimeline).addIndicators({
  name: "skills"
}).on("enter", function () {
  $(".active").toggleClass("active");

  _this.updateURL("skills");
}).setClassToggle('a[href="#skills"]', "active"); //
// CONTACT

var contactTimeline = new TimelineMax().fromTo("#Phone", 0.2, {
  x: "100px",
  opacity: 0
}, {
  x: "0px",
  opacity: 1,
  ease: "power3.InOut"
}).fromTo("#Github", 0.2, {
  x: "100px",
  opacity: 0
}, {
  x: "0px",
  opacity: 1,
  ease: "power3.InOut"
}).fromTo("#Linkedin", 0.2, {
  x: "100px",
  opacity: 0
}, {
  x: "0px",
  opacity: 1,
  ease: "power3.InOut"
}).fromTo("#Email", 0.2, {
  x: "100px",
  opacity: 0
}, {
  x: "0px",
  opacity: 1,
  ease: "power3.InOut"
}).fromTo("#Resume", 0.2, {
  x: "100px",
  opacity: 0
}, {
  x: "0px",
  opacity: 1,
  ease: "power3.InOut"
});
var contactScene = new ScrollMagic.Scene({
  triggerElement: "#contact",
  duration: "100%"
}).addTo(controller).setPin("#contact").setTween(contactTimeline).addIndicators({
  name: "contact"
}).on("enter", function () {
  $(".active").toggleClass("active");

  _this.updateURL("contact");
}).setClassToggle('a[href="#contact"]', "active");