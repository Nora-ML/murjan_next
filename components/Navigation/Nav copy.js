import Link from "next/link";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import { SizeContext } from "../context/sizeContext";
//Styles
import style from "./nav.module.scss";
// Helper Functions
import { isAuth, logout } from "../helpers/auth";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

//Website Navigation

const Nav = ({ currentUser }) => {
	const path = useRouter().pathname;
	const size = useContext(SizeContext);
	//const [screenSize, setScreenSize] = useState(0);
	const [activateNav, setActivateNav] = useState(false);

	console.log("size ", size, "path", path);

	const { role, name } = currentUser ? Object.values(currentUser)[0] : {};

	useEffect(() => {
		activateNav ? setActivateNav(!activateNav) : "";
	}, [path]);

	/* useEffect(() => {
		if (screenSize === 0) setScreenSize(window.innerWidth);
		window.addEventListener("resize", (e) => setScreenSize(window.innerWidth));

		return () =>
			window.removeEventListener("resize", (e) =>
				setScreenSize(window.innerWidth)
			);
	}, []); */

	const homePageNavigation = () => {
		return (
			<div className={style.navContainer_multiple_ul}>
				<ul className={style.navContainer_ul}>
					<li>
						<Link href="/" className="nav_container-li logo">
							Murjan
						</Link>
					</li>
				</ul>
				<ul className={style.navContainer_ul}>
					<li>
						<Link href="/shop" className="nav_container-li shop-remove">
							Shop
						</Link>
						{path === "/" ? (
							<Link href="/landing_edit" className={style.landing_edit}>
								Make Changes
							</Link>
						) : (
							""
						)}
					</li>
				</ul>
			</div>
		);
	};
	const shopPageNavigation = () => {
		return (
			<div className={style.navContainer_multiple_ul}>
				<ul className={`${style.navContainer_ul}`}>
					<li>
						<Link href="/" className="nav_container-li shop-nav">
							Cart
						</Link>
					</li>
					<li>
						<Link href="/" className="nav_container-li shop-nav">
							favourites
						</Link>
					</li>
				</ul>

				<ul className={style.navContainer_ul}>
					<li>
						<Link href="/" className="nav_container-li logo">
							Murjan
						</Link>
					</li>
				</ul>

				<ul className={style.navContainer_ul}>
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

	const navigationList_B = () => {
		return (
			<ul className={style.burger_list}>
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
				{/* {!path.includes("admin")? <li><Search_RComp/></li>:""} */}
			</ul>
		);
	};

	const navigationList_A = () => {
		return (
			<ul>
				{path === "/shop" ? (
					<li>
						<Link href="/" className="nav_container-li logo">
							Murjan
						</Link>
					</li>
				) : (
					<li>
						<Link href="/shop" className="nav_container-li logo">
							Shop
						</Link>
					</li>
				)}
			</ul>
		);
	};

	useEffect(() => {
		const tl = gsap.timeline({});
		if (location.pathname.includes("shop")) {
			// flipping shop to cart and favourites
			tl.fromTo(".shop-remove", { yPercent: 0 }, { yPercent: -170 }, 0.5);
			tl.fromTo(
				".first-2",
				{ yPercent: 0 },
				{ opacity: 1, yPercent: -110 },
				0.6
			);

			// shrinking the whole nav container
			const navHeight = gsap.getProperty(".nav_container", "height");

			tl.to(".nav_container", {
				scrollTrigger: {
					trigger: ".shop_dropdown-container",
					toggleActions: "play play none reverse",
					//	markers: true,
					start: "top top+=5%",
				},
				height: navHeight / 2,
				ease: "none",
				duration: 1,
			});
		}
		if (location.pathname === "/") {
			tl.to(".nav_container", {
				scrollTrigger: {
					trigger: ".post_hero-container",
					start: "top+=20% top",
					//markers: true,
					end: "bottom top",
					toggleActions: "play play none reverse",
				},
				backgroundColor: "#e6ccb2",
			});
			tl.to(".nav_container", {
				scrollTrigger: {
					trigger: ".gem_color-container",
					start: "top top+=10%",
					//markers: true,
					end: "bottom",
					toggleActions: "play play none reverse",
				},
				backgroundColor: "transparent",
			});
			tl.to(".nav_container", {
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
	}, []);

	return (
		<>
			{size && (size === "large" || size === "desktop") ? (
				<div className={style.navContainer}>
					{path !== "/shop" ? homePageNavigation() : shopPageNavigation()}
				</div>
			) : (
				<div className={style.burgerNavContainer}>
					{navigationList_A()}
					<div
						onClick={() => setActivateNav(!activateNav)}
						className={style.burgerNavContainer_burgerIcon}
					/>
					{activateNav ? (
						<div className={style.burgerNavContainer_burgerList_wrapper}>
							{navigationList_B()}
						</div>
					) : (
						""
					)}
				</div>
			)}
		</>
	);
};
export default Nav;
