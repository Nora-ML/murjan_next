export const cartReducer = (state, action) => {
	let { productId, productQty } = action.paylod;
	// reCheck if item is in the cart
	let itemExistsInCart = state.items.filter(
		(item) => item.productId === productId
	)[0];
	if (itemExistsInCart && action.type !== "UPDATE_ITEM") {
		console.log("Item exists in cart.Redirecting to Update Item ");
		action.type = "UPDATE_ITEM";
	}
	switch (action.type) {
		case "ADD_ITEM":
			console.log("ADD ITEM");
			let newQty = state.items_qty + productQty;
			let newItem = { productId, productQty };
			return {
				...state,
				items: [...state.items, newItem],
				items_qty: newQty,
			};
		case "UPDATE_ITEM":
			console.log("UPDATE ITEM");
			let adjustQty = productQty === "+" ? +1 : -1;

			let newItems = state.items.map((item) =>
				item.productId === productId ? item.productQty + adjustQty : item
			);
			return { items: newItems, items_qty: state.items_qty + adjustQty };

		case "DELETE_ITEM":
			console.log("DELETE ITEM");
		default:
			console.log("FAILED TO Cart Reducer");
	}
};
