import {
	HttpLink,
	ApolloLink,
	InMemoryCache,
	ApolloClient,
} from "@apollo/client";
import { onError } from "@apollo/link-error";
import withApollo from "next-with-apollo";
import { endpoint, prodEndpoint } from "../config";
import cookie from "js-cookie";

const authLink = new ApolloLink((operation, forward) => {
	const token = cookie.get("token");
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

const mainLink = new HttpLink({
	uri: " https://murjan-graphql.onrender.com/graphql",
});

function createClient({ headers, initialState }) {
	return new ApolloClient({
		link: ApolloLink.from([errorLink, authLink, mainLink]),
		cache: new InMemoryCache({
			typePolicies: {
				Query: {
					fields: {
						// TODO: We will add this together!
					},
				},
			},
		}).restore(initialState || {}),
	});
}

export default withApollo(createClient);
//export default withApollo(createClient, { getDataFromTree });
