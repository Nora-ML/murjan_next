import React, { useLayoutEffect, useRef } from "react";
// Inputs
import TextInput from "../../Inputs/Text.js";
import FileInput from "../../Inputs/File.js";
// animation library
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PostHeroEdit = ({ form, handleChange }) => {
	//console.log("ABOUT  EDIT , form", form);

	const app = useRef();

	useLayoutEffect(() => {
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
	}, []);

	return (
		<div ref={app} className="post_hero-container">
			{/* 	<div class="svg-container"> */}
			<svg
				className="separator"
				preserveAspectRatio="xMinYMin meet"
				viewBox="0 0 100 200"
				/* width="100%"
				height="100%"
				
				preserveAspectRatio="none"*/
			>
				<path
					className="path-anim"
					d="M-4-1c362 0 1360-1 1653 0v121H-3V83Z"
					data-path-to="M-4-1c-87 208 1360-1 1653 0v121H-3V83Z"
					vectorEffect="non-scaling-stroke"
				/>
			</svg>
			{/* </div> */}
			<h1 className="main_posthero_header">
				<TextInput
					info={{
						parentForm: "about",
						type: "text",
						label: "noLabel",
						name: "about_header",
						placeholder: "About Header",
					}}
					handleChange={handleChange}
					form={form}
				/>
			</h1>

			<h3 className="sub_posthero_header">
				<TextInput
					info={{
						parentForm: "about",
						type: "text",
						label: "noLabel",
						name: "about_sub_header",
						placeholder: "Sub Header",
					}}
					handleChange={handleChange}
					form={form}
				/>
			</h3>
			<div className="image-main-container">
				<div className="i-con image-container-first">
					<FileInput
						info={{
							parentForm: "about",
							type: "file",
							id: "about_image-0",
							label: "noLabel",
							name: "about_image",
							//required: "true",
						}}
						handleChange={handleChange}
						form={form}
					/>
				</div>
				<div className="i-con image-container-second">
					<FileInput
						info={{
							parentForm: "about",
							type: "file",
							label: "noLabel",
							id: "about_image-1",
							name: "about_image",
							//required: "true",
						}}
						handleChange={handleChange}
						form={form}
					/>
				</div>
			</div>

			<h4 className="sub2_posthero_header">
				<TextInput
					info={{
						type: "text",
						label: "noLabel",
						name: "about_second_sub_header",
						placeholder: "Sub Header",
						parentForm: "about",
					}}
					handleChange={handleChange}
					form={form}
				/>
			</h4>
		</div>
	);
};

export default PostHeroEdit;
