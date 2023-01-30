import { gql } from "@apollo/client";

const FILTER_PRODUCTS = gql`
	query FilterProducts(
		$category: [ID]! = []
		$collection: [ID]! = []
		$limit: Int! = 0
		$skip: Int! = 0
	) {
		filterProducts(
			category: $category
			collection: $collection
			limit: $limit
			skip: $skip
		) {
			name
			image
			id
			price
		}
	}
`;

export { FILTER_PRODUCTS };
