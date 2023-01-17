import React, { useLayoutEffect, useRef, useState } from "react";
// Inputs
import TextInput from "../../Inputs/Text.js";
import FileInput from "../../Inputs/File.js";
//animation library
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GemColorEdit = ({ form, handleChange }) => {
	//console.log("Parallel Slide Display , form", form);

	const count = 3;

	return (
		<div className="gem_color-container edit">
			{new Array(count).fill(form).map((g, index) => (
				<div className="gem_color-edit_container">
					<FileInput
						info={{
							parentForm: "parallel_slide_display",
							type: "file",
							id: `parallelS_main_media-${index}`,
							label: "Video : Section Main Media",
							name: "parallelS_main_media",
							//required: "true",
						}}
						handleChange={handleChange}
						form={form}
					/>
					<FileInput
						info={{
							parentForm: "parallel_slide_display",
							type: "file",
							id: `parallelS_secondary_media-${index}`,
							label: "Image: Secondary Media",
							name: "parallelS_secondary_media",
							//required: "true",
						}}
						handleChange={handleChange}
						form={form}
					/>
					<TextInput
						info={{
							type: "text",
							label: "Description",
							id: `parallelS_description-${index}`,
							name: "parallelS_description",
							placeholder: "Gems Description",
							parentForm: "parallel_slide_display",
						}}
						handleChange={handleChange}
						form={form}
					/>
				</div>
			))}
		</div>
	);
};
export default GemColorEdit;
