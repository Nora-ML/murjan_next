import {
	ApolloClient,
	ApolloLink,
	HttpLink,
	InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/link-error";
import { getDataFromTree } from "@apollo/client/react/ssr";
import { createUploadLink } from "apollo-upload-client";
import withApollo from "next-with-apollo";
import { endpoint, prodEndpoint } from "../config";
import Error_RComp from "../components/Messages/Error";
//import paginationField from './paginationField';
import cookie from "js-cookie";

const httpLink = new HttpLink({
	uri: process.env.NODE_ENV === "development" ? endpoint : prodEndpoint,
});

const authLink = new ApolloLink((operation, forward) => {
	const token = cookie.get("token");
	//console.log("WITH DATA TOOOOOOOOOKEN", token);
	operation.setContext(({ headers }) => ({
		headers: {
			authorization: token ? `Bearer ${token}` : "", // however you get your token
			...headers,
		},
	}));
	return forward(operation);
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
	if (graphQLErrors)
		graphQLErrors.forEach(({ message, locations, path }) => {
			console.log(`[GraphQL error]: Message: ${message}, Path: ${path}`);
		});
	if (networkError)
		console.log(`[Network error]: ${networkError}. Backend is unreachable. `);
});

const uploadImageLink = createUploadLink({
	uri: process.env.NODE_ENV === "development" ? endpoint : prodEndpoint,
	//credentials: "include",
	// pass the headers along from this request. This enables SSR with logged in state
	//headers,
});

function createClient({ headers, initialState }) {
	return new ApolloClient({
		link: ApolloLink.from([errorLink, authLink, uploadImageLink]),
		cache: new InMemoryCache({
			typePolicies: {
				Query: {
					fields: {
						// TODO: We will add this together!
						//allProducts: paginationField(),
					},
				},
			},
		}).restore(initialState || {}),
	});
}

export default withApollo(createClient, { getDataFromTree });
