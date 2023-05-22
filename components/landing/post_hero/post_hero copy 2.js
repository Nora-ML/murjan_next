import React, { useLayoutEffect, useEffect, useRef, memo } from "react";
import Image from "next/image";
import { useQuery } from "@apollo/client";
import { GET_ABOUT } from "../../helpers/landing";
import dynamic from "next/dynamic";
const GemColor = dynamic(() => import("../gem_color/gem_color.js"));
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const PostHero = ({ child }) => {
	console.log("Post Hero");
	const app = useRef();
	const { data, error, loading } = useQuery(GET_ABOUT);

	if (loading) console.log("GET_ABOUT:: LOADING");
	if (data) console.log("GET_ABOUT :: RESPONSE ::", data);

	useEffect(() => {
		console.log("---- Post Hero -- useEffect, wait ...");
		if (data) {
			console.log("---- Post Hero -- useEffect, ...done");
			let ctx = gsap.context(() => {
				// animating the svg to a wave effect on scroll
				const pathTo = document.querySelector(".path-anim").dataset.pathTo;
				gsap
					.timeline({
						scrollTrigger: {
							trigger: ".separator",
							start: "top center",
							/* markers: {
									endColor: "purple",
									startColor: "purple",
									fontSize: "14px",
								}, */
							end: "bottom+=100 top",
							scrub: true,
						},
					})
					.to(".path-anim", {
						ease: "none",
						attr: { d: pathTo },
					});

				const anime = (trigger, trigger2, start, end, direction, duration) => {
					const tl = gsap.timeline({
						scrollTrigger: {
							trigger: trigger,
							start: start,
							toggleActions: "play complete play none",
							end: end,
							/* markers: {
								endColor: "purple",
								startColor: "purple",
								fontSize: "14px",
							}, */
						},
					});
					tl.fromTo(
						trigger,
						{
							clipPath: `${
								direction === "top-bottom"
									? "inset(0% 0% 100% 0%)"
									: "inset(100% 0% 0% 0%)"
							}`,
						},
						{
							clipPath: "inset(0% 0% 0% 0%)",
							duration: duration,
							ease: "none",
							stagger: 0.1,
						}
					);

					// scale down effect as image is revealed
					if (trigger2) {
						tl.fromTo(
							trigger2,
							{
								scale: 1.3,
							},
							{
								scale: 1,
								ease: "none",
								duration: 2,
								stagger: 0.4,
							},
							"-0.5"
						);
					}

					tl.set(trigger, { clipPath: "inset(0% 0% 0% 0%)" });
				};
				anime(
					".i-con",
					".post_hero_img",
					"top center",
					"bottom+=40% top",
					"top-bottom",
					1
				);
				anime(
					".main_posthero_header",
					"",
					"top center",
					"bottom",
					"bottom-up",
					0.7
				);
				anime(
					".sub_posthero_header",
					"",
					"top center",
					"bottom",
					"bottom-up",
					0.5
				);

				ScrollTrigger.normalizeScroll(true);
				ScrollTrigger.refresh();
			}, app);
			return () => ctx.revert();
		}
	}, [data]);

	if (loading) return "";
	if (error) return "";

	let {
		about: {
			about_header,
			about_image,
			about_sub_header,
			about_second_sub_header,
		},
	} = data?.getAbout;

	return (
		<>
			<div ref={app} className="post_hero-container">
				{child && child(data)}
				{/* 	<div class="svg-container"> */}
				<svg
					className="separator"
					preserveAspectRatio="xMinYMin meet"
					viewBox="0 0 100 200">
					<path
						className="path-anim"
						d="M-4-1c362 0 1360-1 1653 0v121H-3V83Z"
						data-path-to="M-4-1c-87 208 1360-1 1653 0v121H-3V83Z"
						vectorEffect="non-scaling-stroke"
					/>
				</svg>
				{/* </div> */}
				<h1 className="main_posthero_header">{about_header}</h1>

				<h3 className="sub_posthero_header">{about_sub_header}</h3>
				<div className="image-main-container">
					{about_image &&
						about_image.map((img, index) => (
							<div
								key={(index * 0.153).toString()}
								className={`i-con image-container-${
									index === 0 ? "first" : "second"
								}`}>
								{/* <img className="post_hero_img main_image" src={img} alt="" /> */}
								<Image
									layout="fill"
									objectFit="cover"
									className="post_hero_img main_image"
									src={img}
									alt=""
								/>
							</div>
						))}
				</div>

				<h4 className="sub2_posthero_header">{about_second_sub_header}</h4>
			</div>
			<GemColor />
		</>
	);
};

export default memo(PostHero);
