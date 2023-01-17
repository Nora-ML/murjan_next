import { InputField, InputLabel } from "./Z_Style_Inputs";

const FileInput = ({ styling, width, info, handleChange, form }) => {
	//console.log("File INPUT info ::", info);
	const { parentForm, type, id, label, name, placeholder, required } = info;

	let actualId = id ? id : name;

	const withLabel = () => (
		<InputLabel width={width} htmlFor={name}>
			{`${label} :`}

			<InputField
				type={type}
				id={actualId}
				name={name}
				required={required}
				placeholder={placeholder}
				file={form[name]}
				onChange={(e) => handleChange(e)}
			/>
		</InputLabel>
	);
	const withOutLabel = () => (
		<InputField
			data-parent-form={parentForm}
			className={styling}
			type={type}
			id={actualId}
			name={name}
			required={required}
			placeholder={placeholder}
			file={form[name]}
			onChange={(e) => handleChange(e)}
		/>
	);

	return label === "noLabel" ? withOutLabel() : withLabel();
};
export default FileInput;
