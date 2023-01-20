import React from "react";
import ShopHero from "../components/shop/shop_hero";
import ShopNav from "../components/shop/shop_nav.js";
import ShopItems from "../components/shop/shop_items";
import { useQuery } from "@apollo/client";
import {
	LIST_CATEGORIES,
	LIST_COLLECTION,
	LIST_PRODUCTS,
} from "../components/helpers/list";

const Shop = () => {
	console.log("Shop page");
	const { data, loading, error } = useQuery(LIST_PRODUCTS);
	const { data: categories } = useQuery(LIST_CATEGORIES);
	const { data: collections } = useQuery(LIST_COLLECTION);

	if (error) <h1>Errror ....</h1>;
	if (loading) <h1>Loading ....</h1>;

	console.log(
		"SHOP COMPONENT collections",
		collections,
		"categories",
		categories
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
			{data && <ShopItems products={data.listProducts} />}
		</div>
	);
};
export default Shop;
