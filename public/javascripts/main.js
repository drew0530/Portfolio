const controller = new ScrollMagic.Controller({
	globalSceneOptions: {
		triggerHook: "onLeave",
	},
});
// TODO: Loop each section creation & override defaults for each unique modifier
const sections = gsap.utils.toArray("section");
let currentSection = sections[0];

// stretch out the body height according to however many sections there are.
gsap.set("body", { height: sections.length * 100 + "%" });

// change behaviour of controller to animate scroll instead of jump
controller.scrollTo(function (newpos) {
	TweenMax.to(window, 0.5, { scrollTo: { y: newpos } });
});

function updateURL(id) {
	if (history.pushState) {
		history.pushState(null, null, "#" + id);
	}
}

//  bind scroll to anchor links
$(document).on("click", "a[href^='#']", function (e) {
	// Set active class to nav links
	$(".active").toggleClass("active");
	$(this).toggleClass("active");

	const id = $(this).attr("href");
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
$(".contact").click(function (e) {
	e.currentTarget.lastChild.click();
});
// ----- SCENE CREATIONS -----
//
// ABOUT
const aboutTimeline = new TimelineMax()
    .add("shiftUp")
    .fromTo(['#name', '.subtitle-container'], {y: 0}, {y: -50, ease: 'power1.InOut'}, "shiftUp")
    .fromTo('.summary', {opacity: 0, y: 100}, {opacity: 1, y: 0, ease: 'power1.InOut', delay: 0.1}, "shiftUp")
    // .to('#about .panel-container', {scale: 0.5, opacity: 0})
var aboutScene = new ScrollMagic.Scene({
	triggerElement: "#about",
	duration: "100%",
})
	.addTo(controller)
	.setPin("#about")
    .setTween(aboutTimeline)
	.addIndicators({ name: "about" })
	.on("enter", () => {
		$(".active").toggleClass("active");
		this.updateURL("about");
	})
	.setClassToggle('a[href="#about"]', "active");

// Subtitle vertical marquee w/ delay
const imgs = gsap.utils.toArray(".subtitle");
const next = 1.5; // time to change
function crossfade() {
	const action = gsap
		.timeline()
		.to(imgs, { y: "-=36", duration: 1 })
		.to(imgs[0], { y: "+=144", duration: 0 }); // the first to the end
	imgs.push(imgs.shift()); // the first (shift) to the end (push) from the array
	// recursive
	gsap.delayedCall(next, crossfade);
}
gsap.delayedCall(next, crossfade);
//
// EXPERIENCE
// Stack of experience cards w/ Flip
const experienceTimeline = new TimelineMax()
    .add("SFSEMove")
    .fromTo('#SFSE', {x: '0px', y: '0px', opacity: 1}, {x: '-40px', y: '40px', opacity: 0}, "SFSEMove")
    .fromTo('.stack-card:not(#SFSE)', {x: '0px', y: '0px'},  {x: '-20px', y: '20px'}, "SFSEMove")
    .add("FSEMove")
    .to('#FSE', {x: '-60px', y: '60px', opacity: 0}, "FSEMove")
    .to('.stack-card:not(#FSE)', {x: '-40px', y: '40px'}, "FSEMove")
    .add("JFSEMove")
    .to('#JFSE', {x: '-80px', y: '80px', opacity: 0}, "JFSEMove")
    .to('.stack-card:not(#JFSE)', {x: '-60px', y: '60px'}, 'JFSEMove')
    .add("QAEMove")
    .to('#QAE', {x: '-100px', y: '100px', opacity: 0}, "QAEMove")
    .to('.stack-card:not(#QAE)', {x: '-80px', y: '80px'}, 'QAEMove')

const experienceScene = new ScrollMagic.Scene({
	triggerElement: "#experience",
	duration: "200%",
})
	.addTo(controller)
	.setPin("#experience")
    .setTween(experienceTimeline)
	.addIndicators({ name: "experience" })
	.on("enter", () => {
		$(".active").toggleClass("active");
		this.updateURL("experience");
	})
	.setClassToggle('a[href="#experience"]', "active");

// EDUCATION
const educationTimeline = new TimelineMax()
	.fromTo(
		"#poly-straight-pink",
		1,
		{ y: "100%", opacity: 0 },
		{ y: "0%", opacity: 1, ease: "power4.out" }
	) // in from bottom
	.fromTo(
		"#poly-straight-dark-blue",
		1,
		{ y: "100%", opacity: 0 },
		{ y: "0%", opacity: 1, ease: "power4.out" }
	); // in from bottom

const educationScene = new ScrollMagic.Scene({
	triggerElement: "#education",
	duration: "200%",
})
	.addTo(controller)
	.setPin("#education")
	.setTween(educationTimeline)
	.addIndicators({ name: "education" }) // add indicators (requires plugin)
	.on("enter", () => {
		$(".active").toggleClass("active");
		this.updateURL("education");
	})
	.setClassToggle('a[href="#education"]', "active");
//
// SKILLS
const skillsTimeline = new TimelineMax()
    .add('frontend')
    .fromTo(
        "#frontend",
        { y: "-100px", opacity: 0 },
        { y: "0px", opacity: 1, stagger: 0.3 },
        "frontend"
    )
	.fromTo(
		"#frontend .skill",
		{ y: "100px", opacity: 0 },
		{ y: "0px", opacity: 1, ease: "power3.InOut", stagger: 0.2 },
        "frontend"
	)
    .add('backend')
    .fromTo(
        "#backend",
        { y: "-100px", opacity: 0 },
        { y: "0px", opacity: 1, stagger: 0.3 },
        "backend"
    )
	.fromTo(
		"#backend .skill",
		{ y: "100px", opacity: 0 },
		{ y: "0px", opacity: 1, ease: "power3.InOut", stagger: 0.2 },
        "backend"
	)
    .add('tools')
    .fromTo(
        "#tools",
        { y: "-100px", opacity: 0 },
        { y: "0px", opacity: 1, stagger: 0.3 },
        "tools"
    )
	.fromTo(
		"#tools .skill",
		{ y: "100px", opacity: 0 },
		{ y: "0px", opacity: 1, ease: "power3.InOut", stagger: 0.2 },
        "tools"
	)
    

const skillsScene = new ScrollMagic.Scene({
	triggerElement: "#skills",
	duration: "200%",
})
	.addTo(controller)
	.setPin("#skills")
	.setTween(skillsTimeline)
	.addIndicators({ name: "skills" })
	.on("enter", () => {
		$(".active").toggleClass("active");
		this.updateURL("skills");
	})
	.setClassToggle('a[href="#skills"]', "active");
//
// CONTACT
const contactTimeline = new TimelineMax()
	.fromTo(
		".contact",
		{ x: "150px", opacity: 0 },
		{ x: "0px", opacity: 1, ease: "power3.InOut", stagger: '0.2' }
	)

const contactScene = new ScrollMagic.Scene({
	triggerElement: "#contact",
	duration: "100%",
})
	.addTo(controller)
	.setPin("#contact")
	.setTween(contactTimeline)
	.addIndicators({ name: "contact" })
	.on("enter", () => {
		$(".active").toggleClass("active");
		this.updateURL("contact");
	})
	.setClassToggle('a[href="#contact"]', "active");
