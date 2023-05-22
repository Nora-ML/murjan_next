import { useState, useContext } from "react";
import { useMutation } from "@apollo/client";
import { useSavedFields } from "../context/formFieldsB4Update";
// Access current user from context
import { UserContext } from "../context/userContext";
// queries and mutations
//import { ADD_HERO } from "../helpers/Add";
import { UPDATE_PARALLEL_SLIDE } from "../helpers/update";
import { GET_PARALLEL_SLIDE } from "../helpers/landing";
// components
import Form_RComp_Landing from "../Forms/Form_RComp_Landing";
// styles
import { AddPageStyle } from "./Z_Style_AddPage";
import {
	UpdateLandingSection,
	FormAndHeaderWrap,
} from "./Z_Style_Landing_AddPage";

const ParallelSlideAdd = ({ data, classInitial, alterClass }) => {
	console.log("** PARALLEL SLIDE -- EDIT/ADD Component :: data", data);

	const { setOriginalForm } = useSavedFields();
	const { access } = useContext(UserContext) || {};
	const [counter, setCounter] = useState(0);

	/* const [addOffer] = useMutation(ADD_OFFER, {
		refetchQueries: [{ query: LIST_OFFERS }],
	}); */

	const [updateParallelSlide] = useMutation(UPDATE_PARALLEL_SLIDE, {
		refetchQueries: [{ query: GET_PARALLEL_SLIDE }],
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
				slide_id: "",
				parallelS_main_media: {
					mobile: "",
					desktop: "",
					tablet: "",
					alt: "",
				},
				parallelS_secondary_media: {
					mobile: "",
					desktop: "",
					tablet: "",
					alt: "",
				},
				parallelS_description: "",
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
						type: "number",
						label: "Slide Number",
						name: "slide_id",
						value: data["slide_id"],
						disabled: true,
					},
					{
						type: "text",
						label: "Slide Action Message",
						name: "parallelS_description",
						placeholder: "Slide Action..",
					},
					{
						type: "file",
						parentForm: "parallelS_main_media",
						label: "Slide Video",
						id: "video-0",
						name: "desktop",
					},
					{
						type: "text",
						parentForm: "parallelS_main_media",
						label: "noLabel",
						name: "alt",
						placeholder: "Video Description..",
					},
					{
						type: "file",
						parentForm: "parallelS_secondary_media",
						label: "Slide Image",
						id: "image-0",
						name: "desktop",
					},
					{
						type: "text",
						parentForm: "parallelS_secondary_media",
						label: "noLabel",
						name: "alt",
						placeholder: "Image Description..",
					},
				]}
				btnCount={btnsNumb}
				formButton={[extraBtn, { type: "submit", value: `${header} Slide` }]}
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
					<h1 className="form_header">Update SLide</h1>
					{classInitial !== "initialPage"
						? formFrame(
								updateParallelSlide,
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
export default ParallelSlideAdd;
