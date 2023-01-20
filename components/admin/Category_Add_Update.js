import { useState, useContext } from "react";
import { useMutation } from "@apollo/client";
// Access current user from context
import { UserContext } from "../context/userContext";
// queries and mutations
import { LIST_CATEGORIES } from "../helpers/list";
import { ADD_CATEGORY } from "../helpers/Add";
import { UPDATE_CATEGORY } from "../helpers/update";
// components
import Form_RComp from "../Forms/Form_RComp";
// styles
import { AddPageStyle, UpdatePage, FormAndHeaderWrap } from "./Z_Style_AddPage";

const CategoryAdd = ({ data, location, classInitial, alterClass }) => {
	//console.log("Category EDIT/ADD component data", data);
	const { access } = useContext(UserContext) || {};
	const [counter, setCounter] = useState(0);

	const [addCategory] = useMutation(ADD_CATEGORY, {
		refetchQueries: [{ query: LIST_CATEGORIES }],
	});

	const [updateCategory] = useMutation(UPDATE_CATEGORY);

	const activate = () => {
		if (access && (access === "admin_full" || access === "admin_limited")) {
			if (counter === 0 || counter === 1) {
				setCounter(2);
			} else {
				setCounter(1);
			}
		} else {
			alert("You are Not authorized To Add A CATEORY");
		}
	};

	const formData = data
		? data.getCategory
		: { name: "", description: "", slug: "", image: "" };

	const imageData = { file: "", signedRequest: "" };

	let width = "60%";

	const formFrame = (fnc, header, btnsNumb, extraBtn, extraProperty) => {
		return (
			<Form_RComp
				formWidth={width}
				formFields={{ formData, imageData }}
				mutationFunction={[fnc]}
				//mutationResponse={{ loading, error, data }}
				formHeader={`${header} Category`}
				mainFormInputs={[
					{
						type: "text",
						label: "Name",
						name: "name",
						placeholder: "Category Name..",
						required: "true",
					},
					{
						type: "text",
						label: "Slug",
						name: "slug",
						placeholder: "Slug ..",
					},
					/* textArea */
					{
						type: "textarea",
						label: "Description",
						name: "description",
						placeholder: "Category description..",
						required: "true",
					},

					/* File */
					{
						type: "file",
						label: "Image",
						name: "image",
					},
				]}
				btnCount={btnsNumb}
				formButton={[extraBtn, { type: "submit", value: `${header} Category` }]}
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
				<h1 className="form_header">New Category</h1>
				{counter === 2 ? formFrame(addCategory, "Add") : ""}
			</FormAndHeaderWrap>
		</AddPageStyle>
	);

	const updatePage = () => (
		<UpdatePage location={location} className={classInitial}>
			<FormAndHeaderWrap width={width}>
				<h1 className="form_header">Update Category</h1>
				{classInitial === "openPage"
					? formFrame(
							updateCategory,
							"Update",
							2,
							{
								type: "cancel",
								value: "Cancel",
							},
							alterClass
					  )
					: ""}
			</FormAndHeaderWrap>
		</UpdatePage>
	);

	return data ? updatePage() : addPage();
};
export default CategoryAdd;
