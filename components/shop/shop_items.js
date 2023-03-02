import React, { useEffect, useContext, useState, useLayoutEffect } from "react";
import { useQuery } from "@apollo/client";
//Contexts
import { FilterContext } from "../context/filterContext";
import { SizeContext } from "../context/sizeContext";
// Components
import Item from "./item";
// GraphQl queries and mutations
import { FILTER_PRODUCTS } from "../../components/helpers/filter";
import { LIST_PRODUCTS } from "../../components/helpers/list";
// Animation Library
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ShopItems = ({ itemsPerPage, currentPage }) => {
	console.log(
		"***** Shop_Items component itemsPerPage",
		itemsPerPage,
		"currentPage",
		currentPage
	);
	// this will change on page navigation
	const size = useContext(SizeContext);
	const { gemFilt, collFilt, catFilt } = useContext(FilterContext);

	const { data, loading, error } =
		catFilt.length > 0 || collFilt.length > 0
			? useQuery(FILTER_PRODUCTS, {
					variables: {
						category: catFilt,
						collection: collFilt,
						limit: itemsPerPage * currentPage,
						skip: itemsPerPage * (currentPage - 1),
					},
			  })
			: useQuery(LIST_PRODUCTS, {
					variables: {
						limit: itemsPerPage * currentPage,
						skip: itemsPerPage * (currentPage - 1),
					},
			  });

	console.log("SHOP ITEM COMPO ---- data", data);

	if (loading) <h1>Loading ....</h1>;
	if (error) <h1>Errror ....</h1>;

	const products =
		catFilt.length > 0 || collFilt.length > 0
			? data?.filterProducts
			: data?.listProducts;

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
									/* markers: {
										startColor: "magenta",
										endColor: "black",
										indent: "5px",
										fontWeight: "15px",
									}, */
									start: "center-=10 bottom",
									end: "top bottom",
									toggleActions: "play play play reverse",
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
							{ scale: 1.15, yPercent: -10, opacity: 0 },
							{
								scrollTrigger: {
									trigger: item,
									//markers: true,
									start: "center-=10 bottom-=40",
									end: "top bottom",
									toggleActions: "play play play reverse",
								},
								scale: 0.9,
								duration: 0.8,
								yPercent: 0,
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
		console.log("LArge Window ", size);

		if (size === "desktop" || size === "large") {
			let first = [];
			let second = [];
			let third = [];
			let fourth = [];
			let fifth = [];

			if (products) {
				if (products.length === 1) {
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
			{!loading && products && size && size !== "desktop" && size !== "large"
				? smallWindow()
				: largeWindow()}
		</>
	);
};
export default ShopItems;
