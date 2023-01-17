import { gql } from "@apollo/client";

const ADD_CATEGORY = gql`
	mutation AddCategory(
		$name: String!
		$description: String!
		$slug: String!
		$image: String!
	) {
		addCategory(
			name: $name
			description: $description
			slug: $slug
			image: $image
		) {
			id
			name
		}
	}
`;
const ADD_TAG = gql`
	mutation AddTag($name: String!, $description: String!, $slug: String!) {
		addTag(name: $name, description: $description, slug: $slug) {
			id
			name
		}
	}
`;

const ADD_COLLECTION = gql`
	mutation AddCollection(
		$name: String!
		$description: String!
		$slug: String!
		$image: String!
	) {
		addCollection(
			name: $name
			description: $description
			slug: $slug
			image: $image
		) {
			id
			name
		}
	}
`;

const ADD_OFFER = gql`
	mutation AddOffer(
		$name: String!
		$description: String!
		$percentage: Int!
		$amount: Int!
		$slug: String!
	) {
		addOffer(
			name: $name
			description: $description
			percentage: $percentage
			amount: $amount
			slug: $slug
		) {
			id
			name
		}
	}
`;

const ADD_LANDING_PAGE = gql`
	mutation AddLandingPage(
		$hero: HeroInput!
		$about: AboutInput!
		$parallel_slide_display: [ParallelSlideInput]!
	) {
		addLandingPage(
			hero: $hero
			about: $about
			parallel_slide_display: $parallel_slide_display
		) {
			id
		}
	}
`;

export { ADD_OFFER, ADD_CATEGORY, ADD_COLLECTION, ADD_TAG, ADD_LANDING_PAGE };
