import PostHero from "./post_hero";
import Edit from "../../Icons/Edit";

const PostHeroEdit = () => {
	const child = (data) => {
		let {
			about: {
				about_header,
				about_image,
				about_sub_header,
				about_second_sub_header,
			},
		} = data?.getAbout;
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
	return <PostHero child={(data) => child(data)} />;
};
export default PostHeroEdit;
