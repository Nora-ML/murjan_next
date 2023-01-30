import React, { useRef, useEffect, useLayoutEffect } from "react";
import { useQuery } from "@apollo/client";
import { FEATURED_PRODUCTS } from "../helpers/product";

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CategoryNav = () => {
	const cateNav = useRef();

	const { data, error, loading } = useQuery(FEATURED_PRODUCTS);

	if (loading) <h2>LOAding</h2>;
	if (error) <h2>Error</h2>;

	const featured = data ? data.featuredProducts : "";

	useEffect(() => {
		console.log("--- CATEGORY NAV useEffect ");

		let ctx = gsap.context(() => {
			const section = gsap.utils.toArray(".category_each-container");

			console.log("cateNav", cateNav);

			let tl = gsap.timeline({
				scrollTrigger: {
					trigger: ".second_container",
					scrub: 0.5,
					ease: "none",
					snap: {
						snapTo: 1 / (section.length - 1),
						duration: 1,
						delay: 1,
						//directional: false,
					},
					/* markers: {
						startColor: "green",
						endColor: "green",
						fontSize: "16px",
						fontWeight: "bold",
						indent: 10,
					}, */
					start: `top top+=30%`,
					end: `top+=400% bottom-=20%`,
				},
			});
			tl.to(section, {
				xPercent: -100 * (section.length - 1),
				ease: "none",
			});

			//ScrollTrigger.refresh();
		}, cateNav);

		return () => ctx.revert();
	});
	/// Headers animation

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			// all your animations go in here...

			const arr = gsap.utils.toArray(".cat_header");
			const eachContainer = document.querySelectorAll(
				".category_each-container"
			);
			//const windowInner = window.innerHeight;

			const tl = gsap.timeline({});

			arr.forEach((r, index) => {
				const windowInner = eachContainer[0].getBoundingClientRect().height;
				tl.fromTo(
					r,
					{ xPercent: `${100 + index * 100}`, opacity: 0 },
					{
						scrollTrigger: {
							trigger: r,
							/* markers: {
								startColor: "purple",
								endColor: "purple",
								fontSize: "16px",
								fontWeight: "bold",
								indent: -10,
							}, */
							ease: "none",
							start: `top+=${index * windowInner} top+=30%`,
							end: `top+=${windowInner + index * windowInner} ${
								index === 0 ? "top" : "top"
							}`,
							//toggleActions: "play play play reset",
							onEnter: () => {
								gsap.fromTo(
									r,
									{ xPercent: `${100 + index * 100}`, opacity: 0 },
									{
										//border: "2px red solid",
										xPercent: 0,
										opacity: 1,
										//delay: `${index * 0.2}`,
									}
								);
							},
							onLeave: () => {
								gsap.to(r, {
									// border: "2px green solid",
									xPercent: -100,
									//delay: -0.2,
								});
							},
							onEnterBack: () => {
								gsap.fromTo(
									r,
									{ xPercent: `${index * 100}` },
									{
										//border: "2px red solid",
										xPercent: 0,
										//delay:`${index * 0.2}`,
									}
								);
							},
							onLeaveBack: () => {
								gsap.to(r, {
									xPercent: -100,
								});
							},
						},
					}
				);
			});
		}, cateNav); // <- scopes all selector text to the root element

		return () => ctx.revert();
	}, []);

	console.log("FEATURED ", featured);

	return (
		<div ref={cateNav} className="category_main_container">
			<div className="cat_container">
				{/* <img
					className="decoration_image"
					src={goldEdge}
					alt="page decoration gold flower"
				/> */}
				{/* <div className="fixed_header_part">
					
				</div> */}
				<div className="cat_headers_container">
					<h1 className="cat_header_fixed">Trending</h1>
					<div className="cat_wrap">
						{featured &&
							featured.map((cat) => (
								<h1 key={cat.categoryId} className="cat_header">
									{cat.categoryName}
								</h1>
							))}
					</div>
				</div>
				<div className="second_container">
					{featured &&
						featured.map((cat, index) => (
							<div
								key={cat.categoryId + "" + index}
								className="category_each-container">
								<div className="cat_images">
									{cat.featuredProducts.map((prod, index) => (
										<div key={prod.id + "" + index} className="cat_image_each">
											<img
												src={prod.image[0]}
												//src={arrayImages[Math.floor(Math.random() * 6)]}
												alt=""
											/>
										</div>
									))}
								</div>
							</div>
						))}
				</div>
			</div>
		</div>
	);
};
export default CategoryNav;
