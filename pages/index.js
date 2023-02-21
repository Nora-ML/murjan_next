import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
// apollo client
import client from "../setup/client.js";
// Components
import Hero from "../components/landing/hero/hero.js";
import PostHero from "../components/landing/post_hero/post_hero";
import GemColor from "../components/landing/gem_color/gem_color.js";
import PreLoader from "../components/landing/pre_loader/pre_loader";
import CategoryNav from "../components/landing/category_nav.js";
import Collection from "../components/landing/collection.js";
// Graphql query
import { GET_LANDING } from "../components/helpers/landing.js";
import { FEATURED_PRODUCTS } from "../components/helpers/product.js";
import { LIST_COLLECTION } from "../components/helpers/list.js";

// animation
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Landing = () => {
	console.log("Landing -- Main ");
	const [done, setDone] = useState(false);
	const [landingContent, setLanding] = useState();

	const { hero, about, parallel_slide_display } = landingContent
		? landingContent[0]
		: "";

	/* useEffect(() => {
		window.scrollTo(0, 0);
	}, [done]); */

	useEffect(() => {
		if (done) {
			const script = document.createElement("script");

			script.src = "/static/loco.js";
			script.async = true;

			document.body.appendChild(script);
			//setFinal(true);
			return () => {
				document.body.removeChild(script);
			};
		}
	}, [done]);

	return (
		<>
			<PreLoader
				activateHero={(f) => setDone(f)}
				landing={(f) => setLanding(f)}
			/>
			<main className="main_container">
				{done && (
					<div className="landing_container">
						<Hero data={hero} />
						<PostHero data={about} />
						<GemColor data={parallel_slide_display} />
						<CategoryNav /* featured={featured}  */ />
						<Collection /* collection={collection}  */ />

						<div className="content-2">
							<p className="content__text">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Suscipit dicta voluptas ut aperiam harum ratione, doloremque
								molestias cumque nemo enim nihil delectus aliquam quibusdam
								voluptate quae rem nobis repellat. Commodi. A tempore quibusdam
								voluptatem distinctio excepturi, soluta doloremque laborum
								consequuntur possimus magnam officia dicta, fugit quam voluptas
								modi voluptatibus autem assumenda quae animi. Eius labore
								architecto excepturi expedita ea nulla.
							</p>
						</div>
					</div>
				)}
			</main>
		</>
	);
};

/* export async function getServerSideProps(ctx) {
	console.log("LANDING -- getInitialProps ctx,", ctx);

	const { data } = await client.query({
		query: GET_LANDING,
	});
	/* const { data: products } = await client.query({
		query: FEATURED_PRODUCTS,
	});
	const { data: collections } = await client.query({
		query: LIST_COLLECTION,
	}); 

	if (!data) {
		console.log("NO DATA ");
	} else {
		return {
			props: {
				landingContent: data.getLanding,
				/* collection: collections.listCollections,
				featured: products.featuredProducts, 
			},
		};
	}
} */

export default Landing;
