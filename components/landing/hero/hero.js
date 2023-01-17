import React, { useEffect, useRef, useContext } from "react";
// Importing Context
import { SizeContext } from "../../context/sizeContext";
// Assets
//import smallVideo from "../../../images/videos/Murjan_small_1.mp4";
//import largeVideo from "../../../images/videos/Murjan.mp4";
// stylesheet and animation library
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = ({ data }) => {
	console.log("--- HERO SECTION data", data);

	const hero = useRef();

	const size = useContext(SizeContext);
	console.log("size from context,", size);

	useEffect(() => {
		console.log("HERO useEffect");
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
					//backgroundColor: "yellow",
					duration: 2.5,
					delay: 0.3,
				},
				"<"
			)
				// 1- this animation runs along with the previous animation
				// 2- reveal the hero_video
				// 3- (slide + downward scale) effect as video is revealed
				// 4- for a parallax effect pin the video after animation is completed
				.fromTo(
					".hero_video",
					{
						clipPath: "inset(100% 0% 0% 0%)",
						yPercent: -110,
						scale: 4,
					},
					{
						clipPath: "inset(0% 0% 0% 0%)",
						duration: 3,
						scale: 1,
						yPercent: -10,
					},
					"<"
				);
		}, hero);

		return () => ctx.revert();
	}, []);

	return (
		<div ref={hero} className="hero_section_container">
			<div className="hero_container">
				<video
					src={data.hero_media[0]}
					type="video/mp4"
					className="hero_video"
					autoPlay
					loop
					muted
				/>
			</div>

			{/* <div className="hero_subheaders">
				<h1>This is Header 1</h1>
				<h3>Subheader 1</h3>
			</div> */}
		</div>
	);
};
export default Hero;
