import {
	ApolloClient,
	ApolloLink,
	HttpLink,
	InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/link-error";
import { createUploadLink } from "apollo-upload-client";
import { endpoint, prodEndpoint } from "../config";
//import paginationField from './paginationField';
import cookie from "js-cookie";

const httpLink = new HttpLink({
	uri: process.env.NODE_ENV === "development" ? endpoint : prodEndpoint,
});

const authLink = new ApolloLink((operation, forward) => {
	const token = cookie.get("token");
	console.log("CLIENT COPY   TOOOOOOOOOKEN", token);
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
		graphQLErrors.forEach(({ message, locations, path }) =>
			console.log(`[GraphQL error]: Message: ${message}, Path: ${path}`)
		);
	if (networkError)
		console.log(`[Network error]: ${networkError}. Backend is unreachable. `);
});

const uploadImageLink = createUploadLink({
	uri: process.env.NODE_ENV === "development" ? endpoint : prodEndpoint,
	//credentials: "include",
	// pass the headers along from this request. This enables SSR with logged in state
	//headers,
});
/* const uploadImageLink = ({ headers }) =>
	createUploadLink({
		uri: process.env.NODE_ENV === "development" ? endpoint : prodEndpoint,
		credentials: "include",
		// pass the headers along from this request. This enables SSR with logged in state
		headers,
	}); */

const client = new ApolloClient({
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
	}),
});

export default client;
