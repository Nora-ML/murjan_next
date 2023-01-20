import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// shopping page requirments:
// 1- Pre header
// 2- Header

const ShopHero = () => {
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
		)
		.fromTo(
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

	return (
		<div className="shop_hero_container">
			<div className="shop_subheader_container">
				<h4 className="shop_subheader">Products</h4>
			</div>
			<div className="shop_header_container">
				<h4 className="shop_header">All Products</h4>
			</div>
		</div>
	);
};
export default ShopHero;
