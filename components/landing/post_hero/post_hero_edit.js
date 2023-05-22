import PostHero from "./post_hero";
import Edit from "../../Icons/Edit";
import { useEffect } from "react";

const PostHeroEdit = ({ about }) => {
	const child = (data) => {
		let {
			about: {
				about_header,
				about_image,
				about_sub_header,
				about_second_sub_header,
			},
		} = data?.getAbout;

		//about(true);

		return (
			<div className="hero_edit">
				<Edit
					id=""
					landingData={{
						about_header,
						about_image,
						about_sub_header,
						about_second_sub_header,
					}}
					type="posthero"
				/>
			</div>
		);
	};

	useEffect(() => {
		console.log("---- POST HERO EDIT . USEEFFECT");
		about(true);
	}, []);

	return <PostHero child={(data) => child(data)} />;
};
export default PostHeroEdit;
