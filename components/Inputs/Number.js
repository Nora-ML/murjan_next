import { InputField, InputLabel } from "./Z_Style_Inputs";

const NumberInput = ({ width, info, handleChange, form }) => {
	//console.log("Number INPUT info ::", info);
	const { type, label, name, placeholder, required, disabled, value } = info;

	return (
		<InputLabel width={width} htmlFor={name} className="number_label">
			{`${label} :`}

			<InputField
				type={type}
				id={name}
				name={name}
				required={required}
				disabled={disabled ? true : false}
				placeholder={placeholder}
				value={value ? value : form[name]}
				onChange={value ? "" : (e) => handleChange(e)}
			/>
		</InputLabel>
	);
};
export default NumberInput;
