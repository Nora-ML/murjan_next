console.log("SCRIPT ADDED");
const bodyTag = document.querySelector("body");
const main = document.querySelector(".main_container");

const page4 = document.querySelector(".page4");
//const figcaptions = document.querySelectorAll("figcaption");
const mainImage = document.querySelectorAll(".main_image");
const decoImage = document.querySelectorAll(".decoration_image");
const motion = window.matchMedia("(prefers-reduced-motion:no-preference");

/*
const catContainer = document.querySelector(".cat_container");
const collContainer = document.querySelector(".collection_container");
const catCont_top = catContainer.getBoundingClientRect().top;
const catCont_height = catContainer.getBoundingClientRect().height;
const endCatCont = catCont_top + catCont_height;

const collCont_top = collContainer.getBoundingClientRect().top;
const collCont_height = collContainer.getBoundingClientRect().height;
const endCollCont = collCont_top + collCont_height * 0.6;
*/
//const large = window.matchMedia("(min-width:600px");

if (motion.matches /* & large.matches */) {
	let currentScroll = 0;
	let aimScroll = 0;

	const changeScroll = () => {
		//console.log("CHange Scroll");
		bodyTag.style.height = main.offsetHeight + "px";
		// pinning the category horizontal container
		/* if (currentScroll >= catCont_top && currentScroll <= endCatCont) {
			//console.log("FROZEN LOCO SCROLL for CAT CONATINER");
			catContainer.style.position = "fixed";
			catContainer.style.top = "0px";
			//page4.style.position = "absolute";
			page4.style.top = "0";
		} else if (currentScroll >= endCatCont && currentScroll <= endCollCont) {
			//console.log("FROZEN  COLLECTIOOOOOOOOOOOn,", currentScroll);
			catContainer.style.position = "fixed";
			page4.style.position = "fixed";
			page4.style.top = "0px";
		} else {
			//console.log("FROZEN  OTHEEEERRRZZZZZ");
			catContainer.style.position = "relative";
			page4.style.position = "absolute";
			page4.style.top = "1000px";
		} */

		currentScroll = currentScroll + (aimScroll - currentScroll) * 0.02;
		main.style.top = -1 * currentScroll + "px";

		mainImage.forEach((image) => {
			//console.log("image in loco.js", image);

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
		//console.log("SCRolling");
		aimScroll = window.pageYOffset;
	});

	changeScroll();
}
