import React, { useEffect, useContext, useState, useLayoutEffect } from "react";
import { useQuery } from "@apollo/client";
import Item from "./item";
import { SizeContext } from "../context/sizeContext";
import { Link } from "react-router-dom";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ShopItems = ({ products }) => {
	console.log("shop Items component products", products);
	// this will change on page navigation
	const size = useContext(SizeContext);
	const [page, setPage] = useState(1);

	const [numberOfPages, setNumberOfPages] = useState(1);
	const [skip, setSkip] = useState(0);

	console.log("********* size", size);
	// animation
	useEffect(() => {
		console.log("animation shop_items");

		gsap.set(".image_wrapper", { yPercent: -10 });

		ScrollTrigger.batch(
			".image_wrapper",
			{
				onEnter: (batch) => {
					batch.forEach((item, index) => {
						gsap.fromTo(
							item,
							{ yPercent: 10 },
							{
								scrollTrigger: {
									trigger: item,
									// markers: true,
									start: "center-=10 bottom",
									end: "bottom bottom",
									toggleActions: "play play none reset",
								},
								yPercent: 0,
								duration: 0.9,
								ease: "none",
								delay: `${0.3 * index}`,
								opacity: 1,
								stagger: 0.2,
							}
						);
					});
				},
				once: true,
			},
			0
		);
		ScrollTrigger.batch(
			".shop_item-img",
			{
				onEnter: (batch) => {
					batch.forEach((item, index) => {
						gsap.fromTo(
							item,
							{ scale: 1.2, yPercent: -10 },
							{
								scrollTrigger: {
									trigger: item,
									//markers: true,
									start: "center-=10 bottom",
									end: "bottom bottom",
									toggleActions: "play play none reset",
								},
								scale: 0.9,
								duration: 0.5,
								yPercent: 10,
								opacity: 1,
								ease: "none",
								delay: `${0.3 * index}`,
								stagger: 0.3,
							}
						);
					});
				},
				once: true,
			},
			"-=25%"
		);
		ScrollTrigger.batch(
			".shop_item-details",
			{
				onEnter: (batch) => {
					batch.forEach((item, index) => {
						gsap.fromTo(
							item,
							{ yPercent: 20 },
							{
								scrollTrigger: {
									trigger: item,
									//markers: true,
									start: "bottom+=30 bottom",
									end: "bottom+=30 bottom",
									toggleActions: "play play none reset",
								},
								yPercent: 0,
								duration: 0.5,
								ease: "none",
								delay: `${0.3 * index}`,
								opacity: 1,
								stagger: 0.4,
							}
						);
					});
				},
				once: true,
			},
			"-=25%"
		);
	});

	const smallWindow = () => {
		console.log("Small WIndow", size);
		return (
			<div className="shop_items">
				{products.map((pro) => {
					return <Item size={""} product={pro} />;
				})}
			</div>
		);
	};

	const largeWindow = () => {
		const newArray = [...new Array(numberOfPages)];
		console.log("LArge Window ", size);
		console.log(newArray);

		if (size === "desktop" || size === "large") {
			let first = [];
			let second = [];
			let third = [];
			let fourth = [];
			let fifth = [];

			if (products && products.length === 1) {
				first.push(<Item specialClass="flatten" product={products[0]} />);
			} else {
				for (let i = 0; i < 3; i++) {
					products[i] ? first.push(<Item product={products[i]} />) : "";
				}
				for (let i = 3; i < 5; i++) {
					products[i] ? second.push(<Item product={products[i]} />) : "";
				}
				for (let i = 5; i < 10; i++) {
					products[i] ? third.push(<Item product={products[i]} />) : "";
				}
				for (let i = 10; i < 12; i++) {
					products[i] ? fourth.push(<Item product={products[i]} />) : "";
				}
				for (let i = 12; i < 15; i++) {
					products[i] ? fifth.push(<Item product={products[i]} />) : "";
				}
			}

			return (
				<div className="shop_large_container">
					<div className="shopItems">
						{first}
						{second.length > 0 ? (
							<div
								className={`vertical-wrapper ${
									third.length < 1 || second.length === 1 ? "flatten" : ""
								}`}>
								{second}
							</div>
						) : (
							""
						)}
						{third}
						{fourth.length > 0 ? (
							<div
								className={`vertical-wrapper ${
									fifth.length < 1 ? "flatten" : ""
								}`}>
								{fourth}
							</div>
						) : (
							""
						)}
						{fifth}
					</div>
				</div>
			);
		}
	};

	return (
		<>
			{products && size && size !== "desktop" && size !== "large"
				? smallWindow()
				: largeWindow()}
			<div className="pagination">
				{[...new Array(numberOfPages)].map((e, index) => (
					<p
						key={`pageNumber_${index}`}
						className={`page_number page_number${
							index + 1 === page ? "-active" : ""
						}`}
						onClick={() => fliptoToPage(index + 1)}>
						{index + 1}
					</p>
				))}
			</div>
		</>
	);
};
export default ShopItems;
