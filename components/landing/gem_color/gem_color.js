import React, {
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
	useContext,
} from "react";
import { useQuery } from "@apollo/client";
import { GET_PARALLEL_SLIDE } from "../../helpers/landing";
import dynamic from "next/dynamic";
import { LandingContext } from "../../context/landingContext";
import Image from "next/image";
import dot2 from "../../../public/static/icons/pink_circle.png";
const CategoryNav = dynamic(() => import("../category_nav.js"));
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GemColor = ({ child }) => {
	console.log("PARALLEL SLIDE");
	const root = useRef();
	const [state, setState] = useState(0);
	const { landingInContext } = useContext(LandingContext);
	let { parallel_slide_display } = landingInContext;

	console.log("GET_PARALLEL SLIDE :: RESPONSE ::", parallel_slide_display);

	/*const { data, error, loading } = useQuery(GET_PARALLEL_SLIDE);

	 if (loading) console.log("GET_PARALLEL SLIDE:: LOADING");
	if (data) {
		console.log("GET_PARALLEL SLIDE :: RESPONSE ::", data);
	} */

	useEffect(() => {
		console.log("GET_PARALLEL SLIDE :: USeeffect , wait ...");
		if (landingInContext) {
			console.log("GET_PARALLEL SLIDE :: USeeffect , ... done");
		}
	}, [landingInContext]);
	/* 	useLayoutEffect(() => {
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
	}, []); */

	/* if (loading) return "";
	if (error) return "";

	let { parallel_slide_display } = data?.getParallelSlide; */
	//console.log("PARALLEL SLIDE COMPONENT ::", parallel_slide_display);

	const activate = (direction) => {
		if (direction === "next") {
			if (state <= parallel_slide_display.length - 2) {
				setState(state + 1);
			} else {
				setState(0);
			}
		}
		if (direction === "prev") {
			if (state > 0) {
				setState(state - 1);
			} else {
				setState(parallel_slide_display.length - 1);
			}
		}
	};

	return (
		<>
			<div ref={root} className="parallel-slide-container">
				{parallel_slide_display.map((slide, index) => {
					let {
						slide_id,
						parallelS_main_media,
						parallelS_secondary_media,
						parallelS_description,
					} = slide;

					return (
						<div
							key={`${index + parallelS_description}`}
							className={`slide-contents ${index === state ? "active" : ""}`}>
							<div
								className="slide-main-media"
								style={index === state ? { zIndex: 2 } : { zIndex: 1 }}>
								<video
									className="slide_video"
									type="video/mp4"
									src={parallelS_main_media["desktop"]}
									title={parallelS_main_media["alt"]}
									autoPlay
									loop
									muted
								/>
								{child && child(slide)}
							</div>

							<div className="slide-secondary-media">
								<div className="slide-image-container">
									<img
										className="slide_image"
										src={parallelS_secondary_media["desktop"]}
										alt={parallelS_secondary_media["alt"]}
									/>
								</div>
								<div className="slide_action">
									<h1>{`${parallelS_description}..`}</h1>
								</div>
							</div>
						</div>
					);
				})}
				<div onClick={() => activate("prev")} className="btn prev"></div>
				{/* <div className="progress">
				{[...new Array(parallel_slide_display.length)].map((r, index) => (
					<div key={index + ""}>
						<img
							className={`progress_dot ${index === state ? "active" : ""}`}
							src={dot2}
							alt="progress dot"
						/>
					</div>
				))}
			</div> */}
				<div onClick={() => activate("next")} className="btn next"></div>
			</div>

			<CategoryNav />
		</>
	);
};

export default GemColor;
