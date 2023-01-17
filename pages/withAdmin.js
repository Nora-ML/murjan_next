import { getCookie } from "../components/helpers/auth";
import { AUTH_ADMIN } from "../components/helpers/users";
import client from "../setup/client";
import Router from "next/router";

const withAdmin = (Page) => {
	const WithAuthAdmin = (props) => <Page {...props} />;

	WithAuthAdmin.getInitialProps = async (context) => {
		const token = getCookie("token", context.req);

		let user = null;
		if (token) {
			try {
				const { data } = await client.query({
					query: AUTH_ADMIN,
					context: {
						headers: {
							authorization: token ? `Bearer ${token}` : "",
						},
					},
				});

				user = data;
			} catch (error) {
				console.log("Accessing /Admin--- error:", error);
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

	return WithAuthAdmin;
};

export default withAdmin;
