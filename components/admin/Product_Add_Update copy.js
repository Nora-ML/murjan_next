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
import {
	AddPageStyle,
	UpdatePage,
	FormAndHeaderWrap,
} from "../styles/AddPageStyle";

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

	const [updateProduct] = useMutation(UPDATE_PRODUCT);

	if (categoriesLoading || collectionsLoading || tagsLoading)
		return <p>Loading Lists cat,coll n' tag..</p>;

	const categories = listCategories?.listCategories;
	const tags = listTags?.listTags;
	const collections = listCollections?.listCollections;
	const offers = listOffers?.listOffers;

	const activate = () => {
		if (access && (access === "admin_full" || access === "admin_limited")) {
			if (counter === 0 || counter === 1) {
				setCounter(2);
			} else {
				setCounter(1);
			}
		} else {
			alert("You are Not authorized To Add A Product");
		}
	};

	const formData = data
		? data.getProduct
		: {
				name: "",
				description: "",
				image: "",
				price: "",
				stock: "",
				item_tags: [],
				item_category: "",
				item_collection: "",
				item_offer: "",
				options: "subForm",
		  };

	const subForm = data
		? formData.options
		: { sizes: [], gems: [], metal_colors: [] };

	const imageData = { file: "", signedRequest: "" };

	let width = "85%";

	const formFrame = (fnc, header, btnsNumb, extraBtn, extraProperty) => {
		return (
			<Form_RComp
				formWidth={width}
				formFields={{ formData, subForm, imageData }}
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
						type: "text",
						label: "Size",
						name: "sizes",
						placeholder: "Seperate size by a comma please",
					},
					{
						type: "text",
						label: "Gems",
						name: "gems",
						placeholder: "Seperate gems by comma please",
					},
					{
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
							alterClass
					  )
					: ""}
			</FormAndHeaderWrap>
		</UpdatePage>
	);

	return data ? updatePage() : addPage();
};

export default ProductAdd;
