console.log("SCRIPT ADDED");
let bodyTag = document.querySelector("body");
const main = document.querySelector(".main_container");
// MAIN CATEGORY
const main_categ = document.querySelector(".landing-category");
const { top: mainCateg_top, bottom: mainCateg_bottom } = main_categ
	? main_categ.getBoundingClientRect()
	: { top: 0, bottom: 0 };

// landing page collection section
const coll_section_main = document.querySelector(".landing-collection");
const coll_section_wrapper_height =
	coll_section_main?.getBoundingClientRect().height;
const coll_section = document.querySelector(".landing-collection__sticky");
const coll_section_top = coll_section?.getBoundingClientRect().top;
const coll_section_height = coll_section?.getBoundingClientRect().height;
const coll_section_end = coll_section_top + coll_section_height * 0.6;

// footer
const footer = document.querySelector(".content-2");
const footer_top = footer?.getBoundingClientRect().top;

//const figcaptions = document.querySelectorAll("figcaption");
const mainImage = document.querySelectorAll(".main_image");
const decoImage = document.querySelectorAll(".decoration_image");

const motion = window.matchMedia("(prefers-reduced-motion:no-preference");
//const large = window.matchMedia("(min-width:600px");

if (motion.matches /* & large.matches */) {
	let currentScroll = 0;
	let aimScroll = 0;
	let main_speed = 0.04;

	const changeScroll = () => {
		console.log("CHANGE SCROLL");
		bodyTag.style.height = main.offsetHeight + "px";

		currentScroll = Math.ceil(
			currentScroll + (aimScroll - currentScroll) * main_speed
		);
		main.style.top = -1 * currentScroll + "px";

		mainImage.forEach((image) => {
			const image_box = image.getBoundingClientRect();
			const top_quart = image_box.y + image_box.height / 4;
			const diff = top_quart - window.innerHeight / 4;

			const speed = 0.2;
			image.style.top = (0 - diff) * speed + "px";
		});
		decoImage.forEach((image) => {
			//console.log("image in loco.js", image);

			const image_box = image.getBoundingClientRect();
			const top_quart = image_box.y + image_box.height / 4;
			const diff = top_quart - window.innerHeight / 4;

			const speed = 0.4;
			image.style.top = (0 - diff) * speed + "px";
		});

		requestAnimationFrame(changeScroll);
	};

	window.addEventListener("scroll", () => {
		console.log("SCRolling");
		aimScroll = window.pageYOffset;
	});
	changeScroll();
}
