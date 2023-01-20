import { InputField, InputLabel } from "./Z_Style_Inputs";

const OTPInput = ({ width, info, handleChange, form }) => {
	//console.log("OTP INPUT info ::", info);
	const { type, length, name, placeholder, required } = info;

	return (
		<div className="verification_wrap">
			{[...new Array(length)].map((i, index) => {
				return (
					<InputField
						className="verification_input"
						type={type}
						name={`code_${index}`}
						required={required}
						min="0"
						max="9"
						maxlength="1"
						placeholder={placeholder}
						value={form[`code_${index}`]}
						onChange={(e) => handleChange(e)}
					/>
				);
			})}
		</div>
	);
};
export default OTPInput;
