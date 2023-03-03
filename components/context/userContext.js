import { createContext, useEffect, useState } from "react";
import { isAuth } from "../helpers/auth";
import { useRouter } from "next/router";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
	console.log("--- USER CONTEXT");

	const [currentUser, setUser] = useState("");
	const path = useRouter().pathname;

	useEffect(() => {
		console.log("--User Context useEffect");
		const user = isAuth();
		if (user) setUser(user);
	}, [path]);

	return (
		<UserContext.Provider value={currentUser}>{children}</UserContext.Provider>
	);
};

export default UserContextProvider;
