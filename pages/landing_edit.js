import React, { useEffect, useContext } from "react";
import Router from "next/router";
//mutations
import { useMutation } from "@apollo/client";
import { ADD_LANDING_PAGE } from "../components/helpers/Add.js";
// components
import HeroEdit from "../components/landing/hero/hero_edit.js";
import PostHeroEdit from "../components/landing/post_hero/post_hero_edit";
import GemColorEdit from "../components/landing/gem_color/gem_color_edit";
import Button from "../components/Buttons/Button.js";
// custom hook
import useForm from "../setup/hooks/useForm.js";

// animation library
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/// find if there is a previously saved landing page
// if it exists fill it out in the form and run update function not add
// we will assume for now that it's the first Landing
const Landing = () => {
	const [addLandingPage, { data, loading, error }] =
		useMutation(ADD_LANDING_PAGE);
	const formData = {
		hero: {
			hero_media: [],
			hero_header: "",
			hero_sub_header: "",
		},
		about: {
			about_image: [],
			about_header: "",
			about_sub_header: "",
			about_second_sub_header: "",
		},
		parallel_slide_display: [
			/* {
				id: "",
				parallelS_main_media: "",
				parallelS_secondary_media: "",
				parallelS_description: "",
			}, */
		],
	};

	loading && <h1>Loading...</h1>;
	error && <h1>Error ....</h1>;
	data && console.log("DATA ", data);

	const imageData = [];

	const { inputs, handleChange } = useForm({ formData, imageData });
	const { hero, about, parallel_slide_display } = inputs.formData;

	const handleSubmit = async (e) => {
		console.log("SUBMIT FORM");
		e.preventDefault();
		console.log("---- FINAL FORM ", inputs.formData);
		addLandingPage({ variables: inputs.formData })
			.then((data) => uploadFileToS3())
			.catch((error) => {
				console.log("ERROR submiting lanind form", error);
			});
	};

	const uploadFileToS3 = async () => {
		console.log("UPLOAING files to S3 imageData ", inputs.imageData);
		await inputs.imageData.map((image, index) => {
			fetch(image.signedRequest, {
				method: "PUT",
				body: image.file,
			})
				.then((response) => {
					console.log("SAVED TO S3 .", image);
					if (index === inputs.imageData.length - 1) {
						Router.push({ pathname: "/" });
					}
				})
				.catch((error) => {
					console.log("ERror uploading file to s3 :", error);
				});
		});
	};

	return (
		<form className="main_container edit" onSubmit={handleSubmit}>
			<div className="save_landing_button-wraper">
				<Button info={{ type: "submit", value: "Save Changes" }} />
			</div>
			<div className="landing_container">
				<HeroEdit form={hero} handleChange={handleChange} />
				<PostHeroEdit form={about} handleChange={handleChange} />
				<GemColorEdit
					form={parallel_slide_display}
					handleChange={handleChange}
				/>
			</div>
		</form>
	);
};

export default Landing;
