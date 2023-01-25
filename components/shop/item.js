import React, { useEffect, useRef, useState } from "react";
import Router from "next/router";
import Link from "next/link";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Flip } from "gsap/dist/Flip";

// item display requirment
// 1- appear on scroll (one by one)
// 2- container moves up slightly
// 3- inner image zooms out slightly
// 4- item details slide in after the image  (one by one)

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Flip);

const Item = ({ size, product, specialClass }) => {
	console.log("Item Component size", size, "product", product);

	const { name, price, image, id } = product;
	const [active, setActive] = useState(false);
	const main = useRef();

	const transitionAnim = () => {
		console.log("transitionAnimation id", id, "e");
		setActive(true);
		const state = Flip.getState(`.id_${id}_wrapper`);

		/* gsap.set(`.id_${id}`, {
			zIndex: 12,
			width: "55vw",
			height: "100vh",
			position: "relative",
		}); */
		gsap.set(`.id_${id}_wrapper`, {
			zIndex: 11,
			absolute: true,
			border: "green 1px solid",
		});
		gsap.set(".target", {
			zIndex: 10,
			//autoAlpha: 1,
		});

		const tl = gsap.timeline({});

		Flip.fit(state, ".target", {
			//fitChild: `.id_${id}_img`,
			//scale: true,
			//width: "55%",
			//height: "100%",
			absolute: true,
			duration: 3,
			onEnter: () => {
				tl.to(`.id_${id}_img`, {
					//border: "red 1px solid",
					opacity: 0.5,
					/* width: `${80 * 0.55}%`,
					height: `${80 * 0.55}%`, */
					ease: "power3.inOut",
				}).to(".overlay", {
					zIndex: 10,
					ease: "power3.inOut",
					opacity: 0.8,
					autoAlpha: 1,
				});
			},
			onLeave: () => {
				tl.to(
					`.id_${id}_img`,
					{
						//backgroundColor: "white",
						delay: 1.7,
						scale: 1.2,
					},
					0
				);
				tl.to(
					`.id_${id}_wrapper`,
					{
						backgroundColor: "#f3eaddcb",
						delay: 1.8,
					},
					0
				);
			},
			ease: "power3.inOut",
		});

		setTimeout(() => {
			Router.push("/product");
		}, 2100);
	};

	return (
		<>
			{/* <div className="target">
				<div className="target_item-img"></div>
			</div>
			{active && <div className="overlay"></div>} */}

			<div className={`shop_item ${specialClass}`}>
				<div className={`image_wrapper `}>
					<Link href="/">
						<img
							onClick={() => transitionAnim()}
							className={`shop_item-img id_${id}_img`}
							src={image[0]}
							//src={image3}
							//src={arrayImages[Math.floor(Math.random() * 6)]}
							alt=""
						/>
					</Link>
				</div>
				<div className={`shop_item-details ${size}`}>
					<p className="shop_item_details-name">{name}</p>
					<p className="shop_item_details-price">{price}</p>
				</div>
			</div>
		</>
	);
};
export default Item;
