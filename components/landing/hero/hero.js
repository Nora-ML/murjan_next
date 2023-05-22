import React, { useEffect, useRef, useContext, memo, lazy } from "react";
import { useQuery } from "@apollo/client";
import { GET_HERO } from "../../helpers/landing";
// TO-DO: try to dynamically import when its used
import PostHero from "../post_hero/post_hero";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { LandingContext } from "../../context/landingContext";

gsap.registerPlugin(ScrollTrigger);

const Hero = ({ child }) => {
	const heroRef = useRef();
	const { landingInContext, heroVideoLoaded } = useContext(LandingContext);

	let { hero_header, hero_media, hero_sub_header } = landingInContext.hero;

	useEffect(() => {
		console.log("--- HERO SECTION :: useEffect, wait ...");
		let ctx = gsap.context(() => {
			if (landingInContext) {
				console.log("--- HERO SECTION :: useEffect, ...done");
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
			}
		}, heroRef);

		return () => ctx.revert();
	}, [landingInContext]);

	return (
		<>
			<div ref={heroRef} className="hero_section_container">
				<div className="hero_container">
					<video
						src={hero_media}
						type="video/mp4"
						className="hero_video"
						preload="auto"
						autoPlay
						/* loop */
						muted
					/>
					{child && child}
				</div>
			</div>
			<PostHero />
		</>
	);
};
export default memo(Hero);
