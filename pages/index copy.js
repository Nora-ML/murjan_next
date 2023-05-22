import React, { useEffect, useState } from "react";

import Script from "next/script.js";
import dynamic from "next/dynamic.js";
// Components
import Hero from "../components/landing/hero/hero.js";
import PostHero from "../components/landing/post_hero/post_hero.js";
import PreLoader from "../components/landing/pre_loader.js";

// dynamically imported components
const GemColor = dynamic(() =>
	import("../components/landing/gem_color/gem_color.js")
);
const Collection = dynamic(() => import("../components/landing/collection.js"));
const CategoryNav = dynamic(() =>
	import("../components/landing/category_nav.js")
);

const Landing = () => {
	console.log("Landing -- PAGE ");
	const [done, setDone] = useState(false);
	const stopRender = useState({});
	const [heroData, setHeroData] = useState(false);
	const [aboutData, setAboutData] = useState(false);
	const [parallelSData, setParallelSData] = useState(false);

	let heroDataFetched = Object.keys(heroData).length !== 0;

	return (
		<>
			<PreLoader landing={(data) => setHeroData(data)} />
			<main className="main_container">
				{heroDataFetched && (
					<div className="landing_container">
						<Hero data={heroData} />
						<PostHero about={(data) => setAboutData(data)} />
						{aboutData && (
							<GemColor
								parallelS={(data) => setParallelSData(data)}
								stopRender={stopRender}
							/>
						)}
						<div className="landing-category">
							{parallelSData && <CategoryNav />}
						</div>
						{parallelSData && <Collection />}
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
