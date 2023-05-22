import { createContext, useState } from "react";

export const LandingContext = createContext();

const LandingContextProvider = ({ children }) => {
	const [landingInContext, setLanding] = useState();
	const [heroVideoLoaded, setHeroVideo] = useState(false);

	console.log("LANDING CONTEXT ******* ");

	return (
		<LandingContext.Provider
			value={{ landingInContext, setLanding, heroVideoLoaded, setHeroVideo }}>
			{children}
		</LandingContext.Provider>
	);
};

export default LandingContextProvider;
