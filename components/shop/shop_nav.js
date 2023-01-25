import React, { useEffect, useState, useContext } from "react";
import { FilterContext } from "../context/filterContext.js";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ShopNav = ({ listCat, listColl }) => {
	const { addToFilter, gemFilt, collFilt, catFilt } = useContext(FilterContext);

	const [gems, setGems] = useState([
		"gem0",
		"gem1",
		"gem2",
		"gem3",
		"gem4",
		"gem5",
		"gem6",
	]);

	const [selected, setSelected] = useState({ gem: "", coll: "", cat: "" });
	const [active, setActive] = useState({
		gemAct: "initial",
		collAct: "initial",
		catAct: "initial",
	});

	const { gem, coll, cat } = selected;

	const { gemAct, collAct, catAct } = active;

	// activates (display) particular filter option
	const activate = (e, name) => {
		//console.log("Activate,", e, name, "activeState", active);
		let change = {};
		if (active[name] === "triggered") {
			//console.log("CLOSING");
			change[name] = "closed";
		} else {
			//console.log("Triggering", name);
			change[name] = "triggered";
		}
		Object.keys(active).map((a) => {
			if (a !== [name] && active[a] === "triggered") {
				//console.log("closing ", a, "active", active);
				change[a] = "closed";
			}
		});
		setActive({ ...active, ...change });
	};

	// pinning the filter and sliding contents
	useEffect(() => {
		console.log("useEffect Pinning filter");
		let ww = window.innerWidth;

		if (ww > 770) {
			console.log("window greater than 770", ww);
			gsap.to(".shop_dropdown-container", {
				scrollTrigger: {
					trigger: ".shop_dropdown-container",
					toggleActions: "play play none reverse",
					pin: ".filter_container",
					// markers: true,
					pinSpacing: false,
					end: "+=3000",
					start: "top top+=10%",
					duration: 5,
					ease: "slow(0.7, 0.7, false)",
				},
				xPercent: 20,
			});
		} else {
			console.log("****** OR ELSE");
			gsap.to(
				".filter_container",
				{
					scrollTrigger: {
						trigger: ".filter_container",
						pin: ".filter_container",
						toggleActions: "play play none reverse",
						//markers: true,
						pinSpacing: false,
						start: "top+=10% top+=5%",
						end: "+=6000",
					},
				},
				0
			);

			ScrollTrigger.batch(
				".shop_dropdown-container",
				{
					interval: 1,
					onEnter: (batch) => {
						batch.forEach((filter, index) => {
							gsap.to(filter, {
								keyframes: [
									{ xPercent: `${100 * index - 30}` },
									{ yPercent: `${index > 0 ? -100 * index : 0}`, delay: -0.5 },
								],
								scrollTrigger: {
									trigger: filter,
									toggleActions: "play play none reverse",
									//markers: true,
									start: `top-=${index * 8}% top+=5%`,
									end: `top-=${index * 8}% top+=5%`,
									duration: 5,
									ease: "slow(0.7, 0.7, false)",
								},
								width: `${100 / 3}vw`,
								stagger: 0.1,
							});
						});
					},
					onLeave: () => {
						gsap.to(".filter_container", {
							duration: 0.5,
							delay: -0.2,
							clipPath: "inset(0% 0% 70% 0%)",
						});
					},
					onEnterBack: () => {
						gsap.to(".filter_container", {
							duration: 0.5,
							delay: -1,
							clipPath: "inset(0% 0% 0% 0%)",
						});
					},
				},
				0
			);
		}
	}, []);

	useEffect(() => {
		console.log("----- MOUSELEVE EFFECT");
		let filter = document.querySelectorAll(".shop_dropdown-container");

		let deactivate = (e) => {
			Object.keys(active).map((a) => {
				if (active[a] === "triggered") {
					setActive({ ...active, [a]: "closed" });
				}
			});
		};

		console.log("-------filter", filter);
		filter.forEach((filt) => {
			filt.addEventListener("mouseleave", deactivate);
		});

		return () =>
			filter.forEach((filt) => {
				filt.removeEventListener("mouseleave", deactivate);
			});
	}, [active]);

	return (
		<div className="filter_container">
			<div className={`shop_dropdown-container ${catAct}`}>
				<p
					className="shop_dropdown_selected"
					onClick={(e) => activate(e, "catAct")}>
					{cat ? cat : "ALL Categories"}
				</p>
				<div className={`shop_dropdown_wrapper ${catAct}`}>
					{listCat.map((arr, index) => (
						<div
							key={index}
							onClick={() => addToFilter("catFilt", arr.id)}
							className={`shop_dropdown ${catAct} ${
								catFilt.includes(arr.id) ? "filter" : ""
							}`}>
							<p>{arr.name}</p>
						</div>
					))}
				</div>
			</div>
			<div className={`shop_dropdown-container ${collAct}`}>
				<p
					className="shop_dropdown_selected"
					onClick={(e) => activate(e, "collAct")}>
					{coll ? coll : "ALL Collections"}
				</p>
				<div className={`shop_dropdown_wrapper ${collAct}`}>
					{listColl.map((arr, index) => (
						<div
							key={index}
							onClick={() => addToFilter("collFilt", arr.id)}
							className={`shop_dropdown ${collAct} ${
								collFilt && collFilt.includes(arr.id) ? "filter" : ""
							}`}>
							<p>{arr.name}</p>
						</div>
					))}
				</div>
			</div>
			<div className={`shop_dropdown-container ${gemAct}`}>
				<p
					className="shop_dropdown_selected"
					onClick={(e) => activate(e, "gemAct")}>
					{gem ? gem : "ALL Gems"}
				</p>
				{/* <div className={`shop_dropdown_wrapper ${gemAct}`}>
					{gems.map((arr, index) => (
						<div
							key={index}
							onClick={() => addToFilter("gemFilt", arr)}
							className={`shop_dropdown ${gemAct} ${
								gemFilt && gemFilt.includes(arr) ? "filter" : ""
							}`}>
							<p>{arr}</p>
						</div>
					))}
				</div> */}
			</div>
		</div>
	);
};
export default ShopNav;
