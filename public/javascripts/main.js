// TODO: Loop each section creation & override defaults for each unique modifier
const sections = gsap.utils.toArray("section");
let currentSection = sections[0];

// stretch out the body height according to however many sections there are.
gsap.set("body", { height: sections.length * 100 + "%" });

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
        gsap.to(window, { duration: 1, scrollTo: { y: id + "-anchor", offsetY: -225 }});

		if (window.history && window.history.pushState) {
			history.pushState(null, null, id);
		}
	}
});

// Pass click event on contact cards to the child link
$(".contact").click(function (e) {
	e.currentTarget.lastChild.click();
});

//
// ABOUT
const aboutTimeline = gsap.timeline({
	scrollTrigger: {
		trigger: "#about",
		pin: true,
		start: "top top",
		end: "100%",
		scrub: 1,
		// snap: {
		// 	snapTo: "labelsDirectional",
        //     directional: true,
		// 	duration: { min: 0.2, max: 1.5 },
		// 	delay: 0.1,
		// 	ease: "power1.InOut",
        // },
        onToggle: self => {
            $(".active").toggleClass("active"); // unset active links
            this.updateURL(self.pin.id);
            $(`a[href='#${self.pin.id}']`).toggleClass("active");
        }
	},
});
aboutTimeline.add("aboutStart");
aboutTimeline.to(["#name", ".subtitle-container"], { y: -50, ease: "power1.InOut" }, "aboutStart");
aboutTimeline.fromTo(
	".summary",
	{ opacity: 0, y: 100 },
	{ opacity: 1, y: 0, ease: "power1.InOut", delay: 0.1 },
	"aboutStart"
);
aboutTimeline.add("aboutEnd")
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
const experienceTimeline = gsap.timeline({
	scrollTrigger: {
		trigger: "#experience",
		pin: true,
		start: "top top",
		end: "100%",
		scrub: 1,
		// snap: {
		// 	snapTo: "labelsDirectional",
		// 	duration: { min: 0.2, max: 1.5 },
		// 	delay: 0.1,
		// 	ease: "power1.InOut",
		// },
        onToggle: self => {
            $(".active").toggleClass("active"); // unset active links
            this.updateURL(self.pin.id);
            $(`a[href='#${self.pin.id}']`).toggleClass("active");
        }
	},
});
experienceTimeline.from("#experience .title", {x: -100, opacity: 0})

experienceTimeline.add("SFSEMove");
experienceTimeline.to("#SFSE", { x: "-40px", y: "40px", opacity: 0 }, "SFSEMove");
experienceTimeline.to(".stack-card:not(#SFSE)", { x: "-20px", y: "20px" }, "SFSEMove");

experienceTimeline.add("FSEMove");
experienceTimeline.to("#FSE", { x: "-60px", y: "60px", opacity: 0 }, "FSEMove");
experienceTimeline.to(".stack-card:not(#FSE)", { x: "-40px", y: "40px" }, "FSEMove");

experienceTimeline.add("JFSEMove");
experienceTimeline.to("#JFSE", { x: "-80px", y: "80px", opacity: 0 }, "JFSEMove");
experienceTimeline.to(".stack-card:not(#JFSE)", { x: "-60px", y: "60px" }, "JFSEMove");

experienceTimeline.add("QAEMove");
experienceTimeline.to("#QAE", { x: "-100px", y: "100px", opacity: 0 }, "QAEMove");
experienceTimeline.to(".stack-card:not(#QAE)", { x: "-80px", y: "80px" }, "QAEMove");

experienceTimeline.to("#experience .title", {x: -100, opacity: 0})
//
// EDUCATION
const educationTimeline = gsap.timeline({
	scrollTrigger: {
		trigger: "#education",
		pin: true,
		start: "top top",
		end: "100%",
		scrub: 1,
		// snap: {
		// 	snapTo: "labelsDirectional",
		// 	duration: { min: 0.2, max: 1.5 },
		// 	delay: 0.1,
		// 	ease: "power1.InOut",
		// },
        onToggle: self => {
            $(".active").toggleClass("active"); // unset active links
            this.updateURL(self.pin.id);
            $(`a[href='#${self.pin.id}']`).toggleClass("active");
        }
	},
});
educationTimeline.from("#education .title", {x: -100, opacity: 0})

educationTimeline.fromTo(
	"#poly-straight-pink",
	1,
	{ y: "100%", opacity: 0 },
	{ y: "0%", opacity: 1, ease: "power4.out" }
);
educationTimeline.fromTo(
	"#poly-straight-dark-blue",
	1,
	{ y: "100%", opacity: 0 },
	{ y: "0%", opacity: 1, ease: "power4.out" }
);
educationTimeline.add('educationEnd')
educationTimeline.to("#education .title", {x: -100, opacity: 0})
//
// SKILLS
const skillsTimeline = gsap.timeline({
	scrollTrigger: {
		trigger: "#skills",
		pin: true,
		start: "top top",
		end: "100%",
		scrub: 1,
		// snap: {
		// 	snapTo: 'labelsDirectional',
		// 	duration: { min: 0.2, max: 1.5 },
		// 	delay: 0.1,
		// 	ease: "power1.InOut",
		// },
        onToggle: self => {
            $(".active").toggleClass("active"); // unset active links
            this.updateURL(self.pin.id);
            $(`a[href='#${self.pin.id}']`).toggleClass("active");
        }
	},
});
skillsTimeline.from("#skills .title", {x: -100, opacity: 0})

skillsTimeline.add("frontend");
skillsTimeline.fromTo(
	"#frontend",
	{ y: "-100px", opacity: 0 },
	{ y: "0px", opacity: 1, stagger: 0.3 },
	"frontend"
);
skillsTimeline.fromTo(
	"#frontend .skill",
	{ y: "100px", opacity: 0 },
	{ y: "0px", opacity: 1, ease: "power3.InOut", stagger: 0.2 },
	"frontend"
);

skillsTimeline.add("backend");
skillsTimeline.fromTo(
	"#backend",
	{ y: "-100px", opacity: 0 },
	{ y: "0px", opacity: 1, stagger: 0.3 },
	"backend"
);
skillsTimeline.fromTo(
	"#backend .skill",
	{ y: "100px", opacity: 0 },
	{ y: "0px", opacity: 1, ease: "power3.InOut", stagger: 0.2 },
	"backend"
);

skillsTimeline.add("tools");
skillsTimeline.fromTo(
	"#tools",
	{ y: "-100px", opacity: 0 },
	{ y: "0px", opacity: 1, stagger: 0.3 },
	"tools"
);
skillsTimeline.fromTo(
	"#tools .skill",
	{ y: "100px", opacity: 0 },
	{ y: "0px", opacity: 1, ease: "power3.InOut", stagger: 0.2 },
	"tools"
);
skillsTimeline.add("skillsEnd")
skillsTimeline.to("#skills .title", {x: -100, opacity: 0})
//
// CONTACT
const contactTimeline = gsap.timeline({
	scrollTrigger: {
		trigger: "#contact",
		pin: true,
		start: "top top",
		end: "100%",
		scrub: 1,
		// snap: {
		// 	snapTo: [1],
		// 	duration: { min: 0.2, max: 1.5 },
		// 	delay: 0.1,
		// 	ease: "power1.InOut",
		// },
        onToggle: self => {
            $(".active").toggleClass("active"); // unset active links
            this.updateURL(self.pin.id);
            $(`a[href='#${self.pin.id}']`).toggleClass("active");
        }
	},
});
contactTimeline.from("#contact .title", {x: -100, opacity: 0})

contactTimeline.fromTo(
	".contact",
	{ x: "150px", opacity: 0 },
	{ x: "0px", opacity: 1, ease: "power3.InOut", stagger: "0.2" }
);
contactTimeline.add('contactEnd')