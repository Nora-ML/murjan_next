import {
	createContext,
	useContext,
	useEffect,
	useReducer,
	useState,
} from "react";
import { cartReducer } from "./reducers/cartReducer";

const CartContext = createContext();

const initialState = {
	items: [{ productId: "", productQty: "" }],
	items_qty: "",
};

const CartContextProvider = ({ children }) => {
	console.log("--- CART CONTEXT");
	const [cart, dispatch] = useReducer(cartReducer, initialState);
	const [cartItem, setCart] = useState([]);

	const addItemToCart = (productId, productQty = 1) => {
		dispatch({ type: "ADD_ITEM", paylod: { productId, productQty } });
	};

	const deleteItemFromCart = (productId) => {
		dispatch({ type: "DELETE_ITEM", paylod: productId });
	};

	const updateItemQty = (productId, productQty) => {
		dispatch({ type: "UPDATE_ITEM", paylod: { productId, productQty } });
	};

	useEffect(() => {
		// added this condition to prevent useless mapping -> 9 March
		if (cart.items[0].productId !== "") {
			console.log("--Cart Context useEffect");
			setCart(cart.items.map((item) => item.productId));
		}
	}, [cart]);

	const passOn = {
		...cart,
		cartItem,
		addItemToCart,
		deleteItemFromCart,
		updateItemQty,
	};

	return <CartContext.Provider value={passOn}>{children}</CartContext.Provider>;
};

function useCart() {
	const all = useContext(CartContext);
	return all;
}

export { CartContextProvider, useCart, CartContext };
