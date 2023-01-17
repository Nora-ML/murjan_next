import { getCookie } from "../components/helpers/auth";
import { AUTH_USER } from "../components/helpers/users";
import client from "../setup/client";

const withUser = (Page) => {
	const WithAuthUser = (props) => <Page {...props} />;

	WithAuthUser.getInitialProps = async (context) => {
		//console.log("context", context.req?.headers);
		const token = getCookie("token", context.req);
		let user = null;
		if (token) {
			try {
				const { data } = await client.query({
					query: AUTH_USER,
					context: {
						headers: {
							authorization: token ? `Bearer ${token}` : "",
						},
					},
				});

				user = data;
			} catch (error) {
				console.log("Accessing /User--- error:", error);
				user = null;
			}
		}

		if (user === null) {
			return {
				redirect: {
					permanent: false,
					destination: "/",
				},
			};
		} else {
			return {
				...(Page.getInitialProps ? await Page.getInitialProps(context) : {}),
				user,
				token,
			};
		}
	};
	return WithAuthUser;
};

export default withUser;
