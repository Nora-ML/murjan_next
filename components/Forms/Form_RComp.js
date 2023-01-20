import { useEffect, useState } from "react";
// Custom Hook
import useForm from "../../setup/hooks/useForm.js";
// Inputs
import TextInput from "../Inputs/Text.js";
import NumberInput from "../Inputs/Number.js";
import FileInput from "../Inputs/File.js";
import DropDown from "../Inputs/Dropdown.js";
import TextArea from "../Inputs/TextArea.js";
import OTPInput from "../Inputs/OTP.js";
import Button from "../Buttons/Button.js";
// Components
import Error_RComp from "../Messages/Error.js";
import Success_RComp from "../Messages/Success.js";
// styles
import {
	BasicForm_Style,
	InputLabel,
	SubFormStyle,
	MainFormStyle,
	ButtonForm,
} from "./AdminFormsStyle.js";
import { Main } from "next/document.js";

//To-Doozz:
// 1- check why the resetForm is not reseting
// 2- form resets only if loading returns an html

const Form_RComp = ({
	formWidth,
	formFields,
	successMsg,
	mainFormInputs,
	subFormInputs,
	formButton,
	mutationFunction,
	mutationResponse,
	btnCount,
	classN,
	eitherOrRelation,
}) => {
	console.log("FORM components ");

	const { inputs, handleChange, resetForm } = useForm(formFields);

	const [state, setState] = useState({
		loading: false,
		response: false,
		errorMessage: false,
	});
	const { loading, error, response } = state;
	const { formData, subForm, imageData, itemId } = inputs;

	//console.log("THEFORM -- inputs ", inputs);

	// Extracting the "key" name in the main form that will be associated with the subform
	let subFromObjectKey = Object.keys(formData).filter(
		(k) => formData[k] === "subForm"
	)[0];

	console.log("THEFORM, INPUTS - \ninputs", inputs);

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(
			"THEFORM, HANDLE SUBMIT - \nformData",
			formData,
			"\nitemId",
			itemId
		);
		setState({ ...state, loading: true });

		let newForm = itemId ? { ...formData, ...itemId } : formData;
		console.log("********* NEW FORM ,", newForm);
		mutationFunction[0]({ variables: newForm || formFields })
			.then((response) => {
				console.log("Form fetched response ", response);
				setState({ ...state, loading: false, response: true });
				if (inputs.imageData.length > 0) {
					console.log("HEEEEEELLO image");
					uploadFileToS3();
				} else {
					classN ? classN() : resetForm();
				}
			})
			.catch((error) => console.log("error"));
	};

	/* 	const mergingSubFormsToMainForm = async () => {
		console.log("subFromObjectKey", subFromObjectKey);

		let newSubForm;

		// Handling The OTP email Asctivation input
		if (subFromObjectKey === "OTP") {
			let parsedAndJoinedOTP = parseInt(Object.values(subForm).join(""));
			newSubForm = { code: parsedAndJoinedOTP };
		}

		// Merging subForm to formData
		let newFormData =
			subFromObjectKey && subFromObjectKey !== "OTP"
				? { ...formData, [subFromObjectKey]: subForm }
				: subFromObjectKey === "OTP"
				? { ...formData, [subFromObjectKey]: newSubForm }
				: formData;

		console.log("newFormData", newFormData);

		return newFormData;
	}; */
	const uploadFileToS3 = async () => {
		console.log("UPLOAING files to S3 imageData ", inputs.imageData);
		setState({ ...state, loading: true, errorMessage: false });
		await inputs.imageData.map((image, index) => {
			fetch(image.signedRequest, {
				method: "PUT",
				body: image.file,
			})
				.then((response) => {
					console.log("SAVED TO S3 .", image);
					setState({ ...state, loading: false });
					if (index === inputs.imageData.length - 1) {
						response.status >= 400
							? setState({
									...state,
									errorMessage: "No Response form Server",
							  })
							: classN
							? classN()
							: resetForm();
					}
				})
				.catch((error) => {
					console.log("ERror uploading file to s3 :", error);
					setState({ ...state, errorMessage: error });
				});
		});
	};
	/* const uploadFileToS3 = async (file, signedRequest) => {
		console.log(
			"UPLAODING IMAGE TO s3 file",
			file,
			"SIGNED REque",
			signedRequest
		);
		await fetch(signedRequest, {
			method: "PUT",
			body: file,
		})
			.then((response) => {
				console.log("RESPONSE,", response);
				response.status >= 400
					? setState({ ...state, error: "No Response form Server" })
					: classN
					? classN()
					: resetForm();
			})
			.catch((error) => {
				console.log("ERror uploading file to s3 :", error);
				setState({ ...state, error: error });
			});
	}; */

	// Function: for cases like resendOTP , ForgotPass ..
	// else it will simply close Form using ClassN animation
	const buttonTriggeredFunction = async (e, fnc, fncData) => {
		e.preventDefault();
		console.log("buttonTriggeredFunction -- ", fnc, "fncData", fncData);

		if (fnc) {
			console.log("RUNNING BUtton Function");
			try {
				await fnc({ variables: fncData || formData });
			} catch (error) {
				console.log("ERROR fetching secondary function call");
			}
		}
		if (classN) {
			classN();
		}
	};

	useEffect(() => {
		console.log("USEEFFECT In FORM COMPONENT eitherOrRelation");
		if (eitherOrRelation && eitherOrRelation.length > 1) {
			if (formData[eitherOrRelation[0]]) {
				let input = document.getElementById(eitherOrRelation[1]);
				input.setAttribute("disabled", true);
				//formData[eitherOrRelation[1]] = parseInt(0);
			}
			if (formData[eitherOrRelation[1]]) {
				let input = document.getElementById(eitherOrRelation[0]);
				input.setAttribute("disabled", true);
				//formData[eitherOrRelation[0]] = parseInt(0);
			}
		}
	}, [formData]);

	return (
		<BasicForm_Style width={formWidth} onSubmit={handleSubmit}>
			{response && successMsg ? <Success_RComp message={successMsg} /> : ""}
			{error ? <Error_RComp error={error} message={errorMessage} /> : ""}

			{mainFormInputs && (
				<MainFormStyle width={formWidth <= "51%" ? "100%" : formWidth}>
					{mainFormInputs?.map((char) => {
						return char.type === "number" ? (
							<NumberInput
								width={formWidth <= "51%" ? "100%" : "20%"}
								info={char}
								handleChange={handleChange}
								form={formData}
							/>
						) : char.type === "file" ? (
							<FileInput
								width={formWidth <= "51%" ? "100%" : "45%"}
								info={char}
								handleChange={handleChange}
								form={formData}
							/>
						) : char.type === "textarea" ? (
							<TextArea
								width={formWidth <= "51%" ? "100%" : "40%"}
								info={char}
								handleChange={handleChange}
								form={formData}
							/>
						) : char.type === "dropdown" ? (
							<DropDown
								width={formWidth <= "51%" ? "100%" : "40%"}
								info={char}
								handleChange={handleChange}
								form={formData}
							/>
						) : char.type === "verification" ? (
							<OTPInput
								info={char}
								handleChange={handleChange}
								form={subForm}
							/>
						) : (
							<TextInput
								width={formWidth <= "51%" ? "100%" : "40%"}
								info={char}
								handleChange={handleChange}
								form={formData}
							/>
						);
					})}
				</MainFormStyle>
			)}
			{subFormInputs && (
				<SubFormStyle width={formWidth}>
					{subFormInputs.map((char) => (
						<TextInput
							width={formWidth <= "51%" ? "100%" : "45%"}
							info={char}
							handleChange={handleChange}
							form={formData}
						/>
					))}
				</SubFormStyle>
			)}

			{/* Buttons functions:
			1- Submit form
			2- Close the form without change (ClassN : Only In case of Using "EDIT Icon" since the edit window opens from the location of the icon wherever it is. As opposed to "ADD Icon" which has a fixed location)
			3- Run a function (ex. in forgetting password) */}

			{formButton && (
				<ButtonForm width={formWidth} numOfBtns={btnCount}>
					{formButton.map((btn) => {
						console.log("BUTTTON ", btn);
						if (btn !== undefined) {
							return (
								<Button
									info={btn}
									buttonTriggeredFunction={buttonTriggeredFunction}
								/>
							);
						}
					})}
				</ButtonForm>
			)}
		</BasicForm_Style>
	);
};
export default Form_RComp;
