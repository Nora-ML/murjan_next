import React from "react";
import {
	ButtonFill_Style,
	ButtonTransparent_Style,
} from "./Z_Style_Buttons.js";

const Button = ({ width, info, buttonTriggeredFunction }) => {
	console.log("Button info ::", info);
	const { type, value, fnc, fncData } = info;

	return type !== "submit" ? (
		<ButtonTransparent_Style
			type="input"
			defaultValue={value}
			onClick={(e) => buttonTriggeredFunction(e, fnc, fncData)}
		/>
	) : (
		<ButtonFill_Style type={type} value={value} />
	);
};
export default Button;
