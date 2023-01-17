import Link from "next/link";
import { useRouter } from "next/router";
// styles
import { NavStyle } from "../styles/NavStyle";
import { DashBoardStyle } from "../styles/DashBoard_Style.js";
import { AdminStyle } from "../styles/Admin_Style.js";

const UserLayout = ({ children }) => {
	console.log("User layout");
	const path = useRouter().pathname;

	return (
		<DashBoardStyle>
			<NavStyle className="user_navigationBar">
				<ul>
					<li className={path === "/user" ? "active" : ""}>
						<Link href="/user">Dashboard</Link>
					</li>
					<li className={path.includes("user/cart") ? "active" : ""}>
						<Link href="/user/cart">Cart</Link>
					</li>
					<li className={path.includes("user/favourites") ? "active" : ""}>
						<Link href="/user/favourites">Favourites</Link>
					</li>
					<li className={path.includes("user/orders") ? "active" : ""}>
						<Link href="/user/orders">Orders</Link>
					</li>
					<li className={path.includes("user/settings") ? "active" : ""}>
						<Link href="/user/settings">Settings</Link>
					</li>
				</ul>
			</NavStyle>
			<AdminStyle>{children}</AdminStyle>
		</DashBoardStyle>
	);
};
export default UserLayout;
