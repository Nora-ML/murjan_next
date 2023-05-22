import { setCookie, setLocalStorage } from "../../helpers/auth";

const filterReducer = (state, action) => {
	let selectionItem = action.payload[1];
	let selectionCat = action.payload[0];
	console.log("PAYLOAD", action.payload);
	console.log("STATE", state);

	switch (action.type) {
		case "ADD_FILTER":
			//console.log("selectionCat", selectionCat);
			switch (selectionCat) {
				case "gemFilt":
					if (state.gemFilt.includes(selectionItem)) {
						let newArray = state.gemFilt.filter((ele) => ele !== selectionItem);
						return { ...state, gemFilt: newArray };
					} else {
						return { ...state, gemFilt: [...state.gemFilt, selectionItem] };
					}
				case "catFilt":
					if (state.catFilt.includes(selectionItem)) {
						let newArray = state.catFilt.filter((ele) => ele !== selectionItem);
						return { ...state, catFilt: newArray };
					} else {
						return { ...state, catFilt: [...state.catFilt, selectionItem] };
					}
				case "collFilt":
					if (state.collFilt.includes(selectionItem)) {
						let newArray = state.collFilt.filter(
							(ele) => ele !== selectionItem
						);
						return { ...state, collFilt: newArray };
					} else {
						return { ...state, collFilt: [...state.collFilt, selectionItem] };
					}
				default:
					console.log("FAAAAAAAAAAAAAIled");
					break;
			}

			// placed this here insted of Useeffect -> 9 March
			/* setCookie("filter", state);
			setLocalStorage("filter", state); */
			break;
		default:
			console.log("FAAAAAAAAAAAAAIled CONTEXT");
			return state;
	}
};

export default filterReducer;
