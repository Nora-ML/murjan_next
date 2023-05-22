import GemColor from "./gem_color";
import Edit from "../../Icons/Edit";
import { useEffect } from "react";

const SlideEdit = ({ parallelS }) => {
	const removeTypeName = (object) => {
		let cleanObject = Object.fromEntries(
			Object.entries(object).filter(([k, v]) => k !== "__typename")
		);
		return cleanObject;
	};

	const child = (data) => {
		let {
			slide_id,
			parallelS_main_media,
			parallelS_secondary_media,
			parallelS_description,
		} = data;

		let mainMediaObject = removeTypeName(parallelS_main_media);
		let secondaryMediaObject = removeTypeName(parallelS_secondary_media);
		//parallelS(true);

		return (
			<div className="slide_edit">
				<Edit
					id=""
					landingData={{
						slide_id,
						parallelS_main_media: mainMediaObject,
						parallelS_secondary_media: secondaryMediaObject,
						parallelS_description,
					}}
					type="parallelSlide"
				/>
			</div>
		);
	};

	useEffect(() => {
		console.log("GET_PARALLEL SLIDE /EDIT :: USeeffect , wait ...");
		parallelS(true);
	}, []);
	return <GemColor child={(data) => child(data)} />;
};
export default SlideEdit;
