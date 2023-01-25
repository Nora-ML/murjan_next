import React, { useContext } from "react";
import { FilterContext } from "../components/context/filterContext";
import ShopHero from "../components/shop/shop_hero";
import ShopNav from "../components/shop/shop_nav.js";
import ShopItems from "../components/shop/shop_items";
// Queries and mutation
import { useQuery } from "@apollo/client";
import {
	LIST_CATEGORIES,
	LIST_COLLECTION,
	LIST_PRODUCTS,
} from "../components/helpers/list";
import { FILTER_PRODUCTS } from "../components/helpers/filter";

const Shop = () => {
	console.log("Shop page");
	const { gemFilt, collFilt, catFilt } = useContext(FilterContext);
	const { data, loading, error } =
		catFilt.length > 0 || collFilt.length > 0
			? useQuery(FILTER_PRODUCTS, {
					variables: { category: catFilt, collection: collFilt },
			  })
			: useQuery(LIST_PRODUCTS);
	const { data: categories } = useQuery(LIST_CATEGORIES);
	const { data: collections } = useQuery(LIST_COLLECTION);

	if (error) <h1>Errror ....</h1>;
	if (loading) <h1>Loading ....</h1>;

	const products =
		catFilt.length > 0 || collFilt.length > 0
			? data?.filterProducts
			: data?.listProducts;

	console.log(
		"--- Shop Page gem :",
		gemFilt,
		"coll :",
		collFilt,
		"cat :",
		catFilt,
		"\nproducts,",
		products
	);

	return (
		<div className="shop_page_container">
			<ShopHero />
			{categories && collections && (
				<ShopNav
					listCat={categories.listCategories}
					listColl={collections.listCollections}
				/>
			)}
			{products && <ShopItems products={products} />}
		</div>
	);
};
export default Shop;
