import { useContext } from "react";
import { createGlobalStyle } from "styled-components";
import Nav from "../components/Navigation/Nav.js";
import NavMobile from "./Navigation/Nav_Mob.js";
import dynamic from "next/dynamic";
import { SizeContext } from "./context/sizeContext.js";

const GlobalStyles = createGlobalStyle`
    html{
        box-sizing: border-box;
        --main_color:#e6ccb2;
        --darkest:#000000;
        --counter_light:#f3eadd;
        --another_light:#ead4be;
        --counter_med:#bcbcbc;
        --counter_dark:#524335;
        --alert:red;
        --success:blue;
        --shadow:#281e3254;
        --nav_height:7vh;
        --nav_width:10vh;
    }

    *,*:before,*:after{
        box-sizing: inherit;
    }
    body{
        padding:0;
        margin:0;
        width: 100vw;
        background-color: var(--main_color);
        overflow-x: hidden;

        
    font-size: 16px;
    font-family: 'Cinzel', serif;
    }
    a{
        text-decoration: none;
    }
    a:hover{
        text-decoration: underline;
    }

    .main-container{
        max-width:1200px;
        margin:0 auto;

    }

`;

const DynamicNav = dynamic(() => import("./Navigation/Nav.js"), { ssr: false });

const Layout = ({ children /* , currentUser */ }) => {
	console.log("LAYOUT ..");
	const size = useContext(SizeContext);

	return (
		<div>
			<GlobalStyles />
			{size && (size === "large" || size === "desktop") ? (
				<Nav /* currentUser={currentUser} */ />
			) : (
				<NavMobile /* currentUser={currentUser} */ />
			)}
			<div>{children}</div>
		</div>
	);
};
export default Layout;
