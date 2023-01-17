import { gql } from "@apollo/client";

const GET_LANDING = gql`
	query GetLanding {
		getLanding {
			id
			hero {
				hero_media
				hero_header
				hero_sub_header
			}
			about {
				about_image
				about_header
				about_sub_header
				about_second_sub_header
			}
			parallel_slide_display {
				parallelS_main_media
				parallelS_description
				parallelS_secondary_media
			}
		}
	}
`;

export { GET_LANDING };
