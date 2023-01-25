import { useState, useEffect, useContext } from "react";
import { IconStyle } from "./Z_Style_Icons.js";
import ProductAdd from "../admin/Product_Add_Update";
import CategoryAdd from "../admin/Category_Add_Update.js";
import CollectionAdd from "../admin/Collection_Add_Update.js";
import TagAdd from "../admin/Tag_Add_Update.js";
import OfferAdd from "../admin/Offer_Add_Update.js";
import { UserContext } from "../context/userContext.js";
import { useQuery } from "@apollo/client";

import {
	GET_PRODUCT,
	GET_COLLECTION,
	GET_CATEGORY,
	GET_TAG,
	GET_OFFER,
} from "../helpers/getItemById";

const Edit = ({ id, type }) => {
	const { access } = useContext(UserContext) || {};
	const [state, setState] = useState(false);
	const [classN, setClassN] = useState("initialPage");
	const [trigger, setTrigger] = useState(false);

	const edit = async (e) => {
		if (access && access === "admin_full") {
			console.log("EDIT product function");
			const location_X = e.target.getBoundingClientRect().x;
			const location_Y = e.target.getBoundingClientRect().y;
			const window_height = window.innerHeight;
			const window_width = window.innerWidth;
			const x = Math.round((location_X / window_width) * 100);
			const y = Math.round((location_Y / window_height) * 100);
			setClassN("openPage");
			setState(`circle(0% at ${x}% ${y}%)`);
			setTrigger(true);
		} else {
			alert("You are Not authorized to Edit an item");
		}
	};

	const { data } =
		type === "product"
			? useQuery(GET_PRODUCT, { variables: { id }, skip: !trigger })
			: type === "category"
			? useQuery(GET_CATEGORY, { variables: { id }, skip: !trigger })
			: type === "collection"
			? useQuery(GET_COLLECTION, { variables: { id }, skip: !trigger })
			: type === "tag"
			? useQuery(GET_TAG, { variables: { id }, skip: !trigger })
			: type === "offer"
			? useQuery(GET_OFFER, { variables: { id }, skip: !trigger })
			: "";

	const componentPerType = () =>
		type === "product" ? (
			<ProductAdd
				classInitial={classN}
				data={data}
				location={state}
				alterClass={() => setClassN("closePage")}
			/>
		) : type === "category" ? (
			<CategoryAdd
				classInitial={classN}
				data={data}
				location={state}
				alterClass={() => setClassN("closePage")}
			/>
		) : type === "collection" ? (
			<CollectionAdd
				classInitial={classN}
				data={data}
				location={state}
				alterClass={() => setClassN("closePage")}
			/>
		) : type === "tag" ? (
			<TagAdd
				classInitial={classN}
				data={data}
				location={state}
				alterClass={() => setClassN("closePage")}
			/>
		) : type === "offer" ? (
			<OfferAdd
				classInitial={classN}
				data={data}
				location={state}
				alterClass={() => setClassN("closePage")}
			/>
		) : (
			""
		);

	return (
		<>
			<IconStyle
				src="https://www.freeiconspng.com/thumbs/edit-icon-png/edit-editor-pen-pencil-write-icon--4.png"
				alt="Edit icon"
				onClick={edit}
			/>
			{classN !== "initialPage" && componentPerType()}
		</>
	);
};
export default Edit;
