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
	const [active, setActive] = useState();

	const { gem, coll, cat } = selected;

	/* useEffect(() => {
		console.log("----- MOUSELEVE EFFECT");
		let filter = document.querySelectorAll(".shop_dropdown-container");

		let deactivate = (e) => {
			Object.keys(active).map((a) => {
				if (active[a] === "triggered") {
					setActive({ ...active, [a]: "closed" });
				}
			});
		};

		//console.log("-------filter", filter);
		filter.forEach((filt) => {
			filt.addEventListener("mouseleave", deactivate);
		});

		return () =>
			filter.forEach((filt) => {
				filt.removeEventListener("mouseleave", deactivate);
			});
	}, [active]); */

	useEffect(() => {
		const fixAndSlideFilter = () => {
			console.log("SHOP NAVIGATION SCROLL LISTENER");
			let container = document.querySelector(".filter_container ");
			let allSubContainers = document.querySelectorAll(
				".shop_dropdown-container"
			);
			let allTitles = document.querySelectorAll(".shop_dropdown_selected");
			let { top: containerTop } = container.getBoundingClientRect();
			let navBar = document.querySelector(".navContainer")
				? document.querySelector(".navContainer")
				: document.querySelector(".navbar-mobile");

			let { height: navBarHeight } = navBar.getBoundingClientRect();

			console.log("CONTAINER TOP", containerTop, "NAVBAR HEIGHT", navBarHeight);
			if (containerTop <= navBarHeight) {
				container.style.top = `${navBarHeight - 5}px`;
				allSubContainers.forEach((option, index) => {
					option.style.flexBasis = "33.333%";
					option.style.padding = "1vh 0";
					if (index === allSubContainers.length - 1) {
						setTimeout(() => {
							allTitles.forEach((option) => {
								option.style.border = "none";
								option.style.fontSize = "larger";
								option.style.textAlign = "center";
							});
						}, 500);
					}
				});

				container.style.borderBottom = "3px double var(--counter_light)";
				container.style.padding = "0";

				/* navBar.style.borderBottom = "none"; */
			}
			if (window.scrollY === 0 || containerTop > navBarHeight) {
				allSubContainers.forEach((option, index) => {
					option.style.flexBasis = "90%";
					option.style.padding = "0.5vh 0.5vw";
					if (index === allSubContainers.length - 1) {
						setTimeout(() => {
							allTitles.forEach((option) => {
								option.style.borderBottom = "1px solid var(--counter_light)";
								option.style.fontSize = "clamp(16px, 1.5vw, 29px)";
								option.style.textAlign = "left";
							});
						}, 500);
					}
				});

				container.style.borderBottom = "none";
				container.style.paddingLeft = "10%";
				navBar.style.borderBottom = "1px solid var(--counter_light)";
			}

			// when container is at the top , fix it
		};

		window.addEventListener("scroll", fixAndSlideFilter);
		return () => window.removeEventListener("scroll", fixAndSlideFilter);
	}, []);

	return (
		<div className="filter_container">
			<div
				className={`shop_dropdown-container ${
					active === "category" ? "--active" : ""
				}`}>
				<p
					className={`shop_dropdown_selected ${
						active === "category" ? "--active" : ""
					}`}
					onClick={() => setActive(active === "category" ? "" : "category")}>
					{cat ? cat : "Categories"}
				</p>
				<div
					className={`shop_dropdown_wrapper category-wrapper${
						active === "category" ? "--active" : ""
					}`}>
					{listCat.map((arr, index) => (
						<div
							key={index}
							onClick={() => addToFilter("catFilt", arr.id)}
							className={`shop_dropdown ${
								catFilt.includes(arr.id) ? "filter" : ""
							}`}>
							<p>{arr.name}</p>
						</div>
					))}
				</div>
			</div>
			<div
				className={`shop_dropdown-container ${
					active === "collection" ? "--active" : ""
				}`}>
				<p
					className={`shop_dropdown_selected ${
						active === "collection" ? "--active" : ""
					}`}
					onClick={() =>
						setActive(active === "collection" ? "" : "collection")
					}>
					{coll ? coll : "Collections"}
				</p>
				<div
					className={`shop_dropdown_wrapper collection-wrapper${
						active === "collection" ? "--active" : ""
					}`}>
					{listColl.map((arr, index) => (
						<div
							key={index}
							onClick={() => addToFilter("collFilt", arr.id)}
							className={`shop_dropdown ${
								collFilt && collFilt.includes(arr.id) ? "filter" : ""
							}`}>
							<p>{arr.name}</p>
						</div>
					))}
				</div>
			</div>
			<div
				className={`shop_dropdown-container ${
					active === "gem" ? "--active" : ""
				}`}>
				<p
					className={`shop_dropdown_selected ${
						active === "gem" ? "--active" : ""
					}`}
					onClick={() => setActive(active === "gem" ? "" : "gem")}>
					{gem ? gem : "Gems"}
				</p>
				<div
					className={`shop_dropdown_wrapper gem-wrapper${
						active === "gem" ? "--active" : ""
					}`}>
					{gems.map((arr, index) => (
						<div
							key={index}
							onClick={() => addToFilter("gemFilt", arr)}
							className={`shop_dropdown ${
								gemFilt && gemFilt.includes(arr) ? "filter" : ""
							}`}>
							<p>{arr}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
export default ShopNav;
