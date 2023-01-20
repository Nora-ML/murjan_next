import React, { useEffect, useRef, useState } from "react";
//import { ProductContext } from "../../context/productContext";

//import "./pre_loader.scss";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PreLoader = ({ activateHero }) => {
	console.log("PRE Loader State,");

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
		setTimeout(() => {
			console.log("/////// SET TIME OUT ///////");
			activateHero(true);
			setState(true);
		}, 1500);
	}, []);

	useEffect(() => {
		// Container Transition out animation
		let ctx = gsap.context(() => {
			if (state === true) {
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
