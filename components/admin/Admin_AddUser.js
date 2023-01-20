import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ACTIVATION_MAIL_USER } from "../helpers/users";
// sub components
import Form_RComp from "../Forms/Form_RComp";
// styles
import { AddPageStyle } from "./Z_Style_AddPage";

const AddUser = () => {
	const [activationMailToUser, { loading, error, data }] =
		useMutation(ACTIVATION_MAIL_USER);
	const [counter, setCounter] = useState(0);

	const activate = () => {
		if (counter === 0 || counter === 1) {
			setCounter(2);
		} else {
			setCounter(1);
		}
	};

	const formData = { name: "", email: "", password: "" };

	return (
		<AddPageStyle
			className={
				!counter ? "initialPage" : counter === 2 ? "openPage" : "closePage"
			}>
			<div className="trigger" onClick={activate}>
				<h1>{counter === 2 ? "x" : "+"}</h1>
			</div>

			<h1 className="form_header">New User</h1>

			<Form_RComp
				successMsg={`An activation Link has been sent to your email.`}
				formWidth="70%"
				formFields={{ formData }}
				mutationFunction={activationMailToUser}
				mutationResponse={{ loading, error, data }}
				/* Form Characteristics :  [fieldtype,typeof,labelText,name/id/for,placeholder,required,Attr2,Attr3] */
				mainFormInputs={[
					["input", "text", "Name", "name", "Name..", "true"],
					["input", "email", "Email", "email", "Email..", "true"],
					["input", "password", "Password", "password", "Password ", "true"],
				]}
				formButton={[
					/* submit */
					["submit", "Create a User"],
				]}
			/>
		</AddPageStyle>
	);
};
export default AddUser;
