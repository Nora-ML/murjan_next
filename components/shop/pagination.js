import React, { useEffect, useContext, useState, useLayoutEffect } from "react";
import { FilterContext } from "../context/filterContext";
import { useQuery } from "@apollo/client";
import Router from "next/router";

import Link from "next/link";
import { COUNT_PRODUCTS } from "../helpers/product";

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Pagination = ({ itemsPerPage, currentPage }) => {
	console.log(
		"** Pagination component itemsPerPage ",
		itemsPerPage,
		"currentPage",
		currentPage
	);
	const { gemFilt, collFilt, catFilt } = useContext(FilterContext);
	const { data, loading, error } = useQuery(COUNT_PRODUCTS, {
		variables: {
			category: catFilt.length > 0 ? catFilt : [],
			collection: collFilt.length > 0 ? collFilt : [],
		},
	});
	if (loading) return null;
	if (error) return error;

	let numberOfItems = data.countProducts.count;
	let numberOfPages = Math.ceil(numberOfItems / itemsPerPage);

	if (currentPage > 1 && numberOfItems <= itemsPerPage) {
		Router.push({ pathname: "/shop/1" });
	}

	return (
		<div className="pagination">
			{[...new Array(numberOfPages)].map((e, index) => {
				console.log(
					"index + 1 === currentPage",
					index + 1 === parseInt(currentPage)
				);
				return (
					<Link href={`/shop/${index + 1}`}>
						<p
							key={`pageNumber_${index}`}
							className={`page_number page_number${
								index + 1 === parseInt(currentPage) ? "-active" : ""
							}`}>
							{index + 1}
						</p>
					</Link>
				);
			})}
		</div>
	);
};
export default Pagination;
