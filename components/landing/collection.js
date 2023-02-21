import React, { useRef, useLayoutEffect, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { LIST_COLLECTION } from "../helpers/list";

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Collection = () => {
	console.log("Landing -- Collection ");
	const coll = useRef();

	const { data, loading, error } = useQuery(LIST_COLLECTION);
	if (loading) <h2>LOAding</h2>;
	if (error) <h2>Error</h2>;

	const collection = data ? data.listCollections : "";
	console.log("collection ", collection);

	return (
		<div ref={coll} className="landing-collection">
			<div className="landing-collection__intro">
				<h1>BE exceptional</h1>
				<h2>Be Glamourous</h2>
				<h2>Be Glamourous</h2>
				<h2>Be Glamourous</h2>
			</div>
			<div className="landing-collection__sticky">
				<div className="collection-header">
					{collection &&
						collection.map((coll, index) => (
							<div key={index + coll.id} className="header-card">
								<h1 className="header-text">{coll.name}</h1>
							</div>
						))}
				</div>
				<div className="collection-image">
					{collection &&
						collection.map((coll, index) => (
							<div key={index + coll.name} className="image-card">
								<img className="image-img" src={coll.image[0]} alt="" />
							</div>
						))}
				</div>
			</div>
		</div>
	);
};

export default Collection;
