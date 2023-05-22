import React, { useRef, useLayoutEffect, useEffect, useState } from "react";
import Script from "next/script";
import Image from "next/image";
import { useQuery } from "@apollo/client";
import { LIST_COLLECTION } from "../helpers/list";

const Collection = () => {
	console.log("Landing -- Collection ");

	const { data, loading, error } = useQuery(LIST_COLLECTION);
	const [slideNumber, setSlide] = useState(1);

	if (loading) <h2>LOAding</h2>;
	if (error) <h2>Error</h2>;

	const collection = data ? data.listCollections : "";

	useEffect(() => {
		const triggerCollection = () => {
			console.log("Trigger Collection");
			let stickyArea = document.querySelector(".landing-collection__sticky");
			let landingMain = document.querySelector(".landing-collection");
			let landingTop = landingMain.getBoundingClientRect().top;
			let { top: stickyTop } = stickyArea.getBoundingClientRect();
			let height = window.innerHeight;
			let numberofItems = collection.length;
			let heightofEach = height / numberofItems;

			/* console.log(
				"collection main area data->",
				height,
				"numberof items",
				numberofItems
			); */
			if (stickyTop == 0) {
				/* console.log(
					"STICKY TOP *******,",
					window.scrollY,
					"landingMain",
					landingMain.getBoundingClientRect(),
					"first slide Trigger",
					-heightofEach * slideNumber
				); */
				landingMain.style.zIndex = "0";
				stickyArea.style.clipPath = "circle(150% at 50% 100%)";

				if (
					landingTop < -heightofEach * slideNumber &&
					slideNumber < numberofItems
				) {
					//console.log("CHANGING HEAD OPACITY", slideNumber);

					let card2 = document.getElementById("collHead" + slideNumber);
					let card2Image = document.getElementById("collImage" + slideNumber);
					let card2theImage = document.getElementById("theImage" + slideNumber);
					card2.style.opacity = "1";

					card2Image.style.clipPath = "inset(0% 0 0 0)";
					card2Image.style.opacity = "1";
					card2theImage.style.scale = "1";

					let card = document.getElementById("collHead" + (slideNumber - 1));
					let cardImage = document.getElementById(
						"collImage" + (slideNumber - 1)
					);
					card.style.opacity = "0";
					setTimeout(() => {
						cardImage.style.clipPath = "inset(100% 0 0 0)";
					}, 1000);

					setSlide(slideNumber + 1);
				}
			} else {
				landingMain.style.zIndex = "0";
				stickyArea.style.clipPath = "circle(0% at 50% 100%)";
			}
		};

		window.addEventListener("scroll", triggerCollection);
		return () => window.removeEventListener("scroll", triggerCollection);
	}, [data, slideNumber]);

	return (
		<div className="landing-collection">
			<div className="landing-collection__intro">
				{/* <h1>BE exceptional</h1>
				<h2>Be Glamourous</h2>
				<h2>Be Glamourous</h2>
				<h2>Be Glamourous</h2> */}
			</div>
			<div className="landing-collection__sticky">
				<div className="collection-header">
					{collection &&
						collection.map((coll, index) => (
							<div
								id={"collHead" + index}
								key={"collHead" + index}
								className="header-card">
								<h1 className="header-text">{coll.name}</h1>
							</div>
						))}
				</div>
				<div className="collection-image">
					{collection &&
						collection.map((coll, index) => (
							<div
								id={"collImage" + index}
								key={index + coll.name}
								className="image-card">
								<Image
									id={"theImage" + index}
									layout="fill"
									className="image-img"
									src={coll.image[0]}
									alt=""
								/>
							</div>
						))}
				</div>
			</div>
		</div>
	);
};

export default Collection;
