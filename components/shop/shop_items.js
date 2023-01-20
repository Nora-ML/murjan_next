import React, { useEffect, useContext, useState, useLayoutEffect } from "react";
import { useQuery } from "@apollo/client";
import Item from "./item";
import { SizeContext } from "../context/sizeContext";
import { Link } from "react-router-dom";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ShopItems = ({ products }) => {
	console.log("shop Items component");
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

			for (let i = 0; i < 3; i++) {
				if (products[i]) {
					first.push(<Item key={i} size={""} loc="" product={products[i]} />);
				}
			}
			for (let i = 3; i < 6; i++) {
				if (products[i]) {
					second.push(
						i === 5 ? (
							<Item
								key={i}
								size={"large"}
								loc={`_${i}`}
								product={products[i]}
							/>
						) : (
							<Item key={i} size={""} loc={`_${i}`} product={products[i]} />
						)
					);
				}
			}
			for (let i = 6; i < 9; i++) {
				if (products[i]) {
					third.push(<Item key={i} size={""} loc="" product={products[i]} />);
				}
			}
			for (let i = 9; i < 12; i++) {
				if (products[i]) {
					fourth.push(
						i === 9 ? (
							<Item
								key={i}
								size={"large"}
								loc={`_${i}`}
								product={products[i]}
							/>
						) : (
							<Item key={i} size={""} loc={`_${i}`} product={products[i]} />
						)
					);
				}
			}
			for (let i = 12; i < 15; i++) {
				if (products[i]) {
					fifth.push(<Item key={i} size={""} loc="" product={products[i]} />);
				}
			}

			return (
				<div className="shop_large_container">
					<div className="shopItems">
						<div className="shopItems_1">{first}</div>
						<div className="shopItems_2">{second}</div>
						<div className="shopItems_3">{third}</div>
						<div className="shopItems_4">{fourth}</div>
						<div className="shopItems_5">{fifth}</div>
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
