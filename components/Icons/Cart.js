import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { useMutation } from "@apollo/client";
import { ADD_CART } from "../helpers/Add";
import { useCart } from "../context/cartContext";
import styled from "styled-components";

const Cart = (product) => {
	const {
		items,
		items_qty,
		cartItem,
		addItemToCart,
		deleteItemFromCart,
		updateItemQty,
	} = useCart();

	console.log("cartItem", cartItem);
	//const { cart, addItemToCart, deleteItemFromCart, updateItemQty } =useContext(CartContext);

	function updateCart(e, fnc) {
		console.log("Cart div event", items);
		fnc === "ADD_ITEM"
			? addItemToCart(product)
			: console.log("HELLOOOO cart", items);
	}

	return (
		<>
			{cartItem && cartItem.includes(product) ? (
				<div className="cart" onClick={(e) => updateCart(e, "UPDATE_ITEM")}>
					<p>The More the Merrier !</p>
					<input
						className="cart-input"
						type="number"
						maxLength="2"
						defaultValue="1"
						step="1"
						min="1"
					/>
				</div>
			) : (
				<div className="cart" onClick={(e) => updateCart(e, "ADD_ITEM")}>
					<p>Add To Cart</p>
					<img
						className="cart-icon"
						src="https://www.freeiconspng.com/uploads/shopping-basket-icon-18.png"
						alt="cart"
					/>
				</div>
			)}
		</>
	);
};

export default Cart;
