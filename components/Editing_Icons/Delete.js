import { IconStyle } from "./Z_Style_Icons.js";
import { update } from "../helpers/update.js";
import { useContext } from "react";
import { UserContext } from "../context/userContext.js";
import { useMutation } from "@apollo/client";
import {
	DELETE_CATEGORY,
	DELETE_COLLECTION,
	DELETE_PRODUCT,
	DELETE_TAG,
	DELETE_USER,
	DELETE_OFFER,
} from "../helpers/delete.js";

const Delete = ({ id, type }) => {
	const { access } = useContext(UserContext) || {};
	// delete
	const [deleteProduct] = useMutation(DELETE_PRODUCT);
	const [deleteUser] = useMutation(DELETE_USER);
	const [deleteCategory] = useMutation(DELETE_CATEGORY);
	const [deleteCollection] = useMutation(DELETE_COLLECTION);
	const [deleteTag] = useMutation(DELETE_TAG);
	const [deleteOffer] = useMutation(DELETE_OFFER);

	const getTypeDelete = (t) =>
		t === "product"
			? deleteProduct
			: t === "user"
			? deleteUser
			: t === "category"
			? deleteCategory
			: t === "collection"
			? deleteCollection
			: t === "tag"
			? deleteTag
			: t === "offer"
			? deleteOffer
			: "";

	const deleteFn = getTypeDelete(type);

	const remove = async () => {
		if (access && access === "admin_full") {
			if (confirm("Are your sure You want to delete this Item?")) {
				await deleteFn({ variables: { id: id }, update })
					.then((response) => console.log("response", response))
					.catch((error) => console.log("error :", error));
			}
		} else {
			alert("You are Not authorized to delete an item");
		}
	};

	return (
		<IconStyle
			src="https://findicons.com/files/icons/1262/amora/128/delete.png"
			alt="Delete icon"
			onClick={() => remove()}
		/>
	);
};
export default Delete;
