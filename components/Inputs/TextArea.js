import { InputField, InputLabel } from "./Z_Style_Inputs";

const TextArea = ({ width, info, handleChange, form }) => {
	console.log("TEXTAREA info ::", info);
	const { type, label, name, placeholder, required } = info;

	return (
		<InputLabel width={width} htmlFor={name}>
			{`${label} :`}

			<textarea
				id={name}
				name={name}
				required={required}
				cols="40"
				rows="5"
				placeholder={placeholder}
				value={form[name]}
				onChange={(e) => handleChange(e)}
			/>
		</InputLabel>
	);
};
export default TextArea;
