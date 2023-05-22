import { ApolloProvider } from "@apollo/client";
import withData from "../setup/withData.js";
import Script from "next/script.js";
import UserContextProvider from "../components/context/userContext";
import SizeContextProvider from "../components/context/sizeContext";
import FilterContextProvider from "../components/context/filterContext";
import { CartContextProvider } from "../components/context/cartContext.js";
import LandingContextProvider from "../components/context/landingContext.js";
import { FormFieldsContextProvider } from "../components/context/formFieldsB4Update.js";
import Layout from "../components/Layout";

import "../public/static/styles/nav.scss";
import "../public/static/styles/nav_mob.scss";
import "../public/static/styles/landing.scss";
import "../public/static/styles/pre_loader.scss";
import "../public/static/styles/hero.scss";

import "../public/static/styles/post_hero.scss";
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
								<Layout>
									<LandingContextProvider>
										<Component {...pageProps} />
										<link
											rel="preload"
											as="video"
											type="video/mp4"
											href="https://murjan-opti.s3.amazonaws.com/Murjan_compress.mp4"
										/>
									</LandingContextProvider>
								</Layout>
							</FilterContextProvider>
						</FormFieldsContextProvider>
					</CartContextProvider>
				</UserContextProvider>
			</SizeContextProvider>
		</ApolloProvider>
	);
};

export default withData(MyApp);
