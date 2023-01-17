import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
// styles
import { NavStyle, BurgerStyle } from "../styles/NavStyle";
import { DashBoardStyle } from "../styles/DashBoard_Style.js";
import { AdminStyle } from "../styles/Admin_Style.js";

const AdminLayout = ({ children }) => {
	console.log("Admin layout");
	const path = useRouter().pathname;

	const [screenSize] = useState(
		typeof window !== "undefined" ? window.screen.width : ""
	);
	const [activateNav, setActivateNav] = useState(false);

	console.log("SCREEN SIZE", screenSize);

	useEffect(() => {
		activateNav ? setActivateNav(!activateNav) : "";
	}, [path]);

	const nav_list = () => {
		return (
			<ul>
				<li className={path === "/admin" ? "active" : ""}>
					<Link href="/admin">Filter</Link>
				</li>
				<li className={path.includes("admin/products") ? "active" : ""}>
					<Link href="/admin/products">Products</Link>
				</li>
				<li className={path.includes("admin/users") ? "active" : ""}>
					<Link href="/admin/users">Users</Link>
				</li>
				<li className={path.includes("admin/categories") ? "active" : ""}>
					<Link href="/admin/categories">Categories</Link>
				</li>
				<li className={path.includes("admin/collections") ? "active" : ""}>
					<Link href="/admin/collections">Collections</Link>
				</li>
				<li className={path.includes("admin/tags") ? "active" : ""}>
					<Link href="/admin/tags">Tags</Link>
				</li>
				<li className={path.includes("admin/offers") ? "active" : ""}>
					<Link href="/admin/offers">Offers</Link>
				</li>
			</ul>
		);
	};

	return (
		<DashBoardStyle>
			{screenSize > 768 ? (
				<NavStyle className="user_navigationBar">{nav_list()}</NavStyle>
			) : (
				<NavStyle
					className={
						activateNav ? "user_navigationBar" : "user_navigationBar_hide"
					}>
					<div
						onClick={() => setActivateNav(!activateNav)}
						className="burger_icon"
					/>
					{activateNav ? nav_list() : ""}
				</NavStyle>
			)}

			<AdminStyle>{children}</AdminStyle>
		</DashBoardStyle>
	);
};
export default AdminLayout;
