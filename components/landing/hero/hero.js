import React, { useEffect, useRef, useContext } from "react";
import { useQuery } from "@apollo/client";
import { GET_HERO } from "../../helpers/landing";
// TO-DO: try to dynamically import when its used
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = ({ data, child }) => {
	//console.log("Landing -- HERO SECTION ");
	const heroRef = useRef();

	let { hero_header, hero_media, hero_sub_header } = data;

	useEffect(() => {
		//console.log("--- Landing -- HERO SECTION :: useEffect ");
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
					delay: 0.4,
					ease: "slow(0.7, 0.7, false)",
				},
				"<"
			)
				.fromTo(
					".hero_video",
					{ scale: 3, yPercent: 50 },
					{ scale: 1, duration: 2.5, yPercent: -30, delay: 0.7 },
					-0.3
				)
				.to(".hero_video", { duration: 2, yPercent: 0 }, ">-0.7");
		}, heroRef);

		return () => ctx.revert();
	}, []);

	return (
		<div ref={heroRef} className="hero_section_container">
			<div className="hero_container">
				{hero_media.length < 0 ? (
					<h1>NOTHING TO SHOW</h1>
				) : (
					<video
						src={hero_media[0]}
						type="video/mp4"
						className="hero_video"
						preload
						loop
						muted
					/>
				)}
				{child && child}
			</div>
		</div>
	);
};
export default Hero;
