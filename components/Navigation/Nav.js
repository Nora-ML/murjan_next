import Link from "next/link";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
// Components
import Search from "../Icons/Search";
// Helper Functions
import { isAuth, logout } from "../helpers/auth";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

//Website Navigation

const Nav = ({ currentUser }) => {
	console.log("-- DESKTOP NAVBAR");

	const path = useRouter().pathname;
	const [activateNav, setActivateNav] = useState(false);

	const { role, name, access } = currentUser
		? Object.values(currentUser)[0]
		: {};

	useEffect(() => {
		activateNav ? setActivateNav(!activateNav) : "";
	}, [path]);

	/* useEffect(() => {
		const tl = gsap.timeline({});
		if (location.pathname.includes("shop")) {
			// flipping shop to cart and favourites
			/* tl.fromTo(".shop-remove", { yPercent: 0 }, { yPercent: -170 }, 0.5);
			tl.fromTo(
				".first-2",
				{ yPercent: 0 },
				{ opacity: 1, yPercent: -110 },
				0.6
			); 

			// shrinking the whole nav container
			const navHeight = gsap.getProperty(".navContainer", "height");

			tl.to(".navContainer", {
				scrollTrigger: {
					trigger: ".shop_dropdown-container",
					toggleActions: "play play none reverse",
					//markers: true,
					start: "top top+=15%",
				},
				height: navHeight / 2,
				border: "1px red solid",
				ease: "none",
				duration: 1,
			});
		}
		if (location.pathname === "/") {
			tl.to(".navContainer", {
				scrollTrigger: {
					trigger: ".post_hero-container",
					start: "top+=20% top",
					//markers: true,
					end: "bottom top",
					toggleActions: "play play none reverse",
				},
				backgroundColor: "#e6ccb2",
			});
			tl.to(".navContainer", {
				scrollTrigger: {
					trigger: ".gem_color-container",
					start: "top top+=10%",
					//markers: true,
					end: "bottom",
					toggleActions: "play play none reverse",
				},
				backgroundColor: "transparent",
			});
			tl.to(".navContainer", {
				scrollTrigger: {
					trigger: ".category_main_container",
					start: "top+=5% top+=5%",
					//markers: true,
					end: "bottom",
					//toggleActions: "play play none reverse",
					scrub: 0.1,
				},
				yPercent: -100,
				duration: 0.5,
				ease: "none",
			});
		}
	}, []); */

	const homePageNavigation = () => {
		return (
			<div className="navContainer_multiple_ul">
				<ul className="navContainer_ul">
					<li>
						<Link prefetch={false} href="/" className="navContainer-li logo">
							Murjan
						</Link>
					</li>
				</ul>
				<ul className="navContainer_ul">
					<li>
						<Link
							prefetch={false}
							href="/shop/1"
							className="navContainer-li shop-remove">
							Shop
						</Link>
					</li>
				</ul>
			</div>
		);
	};
	const homePageNavigationAdmin = () => {
		return (
			<div className="navContainer_multiple_ul">
				<ul className="navContainer_ul">
					<li>
						<Link
							prefetch={false}
							href="/landing/admin"
							className="navContainer-li logo">
							Murjan
						</Link>
					</li>
				</ul>
				<ul className="navContainer_ul">
					<li>
						<Link
							prefetch={false}
							href="/landing_edit"
							className="navContainer-li ">
							Edit Landing Page
						</Link>
					</li>
				</ul>
				<ul className="navContainer_ul">
					<li>
						<Link
							prefetch={false}
							href="/shop/1"
							className="navContainer-li shop-remove">
							Shop
						</Link>
					</li>
				</ul>
			</div>
		);
	};
	const shopPageNavigation = () => {
		return (
			<div className="navContainer_multiple_ul">
				<ul className="navContainer_ul">
					<li className="cart">
						<Link href="/">
							<img
								className="cart-icon"
								src="https://www.freeiconspng.com/uploads/shopping-basket-icon-18.png"
								alt="cart"
							/>
						</Link>
					</li>
					<li>
						<Link href="/" className="navContainer-li shop-nav">
							favourites
						</Link>
					</li>
				</ul>

				<ul className="navContainer_ul">
					{
						<li>
							<Link href="/landing/admin" className="navContainer-li logo">
								Murjan
							</Link>
						</li>
					}
				</ul>

				<ul className="navContainer_ul">
					{!isAuth() && (
						<>
							<li className={path.includes("signin") ? "active" : ""}>
								<Link href="/signin">SignIn</Link>
							</li>
							<li className={path.includes("signup") ? "active" : ""}>
								<Link href="/signup">SignUp</Link>
							</li>
						</>
					)}

					{isAuth() && <li onClick={logout}>LogOut</li>}
					{role === "admin" ? (
						<li className={path.includes("admin") ? "active" : ""}>
							<Link href="/admin">Admin</Link>
						</li>
					) : role === "customer" ? (
						<li className={path.includes("user") ? "active" : ""}>
							<Link href="/user">{name}</Link>
						</li>
					) : (
						""
					)}
				</ul>
			</div>
		);
	};
	return (
		<div className="navContainer">
			{path === "/"
				? homePageNavigation()
				: path === "/landing/admin"
				? homePageNavigationAdmin()
				: shopPageNavigation()}
		</div>
	);
};
export default Nav;
