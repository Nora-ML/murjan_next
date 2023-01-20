import { gql } from "@apollo/client";

const GET_PRODUCT = gql`
	query GetProduct($id: ID!) {
		getProduct(id: $id) {
			id
			name
			description
			item_tags {
				id
			}
			item_collection {
				id
			}
			item_category {
				id
			}
			image
			stock
			price
			options {
				sizes
				gems
				metal_colors
			}
		}
	}
`;
const GET_COLLECTION = gql`
	query GetCollection($id: ID!) {
		getCollection(id: $id) {
			id
			name
			description
			slug
			image
		}
	}
`;
const GET_CATEGORY = gql`
	query GetCategory($id: ID!) {
		getCategory(id: $id) {
			id
			name
			description
			slug
			image
		}
	}
`;
const GET_TAG = gql`
	query GetTag($id: ID!) {
		getTag(id: $id) {
			id
			name
			description
			slug
		}
	}
`;
const GET_OFFER = gql`
	query GetOffer($id: ID!) {
		getOffer(id: $id) {
			id
			name
			description
			percentage
			amount
			slug
		}
	}
`;

export { GET_PRODUCT, GET_CATEGORY, GET_COLLECTION, GET_TAG, GET_OFFER };
