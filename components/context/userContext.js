import { createContext, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { CURRENT_USER } from "../helpers/users";
import client from "../../setup/client";
import { getCookie, isAuth } from "../helpers/auth";
import { useRouter } from "next/router";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
	//const { data, loading, error } = useQuery(CURRENT_USER);

	const [currentUser, setUser] = useState("");
	const path = useRouter().pathname;

	//if (loading) <p>Fetching Cuurent User ... </p>;
	//if (error) <p>ERROR : Fetching Cuurent User {error} </p>;

	useEffect(() => {
		console.log("useEffect user context ");
		const user = isAuth();
		if (user) setUser(user);
		/* const fetchUser = async () => { 
            const token = getCookie("token");
            try {
                const { data: currentUser } = await client.query({
                    query: CURRENT_USER,
                    context: {
                            headers: { 
                                authorization: token ? `Bearer ${token}` : '', 
                            }
                        }
                    });
    
                setUser(currentUser)
            } catch (error) {
                console.log("Accessing /User--- error:",error);
            }   
        }
        fetchUser(); */
	}, [path]);

	console.log("**** USER context currentuser >- ", currentUser);

	return (
		<UserContext.Provider value={currentUser}>{children}</UserContext.Provider>
	);
};

export default UserContextProvider;
