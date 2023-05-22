import React, { useEffect, useRef, useState, useContext } from "react";
import { useQuery } from "@apollo/client";
import { GET_LANDING } from "../helpers/landing";
import { LandingContext } from "../context/landingContext";
//animation
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PreLoader = ({ triggerHero }) => {
	console.log("Landing --- PRE Loader ");
	const { setLanding, landingInContext, heroVideoLoaded, setHeroVideo } =
		useContext(LandingContext);

	const { data, error, loading } = useQuery(GET_LANDING);

	let landingContent = data?.getLanding || {};

	if (loading) console.log("GET_HERO :: LOADING");
	if (landingContent) console.log("GET_HERO :: RESPONSE", landingContent[0]);

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
		console.log("PRE-LOADER ::if LANDING DATA fetched ");

		if (landingContent && !state) {
			console.log("PRE-LOADER :: passing landing data to context ");

			setLanding(landingContent[0]);
		}
	}, [landingContent]);

	/* useEffect(() => {
		console.log("PRE-LOADER ::checking if data is in context");

		if (landingInContext && landingInContext.hero && !state) {
			console.log("PRE-LOADER ::data in context setState to true land");
			var req = new XMLHttpRequest();
			let heroVideo = landingInContext.hero.hero_media[0];
			req.open("GET", heroVideo, true);
			req.responseType = "blob";

			req.onload = function () {
				// Onload is triggered even on 404
				// so we need to check the status code
				if (this.status === 200) {
					var videoBlob = this.response;
					var vid = URL.createObjectURL(videoBlob); // IE10+
					// Video is now downloaded
					// and we can set it as source on the video element
					console.log("VID ---------", vid);
					setHeroVideo(vid);
				}
			};
			req.onerror = function () {
				console.log("ERROR BLOBBIN");
			};
			req.send();
	
		}
	}, [landingInContext]); */

	useEffect(() => {
		console.log("PRE-LOADER ::checking if data is in context");
		let timer = null;
		if (landingInContext && !state) {
			console.log("PRE-LOADER ::landingInContext ****", landingInContext);

			setState(true);

			if (timer !== null) {
				clearTimeout(timer);
			}
			timer = setTimeout(() => {
				console.log(
					"PRE-LOADER ::  800ms passed, setState to True to trigger slide out "
				);
				triggerHero(true);
			}, 1000);
		}
	}, [landingInContext]);

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
