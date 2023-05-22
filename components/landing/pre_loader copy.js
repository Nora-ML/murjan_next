import React, { useEffect, useRef, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_HERO } from "../helpers/landing";
//animation
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PreLoader = ({ landing }) => {
	console.log("Landing --- PRE Loader ");

	const { data, error, loading } = useQuery(GET_HERO);

	let landingContent = data?.getHero?.hero || {};
	let heroContentFetched = Object.keys(landingContent).length !== 0;

	if (loading) console.log("GET_HERO :: LOADING");
	if (landingContent) console.log("GET_HERO :: RESPONSE", landingContent);

	const [state, setState] = useState(false);

	const text = "Murjan";
	const array = [];

	const rootz = useRef();
	for (let i = 0; i < text.length; i++) {
		if (text[i] === " ") {
			array.push("&nbsp;");
		} else {
			array.push([text[i]]);
		}
	}

	useEffect(() => {
		console.log("PRE-LOADER :: Useffect .. LOGO ANIMATION");
		let ctx = gsap.context(() => {
			// Logo animation
			array.forEach((item, i) => {
				gsap.to(`.char${i}`, {
					translateY: "0px",
					ease: "power3.inOut",
					delay: i * 0.2,
				});
			});
			//reveal text animation
			gsap.fromTo(
				".text",
				{ clipPath: "inset(0% 0% 100% 0%)" },
				{ clipPath: "inset(0% 0% 0% 0%)", duration: 1.5 }
			);
		}, rootz);

		return () => ctx.revert();
	}, []);

	useEffect(() => {
		console.log(
			"PRE-LOADER :: Useffect 2-1, if hero data fetched will set state to true=> to trigger slide out animation , then wait 800ms to pass up the data to the landing page"
		);
		if (heroContentFetched) {
			setState(true);

			setTimeout(() => {
				console.log(
					"PRE-LOADER :: Useffect 2-3, 800ms passed, will pass herodata up "
				);
				landing(landingContent);
			}, 800);
		}
	}, [heroContentFetched]);

	useEffect(() => {
		console.log(
			"PRE-LOADER :: Useffect 3-1 , to trigger slide out animation if state is true"
		);
		// Container Transition out animation
		let ctx = gsap.context(() => {
			if (state === true) {
				console.log(
					"PRE-LOADER :: Useffect 3-2 ,.state is true. We are sliding .."
				);
				gsap.fromTo(
					rootz.current,
					{
						yPercent: 0,
					},
					{
						yPercent: -100,
						//backgroundColor: "purple",
						duration: 2,
					},
					">"
				);
			}
		}, rootz);

		return () => ctx.revert();
	}, [state]);

	console.log("PRE-LOADER :: STATE", state);

	return (
		<>
			<div ref={rootz} className="text-container">
				<div className="text">
					{array.map((item, i) => (
						<h1 key={`letter${i}`} className={`char${i}`}>
							{item === "&nbsp;" ? <h1>&nbsp;</h1> : item}{" "}
						</h1>
					))}
				</div>
			</div>
		</>
	);
};
export default PreLoader;
