import React, { useRef, useLayoutEffect } from "react";
import { useQuery } from "@apollo/client";
import { LIST_COLLECTION } from "../helpers/list";

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Collection = () => {
	const coll = useRef();
	const { data, loading, error } = useQuery(LIST_COLLECTION);
	if (loading) <h2>LOAding</h2>;
	if (error) <h2>Error</h2>;

	const collection = data ? data.listCollections : "";

	console.log("collection ", collection);

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			// all your animations go in here...

			const collcure = coll.current;
			const tlMain = gsap.timeline({
				scrollTrigger: {
					trigger: collcure,
					/* markers: {
						startColor: "yellow",
						endColor: "yellow",
						fontSize: "14px",
						fontWeight: "bold",
						indent: 20,
					}, */
					start: "top top",
					end: "bottom bottom",
					onEnter: () => {
						const one = gsap.timeline({});
						one
							.fromTo(
								collcure,
								{
									zIndex: -1,
									clipPath: "circle(0.0% at 50% 100%)",
								},
								{
									zIndex: 1,
									duration: 3,
									clipPath: "circle(112.6% at 50% 80%)",
									backgroundColor: "#e2c3a5",
								}
							)
							.fromTo(
								".page4",
								{
									autoAlpha: 0,
									clipPath: "circle(0.0% at 50% 100%)",
								},
								{
									autoAlpha: 1,
									duration: 2,
									clipPath: "circle(112.6% at 50% 80%)",
									backgroundColor: "#ead4be",
								},
								">-1.5"
							);
					},
					// start past start again
					onLeaveBack: () => {
						gsap.fromTo(
							collcure,
							{
								clipPath: "circle(100% at 50% 100%)",
							},
							{
								duration: 2,
								clipPath: "circle(0% at 50% 100%)",
								backgroundColor: "#e2c3a5",
							}
						);
					},
					onLeave: () => {
						gsap.to(collcure, {
							clipPath: "circle(112.6% at 50% 80%)",
						});
					},
					// end past end again
					onEnterBack: () => {
						gsap.to(collcure, {
							clipPath: "circle(112.6% at 50% 80%)",
						});
					},
				},
			});

			//let height = document.querySelector(".page4").getBoundingClientRect().height;
			let height = collcure.getBoundingClientRect().height;
			let halfHeight = height / 5;
			let headerHeight = document
				.querySelector(".headers_container")
				.getBoundingClientRect().height;

			/******** HEADER ********** */
			const arr = gsap.utils.toArray(".header_card");
			const HEADER = () => {
				let tlHeader = gsap.timeline({});
				arr.forEach((r, index) => {
					let child = r.firstChild;
					tlHeader.fromTo(
						r,
						{
							clipPath: "inset(0% 0% 100% 0%)",
						},
						{
							scrollTrigger: {
								trigger: r,
								/* markers: {
									startColor: "green",
									endColor: "green",
									fontSize: "14px",
									fontWeight: "bold",
									indent: 20,
								}, */
								start: `top+=${index * halfHeight} top+=10%"
							}`,
								end: `top+=${halfHeight + index * halfHeight} top`,
								//toggleActions: "play play play reset",
								onEnter: () => {
									gsap.fromTo(
										r,
										{
											clipPath: "inset(0% 0% 100% 0%)",
										},
										{
											clipPath: "inset(0% 0% 0% 0%)",
											delay: 0.2,
										}
									);
									gsap.fromTo(
										child,
										{
											scale: 1.2,
											yPercent: 100,
										},
										{
											scale: 1,
											yPercent: -30,
										},
										"<"
									);
								},
								onLeave: () => {
									gsap.to(r, {
										clipPath: `${
											index === arr.length - 1 ? "" : "inset(0% 0% 100% 0%)"
										}`,
										//border: "red 2px solid",
									});
								},
								onEnterBack: () => {
									gsap.fromTo(
										r,
										{
											clipPath: "inset(0% 0% 100% 0%)",
										},
										{
											clipPath: "inset(0% 0% 0% 0%)",
											delay: 0.2,
										}
									);
								},
								onLeaveBack: () => {
									gsap.to(r, {
										clipPath: "inset(100% 0% 0% 0%)",
									});
								},
							},
							ease: "none",
						}
					);
				});
				return tlHeader;
			};

			/********** IMAGE *********/
			const IMAGE = () => {
				const arr2 = gsap.utils.toArray(".image_card");
				const tlImage = gsap.timeline({});
				arr2.forEach((r, index) => {
					let child = r.firstChild;

					tlImage.fromTo(
						r,
						{
							clipPath: "inset(100% 0% 0% 0%)",
						},
						{
							scrollTrigger: {
								trigger: r,
								fastScrollEnd: true,
								snap: {
									snapTo: 50,
									duration: 1,
									delay: 2,
									//directional: false,
								},
								/* markers: {
									startColor: "orange",
									endColor: "orange",
									fontSize: "14px",
									fontWeight: "bold",
									indent: 10,
								}, */
								start: `top+=${-headerHeight + index * halfHeight} top+=10%"
							}`,
								end: `top+=${
									-headerHeight + halfHeight + index * halfHeight
								} top`,
								ease: "slow(0.7, 0.7, false)",
								//toggleActions: "play play play reset",
								onEnter: () => {
									gsap.fromTo(
										r,
										{
											clipPath: "inset(100% 0% 0% 0%)",
										},
										{
											clipPath: "inset(0% 0% 0% 0%)",
											//border: "yellow 3px solid",
										}
									);
									gsap.fromTo(
										child,
										{
											scale: 1.5,
											yPercent: 100,
										},
										{
											scale: 1,
											yPercent: 0,
										},
										"<"
									);
								},
								onLeave: () => {
									if (index !== arr2.length - 1) {
										gsap.to(r, {
											clipPath: "inset(0% 0% 100% 0%)",
											//border: "red 2px solid",
											//delay: -0.5,
										});
									}
								},
								onEnterBack: () => {
									if (index !== arr2.length - 1) {
										gsap.fromTo(
											r,
											{
												clipPath: "inset(100% 0% 0% 0%)",
											},
											{
												clipPath: "inset(0% 0% 0% 0%)",
												//border: "green 2px solid",
											}
										);
									}
								},
								onLeaveBack: () => {
									if (index !== 0) {
										gsap.to(r, {
											clipPath: "inset(0% 0% 100% 0%)",
											//border: "blue 2px solid",
										});
									}
								},
							},
						}
					);
				});
				return tlImage;
			};

			//var master = gsap.timeline();
			tlMain.add(HEADER(), ">").add(IMAGE(), "<");
		}, coll); // <- scopes all selector text to the root element

		return () => ctx.revert();
	}, []);

	return (
		<div ref={coll} className="collection_container">
			<div className="page4">
				<div className="headers_container">
					{collection &&
						collection.map((coll, index) => (
							<div key={index + coll.id} className="header_card">
								<h1 className="header">{coll.name}</h1>
							</div>
						))}
				</div>
				<div className="images_container">
					{collection &&
						collection.map((coll, index) => (
							<div key={index + coll.name} className="image_card">
								<img className="image" src={coll.image[0]} alt="" />
							</div>
						))}
				</div>
			</div>
		</div>
	);
};

export default Collection;
