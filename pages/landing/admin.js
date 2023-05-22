import React, { useEffect, useState } from "react";
import Script from "next/script.js";
import dynamic from "next/dynamic.js";
import Router, { useRouter } from "next/router.js";
// Components
import HeroEdit from "../../components/landing/hero/hero_edit";
import SlideEdit from "../../components/landing/gem_color/gem_color_edit";
import PostHeroEdit from "../../components/landing/post_hero/post_hero_edit";
import PreLoader from "../../components/landing/pre_loader";

// dynamically imported components
const GemColorEdit = dynamic(() =>
	import("../../components/landing/gem_color/gem_color_edit.js")
);
const Collection = dynamic(() =>
	import("../../components/landing/collection.js")
);
const CategoryNav = dynamic(() =>
	import("../../components/landing/category_nav.js")
);

const LandingAdmin = () => {
	console.log("Landing-ADMIN -- PAGE ");
	const [done, setDone] = useState(false);
	const [heroData, setHeroData] = useState(false);
	const [aboutData, setAboutData] = useState(false);
	const [parallelSData, setParallelSData] = useState(false);
	const [categoryData, setCategoryData] = useState(false);

	let heroDataFetched = Object.keys(heroData).length !== 0;

	return (
		<>
			<PreLoader
				activateHero="{(f) => setDone(f)}"
				landing={(data) => setHeroData(data)}
			/>
			<main className="main_container">
				{heroDataFetched && (
					<div className="landing_container">
						<HeroEdit data={heroData} />
						<PostHeroEdit about={(data) => setAboutData(data)} />
						{aboutData && (
							<SlideEdit parallelS={(data) => setParallelSData(data)} />
						)}
						<div className="landing-category">
							{parallelSData && (
								<CategoryNav categoryD={(data) => setCategoryData(data)} />
							)}
						</div>
						{categoryData && <Collection />}
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

export default LandingAdmin;
