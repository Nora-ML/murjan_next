import { createContext, useEffect, useReducer, useState } from "react";
import filterReducer from "./reducers/filterReducer";

export const FilterContext = createContext();

const initialState = { gemFilt: [], collFilt: [], catFilt: [] };

const FilterContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(filterReducer, initialState);
	const [filterProducts, setFilterProducts] = useState();

	const addToFilter = (category, item) =>
		dispatch({ type: "ADD_FILTER", payload: [category, item] });

	useEffect(() => {
		// fetch products in selected filter from API
	});

	const passOn = { ...state, addToFilter };

	return (
		<FilterContext.Provider value={passOn}>{children}</FilterContext.Provider>
	);
};
export default FilterContextProvider;
