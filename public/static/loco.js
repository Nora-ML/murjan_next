console.log("SCRIPT ADDED");
const bodyTag = document.querySelector("body");
const main = document.querySelector(".main_container");

// landing page categ section
const categ_section = document.querySelector(".landing-category__sticky");
const categ_section_top = categ_section.getBoundingClientRect().top;
const categ_section_height = categ_section.getBoundingClientRect().height;
const categ_section_width = categ_section.getBoundingClientRect().width;
const categ_section_end = categ_section_top + categ_section_height + 100;

// landing page collection section
const coll_section_wrapper_height = document
	.querySelector(".landing-collection")
	.getBoundingClientRect().height;
const coll_section = document.querySelector(".landing-collection__sticky");
const coll_section_top = coll_section.getBoundingClientRect().top;
const coll_section_height = coll_section.getBoundingClientRect().height;
const coll_section_end = coll_section_top + coll_section_height * 0.6;

// footer
const footer = document.querySelector(".content-2");
const footer_top = footer.getBoundingClientRect().top;

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

		let path = window.location.pathname;

		if (path === "/") {
			//DATA
			// Category section data
			const array_of_categories = document.querySelectorAll(".each-category");
			const categProduct = document.querySelector(".category-products");
			const categProduct_width =
				categProduct.getBoundingClientRect().width - categ_section_width;
			const calculated_cat_height =
				categ_section_height / array_of_categories.length;

			//DATA
			// Collection section data
			const coll_section_imageCard = document.querySelectorAll(".image-card");
			const coll_section_image = document.querySelectorAll(".image-img");
			const count_coll = coll_section_imageCard.length + 1;
			const coll_section_header = document.querySelectorAll(".header-card");

			const each_coll_height = coll_section_wrapper_height / count_coll;
			let collection_start_trigger = coll_section_top - coll_section_height / 3;
			let collection_end_trigger = footer_top - each_coll_height / 2;

			// Operations
			// Category - horizontal scrolling
			if (
				currentScroll >= categ_section_top &&
				currentScroll <= coll_section_top - categ_section_height
			) {
				console.log("Trigger Horizontal Scroll");

				let diff = currentScroll - categ_section_top;
				let ratio = categProduct_width / categ_section_height;

				categProduct.style.transform = `translateX(-${diff * ratio}px)`;
				categProduct.style.transition = "transform 0.4s linear";
			}

			// opening and pinning collection section
			else if (
				currentScroll >= collection_start_trigger &&
				currentScroll <= collection_end_trigger
			) {
				console.log("Fixing Collecton");
				coll_section.style.clipPath = " circle(130% at 50% 100%)";
				coll_section.style.transition = " clip-path 2s linear";

				coll_section_imageCard.forEach((img, index) => {
					let start = index === 0 ? 0 : index;
					let end = index === 0 ? 1 : index + 1;
					if (
						currentScroll >=
							collection_start_trigger + each_coll_height * start &&
						currentScroll <
							(index === count_coll - 2
								? collection_end_trigger
								: collection_start_trigger + each_coll_height * end)
					) {
						console.log("THE INDEX", index);
						img.style.opacity = "1";
						coll_section_header[index].style.opacity = "1";
						img.style.clipPath = "inset(0% 0% 0% 0%)";
						coll_section_image[index].style.transform = "scale(1)";
						coll_section_image[index].style.transition = "transform 2s ease";
						coll_section_header[index].style.backgroundColor =
							"var(--another_light)";
						coll_section_header[index].style.clipPath = "inset(0% 0% 0% 0%)";
						img.style.transition = "clip-path 1.2s ease";
						coll_section_header[index].style.transition = "clip-path 1.2s ease";
					} else {
						img.style.opacity = "0";
						coll_section_header[index].style.opacity = "0";
						coll_section_header[index].style.backgroundColor =
							"var(--another_light)";
						img.style.clipPath = "inset(100% 0% 0% 0%)";
						coll_section_header[index].style.clipPath = "inset(100% 0% 0% 0%)";
						img.style.transition = "clip-path 1.2s ease";
						coll_section_header[index].style.transition = "clip-path 2s ease ";
					}
				});
			} else {
				console.log("FROZEN  OTHEEEERRRZZZZZ");
				coll_section.style.clipPath = " circle(0.0% at 50% 100%)";
				coll_section.style.transition = " clip-path 1.5s linear";
			}
		}

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
		//console.log("SCRolling");
		aimScroll = window.pageYOffset;
	});

	changeScroll();
}
