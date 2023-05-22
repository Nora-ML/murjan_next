import { createContext, useEffect, useReducer, useState } from "react";
import filterReducer from "./reducers/filterReducer";
import { setCookie, setLocalStorage } from "../helpers/auth";

export const FilterContext = createContext();

const initialState = { gemFilt: [], collFilt: [], catFilt: [] };

const FilterContextProvider = ({ children }) => {
	console.log("--- FILTER CONTEXT");

	const [state, dispatch] = useReducer(filterReducer, initialState);
	const [filterProducts, setFilterProducts] = useState();

	const addToFilter = (category, item) =>
		dispatch({ type: "ADD_FILTER", payload: [category, item] });

	// placed this in the reducer insted of here -> 9 March
	useEffect(() => {
		// fetch products in selected filter from API
		console.log("--Filter Context useEffect");
		setCookie("filter", state);
		setLocalStorage("filter", state);
	}, [state]);

	const passOn = { ...state, addToFilter };

	return (
		<FilterContext.Provider value={passOn}>{children}</FilterContext.Provider>
	);
};
export default FilterContextProvider;
