import { useState, useContext } from "react";
import { useMutation, useQuery } from "@apollo/client";
// Access current user from context
import { UserContext } from "../context/userContext";
// queries and mutations
import {
	LIST_CATEGORIES,
	LIST_PRODUCTS,
	LIST_COLLECTION,
	LIST_TAGS,
	LIST_OFFERS,
} from "../helpers/list";
import { UPDATE_PRODUCT } from "../helpers/update";
import { ADD_PRODUCT } from "../helpers/product";
//components
import Form_RComp from "../Forms/Form_RComp";
//styles
import { AddPageStyle, UpdatePage, FormAndHeaderWrap } from "./Z_Style_AddPage";

const ProductAdd = ({ data, location, classInitial, alterClass }) => {
	console.log("Product EDIT/ADD component data", data);
	const { access } = useContext(UserContext) || {};
	const [counter, setCounter] = useState(0);

	const {
		data: listCategories,
		error: categoriesError,
		loading: categoriesLoading,
	} = useQuery(LIST_CATEGORIES);
	const {
		data: listCollections,
		error: collectionsError,
		loading: collectionsLoading,
	} = useQuery(LIST_COLLECTION);
	const {
		data: listTags,
		error: tagsError,
		loading: tagsLoading,
	} = useQuery(LIST_TAGS);
	const {
		data: listOffers,
		error: offersError,
		loading: offersLoading,
	} = useQuery(LIST_OFFERS);

	const [addProduct] = useMutation(ADD_PRODUCT, {
		refetchQueries: [{ query: LIST_PRODUCTS }],
	});

	const [updateProduct] = useMutation(UPDATE_PRODUCT, {
		refetchQueries: [{ query: LIST_PRODUCTS }],
	});

	if (categoriesLoading || collectionsLoading || tagsLoading)
		return <p>Loading Lists cat,coll n' tag..</p>;

	const categories = listCategories?.listCategories;
	const tags = listTags?.listTags;
	const collections = listCollections?.listCollections;
	const offers = listOffers?.listOffers;

	const activate = () => {
		if (access && (access === "admin_full" || access === "admin_limited")) {
			if (categories.length < 1 || collections.length < 1) {
				alert("You Need to add Categories and collections first");
			} else {
				if (counter === 0 || counter === 1) {
					setCounter(2);
				} else {
					setCounter(1);
				}
			}
		} else {
			alert("You are Not authorized To Add A Product");
		}
	};

	console.log("data.getProduct", data);
	let fetchedForm = data && data.getProduct;

	console.log("fetchedForm", fetchedForm);

	const formData = {
		name: fetchedForm ? fetchedForm.name : "",
		description: fetchedForm ? fetchedForm.description : "",
		image: fetchedForm ? fetchedForm.images : [],
		price: fetchedForm ? fetchedForm.price : "",
		stock: fetchedForm ? fetchedForm.stock : "",
		item_tags: fetchedForm ? fetchedForm.item_tags : [],
		item_category: fetchedForm ? fetchedForm.item_category.id : "",
		item_collection: fetchedForm ? fetchedForm.item_collection.id : "",
		item_offer: fetchedForm ? fetchedForm.item_offer : "",
		options: {
			sizes: fetchedForm ? fetchedForm.options.sizes[0] : [],
			gems: fetchedForm ? fetchedForm.options.gems[0] : [],
			metal_colors: fetchedForm ? fetchedForm.options.metal_colors[0] : [],
		},
	};

	console.log("formData", formData);

	const imageData = [];

	let width = "85%";

	const formFrame = (
		fnc,
		header,
		btnsNumb,
		extraBtn,
		extraProperty,
		itemId
	) => {
		return (
			<Form_RComp
				formWidth={width}
				formFields={{ formData, imageData, itemId }}
				mutationFunction={[fnc]}
				/* mutationResponse={{ error }} */
				formHeader={`${header} Product`}
				mainFormInputs={[
					{
						type: "text",
						label: "Name",
						name: "name",
						placeholder: "Product Name..",
						required: "true",
					},
					/* Numbers */
					{
						type: "number",
						label: "Stock/QTY",
						name: "stock",
						placeholder: "0",
						required: "true",
					},
					{
						type: "number",
						label: "Price",
						name: "price",
						placeholder: "0",
						required: "true",
					},
					/* File */
					{
						type: "file",
						label: "Image",
						name: "image",
						required: "true",
					},
					/* Dropdown */
					{
						type: "dropdown",
						label: "Category",
						name: "item_category",
						required: "true",
						data: categories,
					},
					{
						type: "dropdown",
						label: "Collection",
						name: "item_collection",
						required: "true",
						data: collections,
					},
					{
						type: "dropdown",
						label: "Offers",
						name: "item_offer",
						data: offers,
					},
					{
						type: "dropdown",
						label: "Tags",
						name: "item_tags",
						data: tags,
						multiple: "true",
						additionalText: 'hold down "ctrl" for multiple selection',
					},
					/* textArea */
					{
						type: "textarea",
						label: "Description",
						name: "description",
						placeholder: "Product description..",
						required: "true",
					},
				]}
				subFormInputs={[
					{
						parentForm: "options",
						type: "text",
						label: "Size",
						name: "sizes",
						placeholder: "Seperate size by a comma please",
					},
					{
						parentForm: "options",
						type: "text",
						label: "Gems",
						name: "gems",
						placeholder: "Seperate gems by comma please",
					},
					{
						parentForm: "options",
						type: "text",
						label: "Metal Colors",
						name: "metal_colors",
						placeholder: "Seperate colors by comma please",
					},
				]}
				btnCount={btnsNumb}
				formButton={[extraBtn, { type: "submit", value: `${header} Product` }]}
				classN={extraProperty}
			/>
		);
	};

	const addPage = () => (
		<AddPageStyle
			className={
				!counter ? "initialPage" : counter === 2 ? "openPage" : "closePage"
			}>
			<div className="trigger" onClick={activate}>
				<h1>{counter === 2 ? "x" : "+"}</h1>
			</div>
			<FormAndHeaderWrap width={width}>
				<h1 className="form_header">New Product</h1>
				{counter === 2 ? formFrame(addProduct, "Add") : ""}
			</FormAndHeaderWrap>
		</AddPageStyle>
	);

	const updatePage = () => (
		<UpdatePage location={location} className={classInitial}>
			<FormAndHeaderWrap width={width}>
				<h1 className="form_header">Update Product</h1>
				{classInitial === "openPage"
					? formFrame(
							updateProduct,
							"Update",
							2,
							{ type: "cancel", value: "Cancel" },
							alterClass,
							{ id: fetchedForm.id }
					  )
					: ""}
			</FormAndHeaderWrap>
		</UpdatePage>
	);

	return data ? updatePage() : addPage();
};

export default ProductAdd;
