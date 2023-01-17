import React, { useEffect, useRef, useContext } from "react";
// Importing Context
import { SizeContext } from "../../context/sizeContext";
// Inputs
import TextInput from "../../Inputs/Text.js";
import FileInput from "../../Inputs/File.js";
// stylesheet and animation library
import style from "./hero.module.scss";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroEdit = ({ form, handleChange }) => {
	console.log("HERO EDIT , form", form);
	const hero = useRef();

	const size = useContext(SizeContext);
	console.log("size from context,", size);

	useEffect(() => {
		let ctx = gsap.context(() => {
			const tl = gsap.timeline({});

			// for the on load 2 colors gradual "hero" reveal effect

			// 1- reveal the hero_container
			tl.fromTo(
				".hero_container",
				{
					clipPath: "inset(100% 0% 0% 0%)",
				},
				{
					clipPath: "inset(0% 0% 0% 0%)",
					duration: 2,
					delay: 0.3,
				}
			)
				// 1- this animation runs along with the previous animation
				// 2- reveal the hero_video
				// 3- (slide + downward scale) effect as video is revealed
				// 4- for a parallax effect pin the video after animation is completed
				.fromTo(
					".hero_video",
					{
						clipPath: "inset(100% 0% 0% 0%)",
						yPercent: 20,
						scale: 1.2,
					},
					{
						onComplete: () => {
							tl.to(".hero_video", {
								scrollTrigger: {
									pin: true,
									trigger: ".hero_video",
									/* markers: {
										startColor: "blue",
										endColor: "blue",
										fontSize: "14px",
									}, */
									start: "top top",
									end: "bottom+=150% top",
								},
							});
						},
						clipPath: "inset(0% 0% 0% 0%)",
						duration: 2,
						delay: 0.1,
						yPercent: 0,
						scale: 1,
					},
					"<"
				);
		}, hero);

		return () => ctx.revert();
	}, []);

	return (
		<div ref={hero} className={style.hero_section_container}>
			<div className={style.hero_container}>
				<FileInput
					styling="full_area"
					info={{
						parentForm: "hero",
						type: "file",
						label: "noLabel",
						id: "hero_media-0",
						name: "hero_media",
						placeholder: "Hero Media",
						required: "true",
					}}
					handleChange={handleChange}
					form={form}
				/>
			</div>

			{/* 			<div className="hero_subheaders">
				<TextInput
					info={{
						type: "text",
						label: "noLabel",
						name: "hero_header",
						placeholder: "Hero Header",
					}}
					handleChange={handleChange}
					form={form}
				/>
			</div> */}
		</div>
	);
};
export default HeroEdit;
