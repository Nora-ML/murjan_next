import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import Hero from "../components/landing/hero/hero.js";
import PostHero from "../components/landing/post_hero/post_hero";
import GemColor from "../components/landing/gem_color/gem_color.js";
import PreLoader from "../components/landing/pre_loader/pre_loader";
import { GET_LANDING } from "../components/helpers/landing.js";
//import { ProductContext } from "../../context/productContext";

//import "./landing.scss";

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Landing = () => {
	console.log("LANDING PAGE");
	const { data, loading, error } = useQuery(GET_LANDING);
	const [done, setDone] = useState(false);

	if (loading) return <h1>LOOOOADING </h1>;
	if (error) return <h1>ERROR </h1>;

	const { hero, about, parallel_slide_display } = data?.getLanding[0];

	/* useEffect(() => {
		window.scrollTo(0, 0);
	}, [done]); */

	useEffect(() => {
		const script = document.createElement("script");

		script.src = "/static/loco.js";
		script.async = true;

		document.body.appendChild(script);
		//setFinal(true);
		return () => {
			document.body.removeChild(script);
		};
	}, []);

	return (
		<>
			<PreLoader activateHero={(f) => setDone(f)} />
			<main className="main_container">
				{done && (
					<div className="landing_container">
						{/* <Nav classN="trans" /> */}
						<Hero data={hero} />
						<PostHero data={about} />
						<GemColor data={parallel_slide_display} />
						{/*<CategoryNav />
						<Collection /> */}

						{/* <div className="content-2">
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
						</div> */}
					</div>
				)}
			</main>
		</>
	);
};
//Query
// 1- landing page
// 2- Collections
// 3- top 4/5 products in 4 categories
/* Landing.getInitialProps = async (context) => {
	try {
		const { data, loading, error } = await client.query({ query: GET_LANDING });
		console.log("DATA FETCHED ", data);
		return { props: { data } };
	} catch (error) {
		console.log("LANDING FETCHIG :", error);
		return { Error: "Restricted Access" };
	}
};*/
export default Landing;
