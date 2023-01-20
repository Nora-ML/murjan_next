import React, { useEffect, useContext } from "react";
import Router from "next/router";
//mutations and queries
import { useMutation, useQuery } from "@apollo/client";
import { ADD_LANDING_PAGE } from "../components/helpers/Add.js";
import { GET_LANDING } from "../components/helpers/landing.js";
import { UPDATE_LANDING_PAGE } from "../components/helpers/update.js";
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

const Landing = () => {
	console.log("LANDING _EDIt page");
	const { data, loading, error } = useQuery(GET_LANDING);
	const [addLandingPage] = useMutation(ADD_LANDING_PAGE);
	const [updateLandingPage] = useMutation(UPDATE_LANDING_PAGE);

	let fetchedForm;
	let cleanedParallelS = [];

	if (loading) return <h1>Loading...</h1>;
	if (error) return <h1>Error ....</h1>;
	if (data) {
		fetchedForm = data.getLanding[0];
		fetchedForm.parallel_slide_display.map((slide) => {
			cleanedParallelS = [
				...cleanedParallelS,
				...[
					{
						id: slide.id,
						parallelS_main_media: slide.parallelS_main_media,
						parallelS_secondary_media: slide.parallelS_secondary_media,
						parallelS_description: slide.parallelS_description,
					},
				],
			];
		});
	}

	const formData = {
		hero: {
			hero_media: fetchedForm ? fetchedForm.hero.hero_media : [],
			hero_header: fetchedForm ? fetchedForm.hero.hero__header : "",
			hero_sub_header: fetchedForm ? fetchedForm.hero.hero_sub__header : "",
		},
		about: {
			about_image: fetchedForm ? fetchedForm.about.about_image : [],
			about_header: fetchedForm ? fetchedForm.about.about_header : "",
			about_sub_header: fetchedForm ? fetchedForm.about.about_sub_header : "",
			about_second_sub_header: fetchedForm
				? fetchedForm.about.about_second_sub_header
				: "",
		},
		parallel_slide_display: fetchedForm ? cleanedParallelS : [],
	};

	const imageData = [];
	const { inputs, handleChange } = useForm({ formData, imageData });
	const { hero, about, parallel_slide_display } = inputs.formData;

	console.log("********* LANDING_EDIT Page, Inputs ", inputs);

	const handleSubmit = async (e) => {
		console.log("SUBMIT FORM");
		e.preventDefault();
		if (data) {
			updateLandingPage({ variables: inputs.formData })
				.then((data) => uploadFileToS3())
				.catch((error) => {
					console.log("ERROR submiting lanind form", error);
				});
		} else {
			addLandingPage({ variables: inputs.formData })
				.then((data) => uploadFileToS3())
				.catch((error) => {
					console.log("ERROR submiting lanind form", error);
				});
		}
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
