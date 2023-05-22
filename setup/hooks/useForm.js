import { useEffect, useState } from "react";
import { UPLOAD_FILE } from "../../components/helpers/product";
import { useSavedFields } from "../../components/context/formFieldsB4Update";
import { useMutation } from "@apollo/client";

export default function useForm(initialState = {}) {
	//console.log("useForm Hook initialState", initialState);

	const { originalForm, setOriginalForm, getFormChanges } = useSavedFields();
	const [tempArray, setTemp] = useState([0, 0, 0, 0, 0, 0]);
	const [inputs, setInputs] = useState(initialState);
	const { formData, imageData, subForm } = inputs;

	const subformItems = subForm ? Object.keys(subForm) : "false";

	//creating signedUrl for the input file
	const [signS3, { loading, error, data }] = useMutation(UPLOAD_FILE);

	if (error) {
		console.log("signS3 error :", error);
	}
	if (loading) {
		console.log("Loading ..........");
	}

	const handleChange = async (e) => {
		//console.log("e", e);
		const {
			value,
			name,
			type,
			files,
			selectedOptions,
			dataset: { parentForm },
			id: ID_full,
		} = e.target;
		console.log(
			"ID_full",
			ID_full,
			"name :",
			name,
			"parentForm :",
			parentForm,
			"value :",
			value,
			"files:",
			files
		);
		//console.log("selectedOptions :", typeof selectedOptions);

		let ID_Number = parseInt(ID_full.split("-")[1]);
		let finalValue = value;
		let imageUrlArray;

		if (name.includes("code_")) {
			/* console.log(
				"USEFORM verification inputs ",
				value,
				"temp array",
				tempArray
			); */

			//console.log("VALUE .LENGTH", value.length);
			setInputs({
				...inputs,
				subForm: { ...subForm, [name]: parseInt(value) },
			});
			if (value.length === 1 && e.target.nextSibling) {
				e.target.nextSibling.focus();
			}

			// Handling Subform inputs
		} else if (subformItems && subformItems.includes(name)) {
			let valueToArray =
				type !== "number"
					? value.split(",").map((i) => (parseInt(i) ? parseInt(i) : i))
					: parseInt(value);

			console.log("SUBFORM inputs ", valueToArray);
			setInputs({
				...inputs,
				subForm: { ...subForm, [name]: valueToArray },
			});
			//
		} else if (parentForm) {
			console.log("useForm PARENTFORM input");
			handle_SubForm(e.target);
		} else {
			if (type === "number") {
				finalValue = parseInt(value);
			} else if (type === "file") {
				imageUrlArray = await handleImageData(
					files,
					name,
					"",
					ID_full,
					ID_Number
				);
			} else if (type === "select-multiple") {
				finalValue = Object.values(selectedOptions).map(
					(option) => option.value
				);
			}

			console.log("ImageURLArray  ::", imageUrlArray);

			setInputs({
				...inputs,
				formData: {
					...formData,
					[name]: type == "file" ? imageUrlArray : finalValue,
				},
			});
		}
	};

	const handle_SubForm = async (target) => {
		console.log("HANDLING SUBFORM change");
		const {
			value,
			name,
			type,
			files,
			selectedOptions,
			dataset: { parentForm },
			id: ID_full,
		} = target;

		const parentformIsArray = Array.isArray(formData[parentForm]);
		let ID_Number = parseInt(ID_full.split("-")[1]);
		let finalValue = value;
		let imageUrlArray;

		if (type === "number") {
			finalValue = parseInt(value);
		} else if (type === "file") {
			console.log("HANDLE-SUBFORM :: Direct to-> HandlingImageData");
			imageUrlArray = await handleImageData(
				files,
				name,
				parentformIsArray,
				ID_full,
				ID_Number
			);
		} else if (type === "select-multiple") {
			finalValue = Object.values(selectedOptions).map((option) => option.value);
		}

		console.log("HANDLE-SUBFORM :: imageUrlArray::", imageUrlArray);

		if (parentformIsArray) {
			let newArray = formData[parentForm].filter((e) => e.id === ID_Number)[0];

			if (newArray === undefined) {
				formData[parentForm] = [
					...formData[parentForm],
					{
						id: ID_Number,
						[name]: type == "file" ? imageUrlArray : finalValue,
					},
				];
			} else {
				newArray[name] = type == "file" ? imageUrlArray : finalValue;
				formData[parentForm].concat(newArray);
			}

			setInputs({
				...inputs,
				formData: {
					...formData,
					[parentForm]: formData[parentForm],
				},
			});
		} else {
			setInputs({
				...inputs,
				formData: {
					...formData,
					[parentForm]: {
						...formData[parentForm],
						[name]: type == "file" ? imageUrlArray : finalValue,
					},
				},
			});
		}
	};

	//1- call getSignedUrl function and get a signedRequest and url
	//2- ImageData will be the single source of truth for all image Related data for the Entire Form.
	//  SO, we will save both the signedRequest and file, as well as the image Url in image objects.
	//3- To avoid duplication,In imageData, filter and Overwrite data associated with current Id (if it exists).
	//4- from imageData,Extract image url associated with The current input and save it in our form.
	const handleImageData = async (
		files,
		name,
		parentformIsArray,
		ID_full,
		ID_Number
	) => {
		let file = files[0];
		let { signedRequest, url } = await getSignedURL(file);
		let imageUrlArray;

		if (imageData.length > 0) {
			console.log("HANDLE IMAGE - IMAGE ALREADY ADDED IN IMAGEDATA ");
			// If an image with current ID exists,filter it out
			let imageData_Unique = inputs.imageData.filter((e) => e.id !== ID_full);
			// Overwrite it.
			inputs.imageData = [
				...imageData_Unique,
				{ id: ID_full, file: file, signedRequest, url },
			];

			//find the image object in imageData associated wih current property
			let imageData_CurrProperty = inputs.imageData.filter((e) =>
				parentformIsArray ? e.id.includes(ID_full) : e.id.includes(name)
			);

			// extract the url from the image Objects.
			imageUrlArray = imageData_CurrProperty.reduce(
				(acc, image) => acc.concat(image.url),
				[]
			);
			// in case we have an array of images and we wish to update only one
			// we get the length of the property whose value is images
		} else if (formData[name] && formData[name].length >= 1) {
			console.log("HANDLE IMAGE - MORE THAN 1 IMAGE IN FORM ");
			let theArray =
				ID_Number + 1 > formData[name].length
					? [...new Array(ID_Number + 1)]
					: formData[name];
			console.log("THE ARRAY", theArray);
			let tempArray = theArray.map((e, index) => {
				return index === ID_Number
					? url
					: formData[name][index]
					? formData[name][index]
					: "";
			});
			imageUrlArray = tempArray;
		} else {
			console.log("HANDLE IMAGE - SINGLE IMAGE");
			imageUrlArray = url;
		}

		console.log(
			"signedRequest",
			signedRequest,
			" url",
			url,
			"imageUrlArray",
			imageUrlArray
		);

		return await imageUrlArray;
	};

	const getSignedURL = async (file) => {
		console.log("RUNNINg , getting Signed URL");
		let { type, name } = file;
		let cleanName = name.split(".")[0];
		//let fileData = { fileType: type, fileName: cleanName };
		let fileData = { fileType: type, fileName: name };
		//

		const response = await signS3({ variables: fileData });
		const { signedRequest, url } = response.data.signS3;

		return { signedRequest, url };
	};

	const resetForm = () => {
		console.log("Resetting form");
		setOriginalForm(false);
		setInputs(initialState);
	};

	/* const debounce = (fn, time) => {
        let timeOut;
        return (args) => {
            clearTimeout(timeOut);
            timeOut=setTimeout(() => {
                fn(args);
            },time)
        }
    } */
	//let handleChange=debounce(processHandleChange,500)
	//let getSignedUrl=debounce(processGetSignedURL,500)

	return { inputs, handleChange, resetForm };
}
