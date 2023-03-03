import React, { useLayoutEffect, useRef, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_PARALLEL_SLIDE } from "../../helpers/landing";
import Image from "next/image";
import dot2 from "../../../public/static/icons/pink_circle.png";

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GemColorEdit = () => {
	console.log("Landing ---ADMIN -- GEM-COLOR-EDIT SECTION ");
	const root = useRef();
	const [state, setState] = useState(0);

	const { data, error, loading } = useQuery(GET_PARALLEL_SLIDE);

	const activate = (direction) => {
		if (direction === "next") {
			if (state <= data.length - 2) {
				setState(state + 1);
			} else {
				setState(0);
			}
		}
		if (direction === "prev") {
			if (state > 0) {
				setState(state - 1);
			} else {
				setState(data.length - 1);
			}
		}
	};

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

	if (loading) return "";
	if (error) return "";

	let { id, parallel_slide_display } = data?.getParallelSlide;
	console.log("GEM-COLOR- EDIT COMPONENT ::", parallel_slide_display);

	return (
		<div ref={root} className="gem_color-container">
			{parallel_slide_display.map((g, index) => (
				<div
					key={`${index + g.parallelS_description}`}
					className={`gem_container  ${index === state ? "active" : ""}`}>
					<video
						className="gem_video main_image"
						type="video/mp4"
						src={g.parallelS_main_media[0]}
						/* autoPlay
						loop
						muted */
					/>
				</div>
			))}
			{parallel_slide_display.map((g, index) => (
				<div
					key={`${index * 2 + g.parallelS_description}`}
					className="gem_image_container ">
					<div
						className={`gem_image_container2 ${
							index === state ? "active" : ""
						}`}>
						<img
							className="gem_image"
							src={g.parallelS_secondary_media[0]}
							alt=""
						/>
						<div className="command_container">
							<h1>SHOP {g.parallelS_description}..</h1>
						</div>
					</div>
				</div>
			))}

			<div onClick={() => activate("prev")} className="btn prev"></div>
			<div className="progress">
				{[...new Array(parallel_slide_display.length)].map((r, index) => (
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

export default GemColorEdit;
