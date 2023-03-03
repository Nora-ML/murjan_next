import Hero from "./hero";
import Edit from "../../Icons/Edit";

const HeroEdit = ({ data }) => {
	let { hero_header, hero_media, hero_sub_header } = data;

	const child = () => {
		return (
			<div className="hero_edit">
				<Edit
					id=""
					landingData={{ hero_header, hero_media, hero_sub_header }}
					type="hero"
				/>
			</div>
		);
	};
	return <Hero data={data} child={child()} />;
};
export default HeroEdit;
