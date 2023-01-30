import React, { useEffect, useContext } from "react";
import { FilterContext } from "../context/filterContext";

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ShopHero = ({ listCat, listColl }) => {
	const { gemFilt, collFilt, catFilt } = useContext(FilterContext);

	const filterbyCat =
		listCat && catFilt.length > 0
			? catFilt.map(
					(category) => listCat.filter((categ) => category === categ.id)[0].name
			  )
			: "";
	const filterByColl =
		listColl && collFilt.length > 0
			? collFilt.map(
					(collection) =>
						listColl.filter((coll) => collection === coll.id)[0].name
			  )
			: "";

	useEffect(() => {
		const tl = gsap.timeline({});

		tl.fromTo(
			".shop_header ",
			{
				scale: 1.4,
				yPercent: 150,
				xPercent: 10,
			},
			{
				yPercent: 0,
				xPercent: 0,
				delay: 0.1,
				scale: 1,
				ease: "slow",
				duration: 0.7,
			},
			0
		).fromTo(
			".shop_subheader",
			{
				scale: 1.4,
				yPercent: 150,
				xPercent: 10,
			},
			{
				yPercent: 0,
				xPercent: 0,
				delay: 0.1,
				scale: 1,
				ease: "slow",
				duration: 0.7,
			},
			0
		);
	});

	const selectedCat = () => {
		if (filterbyCat && filterbyCat.length >= 1) {
			let factor = filterbyCat.length - 1;
			return (
				<h4 className="shop_header_dynamic">
					{filterbyCat.map((cat, index) => (
						<span
							className="categories_selected"
							style={{
								fontSize: ` clamp(${55 - factor * 2}px, ${7 - factor}vw, ${
									150 - factor * 5
								}px) `,
								textTransform: "capitalize",
								fontStyle: "italic",
							}}>
							{cat}
							{index === factor - 1 ? " and " : index === factor ? "" : ","}
						</span>
					))}
					;
				</h4>
			);
		} else {
			return <h4 className="shop_header">Products</h4>;
		}
	};
	const selectedColl = () => {
		if (filterByColl && filterByColl.length >= 1) {
			let factor = filterByColl.length - 1;
			return filterByColl.map((cat, index) => (
				<span
					style={{
						textTransform: "capitalize",
						fontStyle: "italic",
					}}>
					{cat}
					{index === factor - 1 ? " and " : index === factor ? "" : ","}
				</span>
			));
		} else {
			return <span>ALL</span>;
		}
	};

	return (
		<div className="shop_hero_container">
			<div className="shop_subheader_container">
				<h4 className="shop_subheader">Products</h4>
			</div>
			<div className="shop_header_container">
				<h4 className="shop_header">All</h4>
				{selectedCat()}
			</div>
			<div className="shop_subheader_container">
				<h4 className="shop_subheader shop_post_header">
					Collections: {selectedColl()}
				</h4>
			</div>
		</div>
	);
};
export default ShopHero;
