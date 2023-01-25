import styled, { createGlobalStyle } from "styled-components";
import Nav from "../components/Navigation/Nav.js";
import dynamic from "next/dynamic";

const GlobalStyles = createGlobalStyle`
    html{
        box-sizing: border-box;
        --main_color:#e6ccb2;
        --darkest:#000000;
        --counter_light:#f3eadd;
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
    }
    a{
        text-decoration: none;
    }
    a:hover{
        text-decoration: underline;
    }

`;

const DynamicNav = dynamic(() => import("./Navigation/Nav.js"), { ssr: false });

const Layout = ({ children, currentUser }) => {
	return (
		<div>
			<GlobalStyles />
			<Nav currentUser={currentUser} />
			<div>{children}</div>
		</div>
	);
};
export default Layout;
