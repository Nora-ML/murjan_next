import { useState, createContext, useEffect } from "react";

export const SizeContext = createContext();

const SizeContextProvider = ({ children }) => {
	const [size, setSize] = useState();

	console.log("***** RESZING context  ");

	useEffect(() => {
		console.log("RESZING context");
		let resizeId;

		const sizeFunc = () => {
			let wW = window.innerWidth;
			//console.log("window width", wW);
			if (wW <= 481) {
				setSize("phone");
			} else if (wW <= 769 && wW > 481) {
				setSize("tablet");
			} else if (wW <= 1024 && wW > 769) {
				setSize("desktop");
			} else {
				setSize("large");
			}
		};

		const delayedCall = () => {
			//console.log("DELAYED CALL");
			clearTimeout(resizeId);
			resizeId = setTimeout(sizeFunc, 500);
		};

		window.addEventListener("resize", delayedCall);
		window.addEventListener("load", sizeFunc);

		sizeFunc();

		return () => {
			window.removeEventListener("resize", delayedCall);
			window.removeEventListener("load", sizeFunc);
		};
	}, []);

	return <SizeContext.Provider value={size}>{children}</SizeContext.Provider>;
};

export default SizeContextProvider;
