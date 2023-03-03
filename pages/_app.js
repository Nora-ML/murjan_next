import { ApolloProvider } from "@apollo/client";
import withData from "../setup/withData.js";
//import Script from "next/script";
import UserContextProvider from "../components/context/userContext";
import SizeContextProvider from "../components/context/sizeContext";
import FilterContextProvider from "../components/context/filterContext";
import { CartContextProvider } from "../components/context/cartContext.js";
import { FormFieldsContextProvider } from "../components/context/formFieldsB4Update.js";
import Layout from "../components/Layout";

import "../public/static/styles/nav.scss";
import "../public/static/styles/landing.scss";
import "../public/static/styles/pre_loader.scss";
import "../public/static/styles/post_hero.scss";
import "../public/static/styles/hero.scss";
import "../public/static/styles/gem_color.scss";
import "../public/static/styles/shop.scss";
import "../public/static/styles/shop_hero.scss";
import "../public/static/styles/shop_items.scss";
import "../public/static/styles/shop_nav.scss";
import "../public/static/styles/item.scss";
import "../public/static/styles/category_nav.scss";
import "../public/static/styles/collection.scss";

const MyApp = ({ Component, pageProps, apollo }) => {
	console.log("_app props", pageProps);

	return (
		<ApolloProvider client={apollo}>
			<SizeContextProvider>
				<UserContextProvider>
					<CartContextProvider>
						<FormFieldsContextProvider>
							<FilterContextProvider>
								<Layout /* currentUser={pageProps.user }*/>
									<Component {...pageProps} />
								</Layout>
							</FilterContextProvider>
						</FormFieldsContextProvider>
					</CartContextProvider>
				</UserContextProvider>
			</SizeContextProvider>
		</ApolloProvider>
	);
};

// tell next.js to fetch all queries in all my components and pages
/* 
import client from "../setup/client.js";
import { getCookie } from "../components/helpers/auth.js";
import { CURRENT_USER } from "../components/helpers/users";
MyApp.getInitialProps = async function ({ Component, ctx }) {
	//console.log("MYAPP ******* _app Component :",Component,"\n_app context",ctx)
	let pageProps = {};

	const token = getCookie("token", ctx.req);
	if (token) {
		try {
			const { data: currentUser } = await client.query({
				query: CURRENT_USER,
				context: {
					headers: {
						authorization: token ? `Bearer ${token}` : "",
					},
				},
			});

			pageProps.user = currentUser;
		} catch (error) {
			console.log("Accessing /User--- error:", error);
		}
	}
	// if any page has a getinital props in them , fetch them
	if (Component.getInitialProps) {
		pageProps.pageLevelProps = await Component.getInitialProps(ctx);
	}
	pageProps.query = ctx.query;
	return { pageProps };
}; */

export default withData(MyApp);
