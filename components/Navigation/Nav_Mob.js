import Link from "next/link";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import { SizeContext } from "../context/sizeContext";
// Components
import Search from "../Icons/Search";
// Helper Functions
import { isAuth, logout } from "../helpers/auth";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

//Website Navigation

const NavMobile = ({ currentUser }) => {
	console.log("-- MOBILE NAVBAR");
	const path = useRouter().pathname;
	const [activateNav, setActivateNav] = useState(false);

	const [burgerState, setBurgerState] = useState(false);

	const { role, name, access } = currentUser
		? Object.values(currentUser)[0]
		: {};

	useEffect(() => {
		activateNav ? setActivateNav(!activateNav) : "";
	}, [path]);

	/* 	useEffect(() => {
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

	const stickyNav = () => {
		return (
			<div className="main-container">
				{path.includes("/shop") ? (
					<h2 className={`navbar-head ${burgerState ? "hide" : ""}`}>
						<Link href="/">Murjan</Link>
					</h2>
				) : (
					<h2 className={`navbar-head ${burgerState ? "hide" : ""}`}>
						<Link href="/shop/1">Shop</Link>
					</h2>
				)}
				<div className={`navbar-burger ${burgerState ? "active" : ""}`}>
					<div
						className="burger-icon"
						onClick={() => setBurgerState(!burgerState)}>
						<div className="line line1"></div>
						<div className="line line2"></div>
					</div>
					<ul className="burger-list">
						{isAuth() && role === "admin" ? (
							<li
								className={`burger-list__items ${
									path.includes("admin") ? "active" : ""
								}`}>
								<Link href="/admin">{name}</Link>
							</li>
						) : isAuth() && role === "customer" ? (
							<li
								className={`burger-list__items ${
									path.includes("user") ? "active" : ""
								}`}>
								<Link href="/user">{name}</Link>
							</li>
						) : (
							<li
								className={`burger-list__items ${
									path.includes("signin") ? "active" : ""
								}`}>
								<Link href="/signin">SignIn</Link>
							</li>
						)}
						<li className="burger-list__items">
							<Link href="/">Cart</Link>
						</li>
						<li className="burger-list__items">
							<Link href="/">favourites</Link>
						</li>
						<li className="burger-list__items">
							<Link href="/">search</Link>
						</li>
						{isAuth() && (
							<li className="burger-list__items" onClick={logout}>
								<Link href="/">LogOut</Link>
							</li>
						)}
					</ul>
				</div>
			</div>
		);
	};

	return <nav className="navbar-mobile">{stickyNav()}</nav>;
};
export default NavMobile;
