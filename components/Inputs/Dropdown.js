import { InputLabel, DropDownStyle } from "./Z_Style_Inputs";

const DropDown = ({ width, info, handleChange, form }) => {
	console.log("DropDown info ::", info);
	const { label, name, data, multiple, additionalText, required } = info;

	return (
		<InputLabel width={width} htmlFor={name}>
			{`${label} :`}
			{additionalText ? <p className="add_remarks">{additionalText}</p> : ""}

			<DropDownStyle
				className="dropdown_select"
				onChange={(e) => handleChange(e)}
				name={name}
				required={required}
				multiple={multiple === "true"}
				placeholder={name}
				id={name}>
				{multiple !== "true" ? (
					<option value="none" selected disabled hidden>
						Select an Option
					</option>
				) : (
					""
				)}
				{data?.length > 0
					? data.map((obj) => (
							<option
								selected={form[name] === obj["id"] ? true : false}
								value={obj["id"]}>
								{obj["name"]}
							</option>
					  ))
					: ""}
			</DropDownStyle>
		</InputLabel>
	);
};
export default DropDown;
