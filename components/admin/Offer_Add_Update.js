import { useState, useContext } from "react";
import { useMutation } from "@apollo/client";
// Access current user from context
import { UserContext } from "../context/userContext";
// queries and mutations
import { ADD_OFFER } from "../helpers/Add";
import { LIST_OFFERS } from "../helpers/list";
import { UPDATE_OFFER } from "../helpers/update";
// components
import Form_RComp from "../Forms/Form_RComp";
// styles
import {
	AddPageStyle,
	UpdatePage,
	FormAndHeaderWrap,
} from "../styles/AddPageStyle";

const OfferAdd = ({ data, location, classInitial, alterClass }) => {
	console.log("Offer EDIT/ADD component data", data);
	const { access } = useContext(UserContext) || {};
	const [counter, setCounter] = useState(0);

	const [addOffer] = useMutation(ADD_OFFER, {
		refetchQueries: [{ query: LIST_OFFERS }],
	});

	const [updateOffer] = useMutation(UPDATE_OFFER);

	const activate = () => {
		console.log("Activating add Offer page");
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

	const formData = data
		? data.getOffer
		: { name: "", description: "", percentage: "", amount: "", slug: "" };

	let width = "70%";

	const formFrame = (fnc, header, btnsNumb, extraBtn, extraProperty) => {
		return (
			<Form_RComp
				formWidth={width}
				formFields={{ formData }}
				mutationFunction={[fnc]}
				eitherOrRelation={["percentage", "amount"]}
				//mutationResponse={{ loading, error, data }}
				formHeader={`${header} Offer`}
				mainFormInputs={[
					{
						type: "text",
						label: "Name",
						name: "name",
						placeholder: "Offer Name..",
						required: "true",
					},
					{
						type: "number",
						label: "Discount Percentage",
						name: "percentage",
						placeholder: "discount rate ex. 50 for 50%",
					},
					{
						type: "number",
						label: "Amount Deducted",
						name: "amount",
						placeholder: "amount discounted ex.100 for $100",
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
						placeholder: "Offer description..",
					},
				]}
				btnCount={btnsNumb}
				formButton={[extraBtn, { type: "submit", value: `${header} Offer` }]}
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
				<h1 className="form_header">New Offer</h1>
				{counter === 2 ? formFrame(addOffer, "Add") : ""}
			</FormAndHeaderWrap>
		</AddPageStyle>
	);

	const updatePage = () => (
		<UpdatePage location={location} className={classInitial}>
			<FormAndHeaderWrap width={width}>
				<h1 className="form_header">Update Offer</h1>
				{classInitial === "openPage"
					? formFrame(
							updateOffer,
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
export default OfferAdd;
