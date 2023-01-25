import { gql } from "@apollo/client";

const FILTER_PRODUCTS = gql`
	query FilterProducts($category: [ID]!, $collection: [ID]!) {
		filterProducts(category: $category, collection: $collection) {
			name
			image
			id
			price
		}
	}
`;

export { FILTER_PRODUCTS };
