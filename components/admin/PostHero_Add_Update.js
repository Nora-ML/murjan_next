import { useState, useContext } from "react";
import { useMutation } from "@apollo/client";
import { useSavedFields } from "../context/formFieldsB4Update";
// Access current user from context
import { UserContext } from "../context/userContext";
// queries and mutations
//import { ADD_HERO } from "../helpers/Add";
import { UPDATE_ABOUT } from "../helpers/update";
import { GET_ABOUT } from "../helpers/landing";
// components
import Form_RComp_Landing from "../Forms/Form_RComp_Landing";
// styles
import { AddPageStyle } from "./Z_Style_AddPage";
import {
	UpdateLandingSection,
	FormAndHeaderWrap,
} from "./Z_Style_Landing_AddPage";

const PostHeroAdd = ({ data, classInitial, alterClass }) => {
	console.log("** POST HERO -- EDIT/ADD component :: data", data);
	const { setOriginalForm, getFormChanges } = useSavedFields();
	const { access } = useContext(UserContext) || {};
	const [counter, setCounter] = useState(0);

	/* const [addOffer] = useMutation(ADD_OFFER, {
		refetchQueries: [{ query: LIST_OFFERS }],
	}); */

	const [updateAbout] = useMutation(UPDATE_ABOUT, {
		refetchQueries: [{ query: GET_ABOUT }],
	});

	const activate = () => {
		console.log("Activating add Post Hero page");
		if (access && (access === "admin_full" || access === "admin_limited")) {
			if (counter === 0 || counter === 1) {
				setCounter(2);
			} else {
				setCounter(1);
			}
		} else {
			alert("You are Not authorized To Add AN ABOUT Section");
		}
	};

	const formData = data
		? data
		: {
				about_header: "",
				about_image: [],
				about_sub_header: "",
				about_second_sub_header: "",
		  };

	const imageData = [];

	let width = "60%";

	const formFrame = (fnc, header, btnsNumb, extraBtn, extraProperty) => {
		return (
			<Form_RComp_Landing
				formWidth={width}
				formFields={{ formData, imageData }}
				mutationFunction={[fnc]}
				eitherOrRelation={["percentage", "amount"]}
				//mutationResponse={{ loading, error, data }}
				formHeader={`${header} Hero`}
				mainFormInputs={[
					{
						type: "text",
						label: "Header",
						name: "about_header",
						placeholder: "About Header..",
					},
					{
						type: "text",
						label: "Sub Header",
						name: "about_sub_header",
						placeholder: "Sub Header..",
					},
					{
						type: "text",
						label: "Sub Header",
						name: "about_second_sub_header",
						placeholder: "Sub Header..",
					},

					/* File */
					{
						type: "file",
						label: "First Image",
						id: "image-0",
						name: "about_image",
						//required: "true",
					},
					{
						type: "file",
						label: "Second Image",
						id: "image-1",
						name: "about_image",
						//required: "true",
					},
				]}
				btnCount={btnsNumb}
				formButton={[extraBtn, { type: "submit", value: `${header} About` }]}
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
				<h1 className="form_header">New Hero</h1>
				{/* {counter === 2 ? formFrame(addOffer, "Add") : ""} */}
			</FormAndHeaderWrap>
		</AddPageStyle>
	);

	const updatePage = () => {
		setOriginalForm(formData);
		return (
			<UpdateLandingSection className={classInitial}>
				<FormAndHeaderWrap width={width}>
					<h1 className="form_header">Update About Section</h1>
					{classInitial !== "initialPage"
						? formFrame(
								updateAbout,
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
			</UpdateLandingSection>
		);
	};

	return data ? updatePage() : addPage();
};
export default PostHeroAdd;
