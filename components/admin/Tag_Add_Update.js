import { useState, useContext } from "react";
import { useMutation } from "@apollo/client";
// Access current user from context
import { UserContext } from "../context/userContext";
// queries and mutations
import { ADD_TAG } from "../helpers/Add";
import { LIST_TAGS } from "../helpers/list";
import { UPDATE_TAG } from "../helpers/update";
// components
import Form_RComp from "../Forms/Form_RComp";
// styles
import {
	AddPageStyle,
	UpdatePage,
	FormAndHeaderWrap,
} from "../styles/AddPageStyle";

const TagAdd = ({ data, location, classInitial, alterClass }) => {
	console.log("Tag EDIT/ADD component data", data);
	const { access } = useContext(UserContext) || {};
	const [counter, setCounter] = useState(0);

	const [addTag] = useMutation(ADD_TAG, {
		refetchQueries: [{ query: LIST_TAGS }],
	});

	const [updateTag] = useMutation(UPDATE_TAG);

	const activate = () => {
		console.log("Activating add Tag page");
		if (access && (access === "admin_full" || access === "admin_limited")) {
			if (counter === 0 || counter === 1) {
				setCounter(2);
			} else {
				setCounter(1);
			}
		} else {
			alert("You are Not authorized To Add A TAAG");
		}
	};

	const formData = data ? data.getTag : { name: "", description: "", slug: "" };

	let width = "60%";

	const formFrame = (fnc, header, btnsNumb, extraBtn, extraProperty) => {
		return (
			<Form_RComp
				formWidth={width}
				formFields={{ formData }}
				mutationFunction={[fnc]}
				//mutationResponse={{ loading, error, data }}
				formHeader={`${header} Tag`}
				mainFormInputs={[
					{
						type: "text",
						label: "Name",
						name: "name",
						placeholder: "Tag Name..",
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
						placeholder: "Tag description..",
						required: "true",
					},
				]}
				btnCount={btnsNumb}
				formButton={[extraBtn, { type: "submit", value: `${header} Tag` }]}
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
				<h1 className="form_header">New Tag</h1>
				{counter === 2 ? formFrame(addTag, "Add") : ""}
			</FormAndHeaderWrap>
		</AddPageStyle>
	);

	const updatePage = () => (
		<UpdatePage location={location} className={classInitial}>
			<FormAndHeaderWrap width={width}>
				<h1 className="form_header">Update Tag</h1>
				{classInitial === "openPage"
					? formFrame(
							updateTag,
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
export default TagAdd;
