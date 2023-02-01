console.log("SCRIPT ADDED");
const bodyTag = document.querySelector("body");
const main = document.querySelector(".main_container");

// landing page categ section
const categ_section = document.querySelector(".landing-category");
const categ_section_top = categ_section.getBoundingClientRect().top;
const categ_section_height = categ_section.getBoundingClientRect().height;
const categ_section_width = categ_section.getBoundingClientRect().width;
const categ_section_end = categ_section_top + categ_section_height + 100;

// The gap
const the_gap = document.querySelector(".gap_section");
const the_gap_height = the_gap.getBoundingClientRect().height;
const the_gap_top = the_gap.getBoundingClientRect().top;
const the_gap_end = the_gap_top + the_gap_height;

// landing page collection section
const coll_section = document.querySelector(".landing-collection");
const coll_section_top = coll_section.getBoundingClientRect().top;
const coll_section_height = coll_section.getBoundingClientRect().height;
const coll_section_end = coll_section_top + coll_section_height * 0.6;

//const figcaptions = document.querySelectorAll("figcaption");
const mainImage = document.querySelectorAll(".main_image");
const decoImage = document.querySelectorAll(".decoration_image");

const motion = window.matchMedia("(prefers-reduced-motion:no-preference");
//const large = window.matchMedia("(min-width:600px");

if (motion.matches /* & large.matches */) {
	let currentScroll = 0;
	let aimScroll = 0;
	let main_speed = 0.02;

	const changeScroll = () => {
		bodyTag.style.height = main.offsetHeight + "px";

		//DATA
		// Category section data
		const array_of_categories = document.querySelectorAll(".each-category");
		const categProduct = document.querySelector(
			".landing-category__category-products"
		);
		const categProduct_width =
			categProduct.getBoundingClientRect().width - categ_section_width;

		//DATA
		// Collection section data
		const coll_section_images = document.querySelectorAll(".image-card");
		const coll_section_header = document.querySelectorAll(".header-card");

		// Operations
		// pinning category section
		if (
			currentScroll >= categ_section_top &&
			currentScroll <= categ_section_end
		) {
			console.log("Fixing Category section");
			categ_section.style.position = "fixed";
			categ_section.style.top = "0px";
			coll_section.style.top = "0";
			the_gap.style.zIndex = "-1";

			// horizontal scroll
			let categ_section_height = categ_section_end - categ_section_top;
			let diff = currentScroll - categ_section_top;
			let ratio = categProduct_width / categ_section_height;

			categProduct.style.transform = `translateX(-${diff * ratio}px)`;
			categProduct.style.transition = "transform 0.4s linear";
		}
		// gap between category and collection
		else if (
			currentScroll >= categ_section_end &&
			currentScroll <= the_gap_end
		) {
			console.log("end the gap", the_gap_end);
			coll_section.style.clipPath = " circle(0.0% at 50% 100%)";
			coll_section.style.transition = " clip-path 1.5s linear";
			the_gap.style.zIndex = "1";
		}
		// opening and pinning collection section
		else if (
			currentScroll >= coll_section_top &&
			currentScroll <= coll_section_end
		) {
			console.log("Fixing Collecton");
			main_speed = 0.005;
			coll_section.style.clipPath = " circle(600% at 50% 100%)";
			coll_section.style.transition = " clip-path 2s linear";
			coll_section.style.position = "fixed";
			coll_section.style.top = "0px";

			const each_coll_height = coll_section_height / coll_section_images.length;

			console.log("TOTAL COLL HEIGHT", coll_section_height);
			console.log("EACH COLL HEIGHT", each_coll_height);

			coll_section_images.forEach((img, index) => {
				let adjust = index === 0 ? 0 : index * 0.5;
				if (
					currentScroll >= coll_section_top + each_coll_height * adjust &&
					currentScroll <= coll_section_top + each_coll_height * (adjust + 0.5)
				) {
					console.log("ZERRRRO index", index);
					img.style.zIndex = "1";
					coll_section_header[index].style.zIndex = "1";
					img.style.clipPath = "inset(0% 0% 0% 0%)";
					coll_section_header[index].style.clipPath = "inset(0% 0% 0% 0%)";
					img.style.transition = "clip-path 1.2s ease";
					coll_section_header[index].style.transition = "clip-path 1.2s ease";
				} /* else if (
					currentScroll >
						coll_section_top + each_coll_height * (adjust - 0.5) &&
					currentScroll <= coll_section_top + each_coll_height * adjust
				) {
					console.log("** Image index", index);
					img.style.zIndex = "1";
					img.style.clipPath = "inset(0% 0% 0% 0%)";
					img.style.transition = "clip-path 0.5s ease";
				} */ else {
					console.log("--- Image index", index);
					img.style.zIndex = "-1";
					coll_section_header[index].style.zIndex = "-1";
					img.style.clipPath = "inset(100% 0% 0% 0%)";
					coll_section_header[index].style.clipPath = "inset(100% 0% 0% 0%)";
					img.style.transition = "clip-path 1.2s ease";
					coll_section_header[index].style.transition = "clip-path 1.2s ease ";
				}
			});
			/* if (currentScroll <= coll_section_top + each_coll_height) {
				console.log("first Image");
				coll_section_images[0].style.transform = "translateY(-100%)";
			} else if (
				currentScroll > coll_section_top + each_coll_height &&
				currentScroll <= coll_section_top + each_coll_height * 1.5
			) {
				console.log("second Image");
				coll_section_images[1].style.transform = "translateY(-100%)";
			} else if (
				currentScroll > coll_section_top + each_coll_height * 1.5 &&
				currentScroll <= coll_section_top + each_coll_height * 2
			) {
				console.log("third Image");
				coll_section_images[2].style.transform = "translateY(-100%)";
			} else if (
				currentScroll > coll_section_top + each_coll_height * 2 &&
				currentScroll <= coll_section_top + each_coll_height * 2.5
			) {
				console.log("fourth Image");
				coll_section_images[3].style.transform = "translateY(-100%)";
			} */
		} else {
			console.log("FROZEN  OTHEEEERRRZZZZZ");
			coll_section.style.clipPath = " circle(0.0% at 50% 100%)";
			coll_section.style.transition = " clip-path 1.5s linear";
			categ_section.style.position = "relative";
			coll_section.style.position = "relative";
			main_speed = 0.02;
			//coll_section.style.top = "1000px";
		}

		console.log("MAIN SPEED,", main_speed);
		currentScroll = Math.ceil(
			currentScroll + (aimScroll - currentScroll) * main_speed
		);
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
