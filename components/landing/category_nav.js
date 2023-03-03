import React, { useRef, useEffect, useLayoutEffect } from "react";
import Image from "next/image";
import { useQuery } from "@apollo/client";
import { FEATURED_PRODUCTS } from "../helpers/product";

const CategoryNav = () => {
	console.log("Landing -- Category");

	const { data, error, loading } = useQuery(FEATURED_PRODUCTS);

	if (loading) <h2>Loading</h2>;
	if (error) <h2>Error</h2>;
	const featured = data ? data.featuredProducts : "";

	return (
		<div className="landing-category">
			<div className="landing-category__sticky">
				<div className="category-headers">
					<h1 className="header-fixed">Trending</h1>
					<div className="header-dynamic">
						{featured &&
							featured.map((cat) => (
								<h1 key={cat.categoryId} className="header-dynamic__text">
									{cat.categoryName}
								</h1>
							))}
					</div>
				</div>
				<div className="category-products">
					{featured &&
						featured.map((cat, index) => (
							<div key={cat.categoryId + "" + index} className="each-category">
								<div className="each-category__product-card">
									{cat.featuredProducts.map((prod, index) => (
										<div key={prod.id + "" + index} className="product-image">
											<img
												className="featured_images"
												src={prod.image[0]}
												//layout="fill"
												//src={arrayImages[Math.floor(Math.random() * 6)]}
												alt=""
											/>
										</div>
									))}
								</div>
							</div>
						))}
				</div>
			</div>
		</div>
	);
};
export default CategoryNav;
