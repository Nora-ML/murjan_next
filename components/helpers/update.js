import { gql } from "@apollo/client";

const UPDATE_PRODUCT = gql`
	mutation UpdateProduct(
		$id: ID!
		$image: String!
		$name: String!
		$price: Int!
		$stock: Int!
		$description: String!
		$item_tags: [ID]!
		$item_category: ID!
		$item_collection: ID!
	) {
		updateProduct(
			id: $id
			image: $image
			name: $name
			price: $price
			stock: $stock
			description: $description
			item_tags: $item_tags
			item_category: $item_category
			item_collection: $item_collection
			options: $options
		) {
			name
			description
			image
			stock
			price
		}
	}
`;
const UPDATE_COLLECTION = gql`
	mutation UpdateCollection(
		$name: String!
		$description: String!
		$slug: String!
		$image: String!
	) {
		updateCollection(
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

const UPDATE_USER_USER = gql`
	mutation UpdateUser($name: String!, $email: String!, $password: String!) {
		updateUser(name: $name, email: $email, password: $password) {
			id
			name
			email
			password
		}
	}
`;
const UPDATE_USER_ADMIN = gql`
	mutation UpdateUserAdmin($role: String!) {
		updateUserAdmin(role: $role) {
			id
			name
			email
			role
		}
	}
`;
const UPDATE_CATEGORY = gql`
	mutation UpdateCategory(
		$name: String!
		$description: String!
		$slug: String!
		$image: String!
	) {
		updateCategory(
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
const UPDATE_TAG = gql`
	mutation UpdateTag($name: String!, $description: String!, $slug: String!) {
		updateTag(name: $name, description: $description, slug: $slug) {
			id
			name
		}
	}
`;
const UPDATE_OFFER = gql`
	mutation UpdateOffer(
		$name: String!
		$description: String!
		$percentage: Int!
		$amount: Int!
		$slug: String!
	) {
		updateOffer(
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

const update = (cache, payload) => {
	const { data } = payload;
	const key = Object.keys(data)[0];
	cache.evict(cache.identify(payload.data[key]));
};

export {
	UPDATE_PRODUCT,
	UPDATE_COLLECTION,
	UPDATE_TAG,
	UPDATE_CATEGORY,
	UPDATE_USER_ADMIN,
	UPDATE_USER_USER,
	UPDATE_OFFER,
	update,
};
