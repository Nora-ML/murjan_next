import { createContext, useContext, useState } from "react";

const FormFieldsContext = createContext();

const FormFieldsContextProvider = ({ children }) => {
	const [originalForm, setOriginalForm] = useState();

	const getFormChanges = (alteredForm) => {
		let changes = Object.fromEntries(
			Object.entries(alteredForm).filter(([k, v]) => originalForm[k] !== v)
		);
		return changes;
	};

	const passOn = { originalForm, setOriginalForm, getFormChanges };

	console.log("SAVED FIELDS IN CONTEXT ::", originalForm);
	return (
		<FormFieldsContext.Provider value={passOn}>
			{children}
		</FormFieldsContext.Provider>
	);
};

const useSavedFields = () => {
	const all = useContext(FormFieldsContext);
	return all;
};

export { FormFieldsContextProvider, useSavedFields };
