import { gql } from "@apollo/client";

const DELETE_COLLECTION = gql`
	mutation DeleteCollection($id: ID!) {
		deleteCollection(id: $id) {
			id
			name
		}
	}
`;

const DELETE_CATEGORY = gql`
	mutation DeleteCategory($id: ID!) {
		deleteCategory(id: $id) {
			id
			name
		}
	}
`;

const DELETE_PRODUCT = gql`
	mutation DeleteProduct($id: ID!) {
		deleteProduct(id: $id) {
			id
			name
		}
	}
`;

const DELETE_USER = gql`
	mutation DeleteUser($id: ID!) {
		deleteUser(id: $id) {
			id
			name
		}
	}
`;
const DELETE_TAG = gql`
	mutation DeleteTag($id: ID!) {
		deleteTag(id: $id) {
			id
			name
		}
	}
`;
const DELETE_OFFER = gql`
	mutation DeleteOffer($id: ID!) {
		deleteOffer(id: $id) {
			id
			name
		}
	}
`;

export {
	DELETE_CATEGORY,
	DELETE_COLLECTION,
	DELETE_PRODUCT,
	DELETE_TAG,
	DELETE_USER,
	DELETE_OFFER,
};
