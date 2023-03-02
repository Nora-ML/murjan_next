import React, { useContext } from "react";
import { FilterContext } from "../../components/context/filterContext";
import ShopHero from "../../components/shop/shop_hero";
import ShopNav from "../../components/shop/shop_nav.js";
import ShopItems from "../../components/shop/shop_items";
import Pagination from "../../components/shop/pagination";
// Queries and mutation
import { useQuery } from "@apollo/client";
import {
	LIST_CATEGORIES,
	LIST_COLLECTION,
} from "../../components/helpers/list";
import { getCookie } from "../../components/helpers/auth";

const ShopPage = ({ query, cookie }) => {
	console.log("Shop page query", query, "cookie", cookie);

	const { data: categories } = useQuery(LIST_CATEGORIES);
	const { data: collections } = useQuery(LIST_COLLECTION);

	console.log(
		"***** SHOP PAGE :  categories",
		categories,
		"Collection:",
		collections
	);

	let itemsPerpage = 15;

	return (
		<div className="shop_page_container">
			{categories && collections && (
				<ShopHero
					listCat={categories.listCategories}
					listColl={collections.listCollections}
				/>
			)}
			{categories && collections && (
				<ShopNav
					listCat={categories.listCategories}
					listColl={collections.listCollections}
				/>
			)}
			<ShopItems itemsPerPage={itemsPerpage} currentPage={query.page} />
			<Pagination itemsPerPage={itemsPerpage} currentPage={query.page} />
		</div>
	);
};

export async function getServerSideProps(context) {
	const cookie = getCookie("filter", context.req);
	console.log("cookie", decodeURIComponent(cookie));

	return { props: { cookie: cookie, query: context.query } };
}

export default ShopPage;
