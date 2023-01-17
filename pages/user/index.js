import withUser from "../withUser.js";
import UserLayout from "../../components/user/UserLayout.js";

const UserBoard = ({user}) => {
    console.log("userboard", user);
    //const { data, error, loading } = useQuery(LIST_USERS);

    return (
        <UserLayout>
            <h1>USER BOARD PAGE </h1>
        </UserLayout>
    )
}


export default withUser(UserBoard);


/* UserBoard.getInitialProps = async context=>{
    //console.log("context", context.req?.headers);

    const token = getCookie("token", context.req)
    
    try {
        const { data: authenticateUser } = await client.query({
            query: AUTH_USER,
            context: {
                    headers: { 
                        authorization: token ? `Bearer ${token}` : '', 
                    }
                }
            });

        return {props :{User:authenticateUser}}
    } catch (error) {
        console.log("Accessing /User--- error:",error);
        return {Error:"Restricted Access"}
    }   

} */

