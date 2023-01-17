import { useState, useContext } from "react";
import { useMutation } from "@apollo/client";
// Access current user from context
import { UserContext } from "../context/userContext";
// queries and mutations
import { LIST_COLLECTION } from "../helpers/list";
import { ADD_COLLECTION } from "../helpers/Add";
import { UPDATE_COLLECTION } from "../helpers/update";
// components
import Form_RComp from "../Forms/Form_RComp";
// styles
import {
	AddPageStyle,
	UpdatePage,
	FormAndHeaderWrap,
} from "../styles/AddPageStyle";

const CollectionAdd = ({ data, location, classInitial, alterClass }) => {
	console.log("Collection EDIT/ADD component data", data);
	const { access } = useContext(UserContext) || {};
	const [counter, setCounter] = useState(0);

	const [addCollection] = useMutation(ADD_COLLECTION, {
		refetchQueries: [{ query: LIST_COLLECTION }],
	});
	const [updateCollection] = useMutation(UPDATE_COLLECTION);

	const activate = () => {
		console.log("Activating add Collection page access", access);
		if (access && (access === "admin_full" || access === "admin_limited")) {
			if (counter === 0 || counter === 1) {
				setCounter(2);
			} else {
				setCounter(1);
			}
		} else {
			alert("You are Not authorized To Add A Collection");
		}
	};

	const formData = data
		? data.getCollection
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
				formHeader={`${header} Collection`}
				mainFormInputs={[
					{
						type: "text",
						label: "Name",
						name: "name",
						placeholder: "Collection Name..",
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
						placeholder: "Collection description..",
						required: "true",
					},

					/* File */
					{
						type: "file",
						label: "Image",
						name: "image",
						required: "true",
					},
				]}
				btnCount={btnsNumb}
				formButton={[
					extraBtn,
					{ type: "submit", value: `${header} Collection` },
				]}
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
				<h1 className="form_header">New Collection</h1>
				{counter === 2 ? formFrame(addCollection, "Add") : ""}
			</FormAndHeaderWrap>
		</AddPageStyle>
	);

	const updatePage = () => (
		<UpdatePage location={location} className={classInitial}>
			<FormAndHeaderWrap width={width}>
				<h1 className="form_header">Update Collection</h1>
				{classInitial === "openPage"
					? formFrame(
							updateCollection,
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
export default CollectionAdd;
