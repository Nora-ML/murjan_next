import Styled from "styled-components";

const DashBoardStyle = Styled.div`
        background-color:var(--main_color);

        overflow:hidden;
       
        margin:0;
        height:calc(100vh - var(--nav_height));  
    
        display:flex;
        

    .user_navigationBar{

        

        @media screen and  (max-width:768px){
            position:absolute;
            z-index:2;
            height:calc(100vh - var(--nav_height));  
            transform:translateX(0%);
    
        }
        &_hide{
            background-color:magenta;
            transform:translateX(-100%);
        }
        ul{
            flex-direction: column;
            justify-content:space-evenly;
        }
    }
    
    .burger_icon{
        width:20px;
        height:100px;
    }

`
const Dash_HeaderStyle = Styled.h1`
    margin:0;
    padding:2% 0;
`

const Dash_FooterStyle = Styled.div`
    border-top:var(--main_color) 5px double;

`



export { DashBoardStyle,Dash_HeaderStyle,Dash_FooterStyle };