import React from "react";
import { InputField, InputLabel } from "./Z_Style_Inputs";

const TextInput = ({ width, info, handleChange, form }) => {
	//console.log("TEXT INPUT info ::", info);
	const { parentForm, id, type, label, name, placeholder, required } = info;

	let actualId = id ? id : name;

	const withLabel = () => (
		<InputLabel width={width} htmlFor={name}>
			{`${label} :`}

			<InputField
				data-parent-form={parentForm}
				type={type}
				id={actualId}
				name={name}
				required={required}
				placeholder={placeholder}
				value={form[name]}
				onChange={(e) => handleChange(e)}
			/>
		</InputLabel>
	);
	const withOutLabel = () => (
		<InputField
			data-parent-form={parentForm}
			type={type}
			id={actualId}
			name={name}
			required={required}
			placeholder={placeholder}
			value={form[name]}
			onChange={(e) => handleChange(e)}
		/>
	);
	return label === "noLabel" ? withOutLabel() : withLabel();
};
export default React.memo(TextInput);
