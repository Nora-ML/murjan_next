import React, { useLayoutEffect, useRef, useState } from "react";
//import emeraldImg from "../../../images/emerald watch.png";
//import yellowImg from "../../../images/yellow_bracelet_wide.png";
//import saphire from "../../../images/sapphire.png";
//import emeraldVid from "../../../images/videos/Emerald_vid.mp4";
//import sapphireVid from "../../../images/videos/saphire_vid.mp4";
//import yellowVid from "../../../images/videos/yellow_vid.mp4";
//import dot from "../../../images/icons/white_circle.png";
//import dot2 from "../../../images/icons/pink_circle.png";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
/* import "./gem_color.scss"; */

gsap.registerPlugin(ScrollTrigger);

/* const GemColorEdit = () => {
	/*const root = useRef();
	const [state, setState] = useState(0);

	const gems = [
		{
			image: emeraldImg,
			video: emeraldVid,
			header: "Be Enchanting",
			stone: "Emerald",
		},
		{
			image: yellowImg,
			video: yellowVid,
			header: "Be Radiant",
			stone: "Yellow Diamond",
		},
		{
			image: saphire,
			video: sapphireVid,
			header: "Be a Queen",
			stone: "Sapphire",
		},
	];

	const activate = (direction) => {
		console.log("state IN", state);
		console.log("direction", direction);
		if (direction === "next") {
			if (state <= gems.length - 2) {
				setState(state + 1);
			} else {
				setState(0);
			}
		}
		if (direction === "prev") {
			if (state > 0) {
				setState(state - 1);
			} else {
				setState(gems.length - 1);
			}
		}
	};
	console.log("state OUT", state);
	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			const rC = root.current;

			const tl = gsap.timeline({});
			tl.to(".gem_container", {
				scrollTrigger: {
					//markers: true,
					trigger: rC,
					start: "top top",
					duration: 5,
					delay: 3,
				},
			});
		});

		return () => ctx.revert();
	}, []);

	return (
		<div ref={root} className="gem_color-container">
			{gems.map((g, index) => (
				<div
					key={`${index + g.stone}`}
					className={`gem_container  ${index === state ? "active" : ""}`}>
					<video
						className="gem_video main_image "
						type="video/mp4"
						src={g.video}
						autoPlay
						loop
						muted
					/>
				</div>
			))}
			{gems.map((g, index) => (
				<div key={`${index + g.header}`} className="gem_image_container ">
					<div
						className={`gem_image_container2 ${
							index === state ? "active" : ""
						}`}>
						<img className="gem_image" src={g.image} alt="" />
						<div className="command_container">
							<h1>SHOP {g.stone}..</h1>
						</div>
					</div>
				</div>
			))}

			<div onClick={() => activate("prev")} className="btn prev"></div>
			<div className="progress">
				{[...new Array(gems.length)].map((r, index) => (
					<div key={index + ""}>
						<img
							className={`progress_dot ${index === state ? "active" : ""}`}
							src={dot2}
							alt="progress dot"
						/>
					</div>
				))}
			</div>
			<div onClick={() => activate("next")} className="btn next"></div>
		</div>
	);
};
export default GemColor; */
