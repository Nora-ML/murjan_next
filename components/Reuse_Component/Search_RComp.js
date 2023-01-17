import { useState, useEffect } from "react";
import { useRouter } from "next/router.js";
import Router from "next/router.js";

import {
	InputField,
	InputLabel,
	InputFieldSearch,
} from "../Inputs/Z_Style_Inputs";

import { SearchStyle } from "../styles/NavStyle.js";
import { IconIn } from "../Editing_Icons/Z_Style_Icons";

const Search_RComp = ({ className }) => {
	console.log("Search component");

	const path = useRouter().pathname;
	const [selection, setSelection] = useState({
		term: "firstshot",
		type: "all",
	});

	const { term, type } = selection;

	const debounce = (fn, time) => {
		let timeOut;

		return (...args) => {
			clearTimeout(timeOut);
			timeOut = setTimeout(() => {
				fn(...args);
			}, time);
		};
	};

	const searchProcess = (t, ty) => {
		if (path.includes("admin")) {
			console.log("Pushing query in url admin", t, "-", ty);
			Router.push({
				pathname: `${path}`,
				query: `type=${ty}&term=${t}`,
			});
		} else {
			Router.push({
				pathname: `/filter`,
				query: `type=${ty}&term=${t}`,
			});
		}
	};

	const handleChangeProcess = (e) => {
		console.log("HAndling term Change");
		const { value, name } = e.target;
		console.log("path ", path);
		setSelection({ ...selection, [name]: value });
	};

	const search = debounce(searchProcess, 500);
	const handleChange = debounce(handleChangeProcess, 500);

	useEffect(() => {
		console.log("SEARCh useseffect");
		if (path.includes("admin")) {
			let typeS = path.split("/admin/")[1];
			console.log("HAndling type Change in ADMIN mode type,:", typeS);
			setSelection({ ...selection, type: typeS });
		}

		if (term !== "firstshot" && type) {
			console.log("FIIIIIIIIIIIIRE SEARCH", term, type);
			search(term, type);
		}
	}, [path, term]);

	return (
		<SearchStyle className={className}>
			{!path.includes("admin") ? (
				<InputLabel forHTML="term">
					<InputField
						onChange={handleChange}
						type="text"
						name="term"
						id="term"
					/>
				</InputLabel>
			) : (
				<InputFieldSearch
					onChange={handleChange}
					type="text"
					name="term"
					id="term"
				/>
			)}
			{!path.includes("admin") ? (
				<InputLabel forHTML="type">
					<select onChange={handleChange} name="type" id="type">
						<option value="all">All</option>
						<option value="products">Products</option>
						<option value="tags">Tags</option>
						<option value="collections">Collections</option>
						<option value="categories">Categories</option>
					</select>
				</InputLabel>
			) : (
				<IconIn
					src="https://cdn-icons-png.flaticon.com/512/158/158740.png"
					alt="Search icon"
				/>
			)}
		</SearchStyle>
	);
};
export default Search_RComp;
