import { gql } from "@apollo/client";

const LIST_PRODUCTS = gql`
	query ListProducts($limit: Int! = 0, $skip: Int! = 0) {
		listProducts(limit: $limit, skip: $skip) {
			name
			image
			price
			item_collection {
				name
			}
			item_category {
				name
			}
			item_tags {
				name
			}
			item_offer {
				name
			}
			id
		}
	}
`;

const LIST_COLLECTION = gql`
	query ListCollections {
		listCollections {
			name
			image
			id
		}
	}
`;

const LIST_CATEGORIES = gql`
	query ListCategories {
		listCategories {
			name
			id
		}
	}
`;
const LIST_TAGS = gql`
	query ListTags {
		listTags {
			name
			id
		}
	}
`;
const LIST_OFFERS = gql`
	query ListOffers {
		listOffers {
			name
			percentage
			amount
			id
		}
	}
`;
const LIST_USERS = gql`
	query ListUsers {
		listUsers {
			name
			email
			role
			id
		}
	}
`;
export {
	LIST_CATEGORIES,
	LIST_PRODUCTS,
	LIST_COLLECTION,
	LIST_TAGS,
	LIST_USERS,
	LIST_OFFERS,
};
