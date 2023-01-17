import Styled from "styled-components";


const NavStyle = Styled.nav`
    background-color:var(--main_color);
    border-bottom: 1px solid var(--counter_light);
    border-top:none;

    color:var(--counter_light);
    position:relative;
    
    min-height:var(--nav_height);
    height:auto;


    .burger_icon{
        background-image:url("https://cdn-icons-png.flaticon.com/512/3917/3917215.png");
        width:50px;
        height:50px;
        position:absolute;
        z-index:10;
        background-color:red;
    }
    ul{
        margin:0;
        padding:0;

        display:flex;
        flex-wrap:wrap;   
        justify-content:center;       
    }

    li{
        color:var(--counter_light);
        font-size:18px;

        list-style-type: none; 
        text-decoration: none;

        flex-basis:10%;
        text-align:center;

        
        padding:0.70em 1.5em;
        cursor:pointer;
        
        
        &.active{
            background-color:var(--counter_dark);
        }
    }
    a{
        color:var(--counter_light);
    }
`
const BurgerStyle = Styled.nav`
    background-color:var(--main_color);
    border-bottom: 1px solid var(--counter_light);
    border-top:none;

    color:var(--counter_light);

    display:flex;
    justify-content:space-between;

    max-height:var(--nav_height);
    height:auto;

    .burger_icon{
        background-image:url("https://cdn-icons-png.flaticon.com/512/3917/3917215.png");
        width:50px;
        height:50px;
        background-color:red;
    }

    .burger_list--wrapper{
        border:1px solid purple;

        position:absolute;
        z-index:2;

        top:var(--nav_height);

        width:100vw;
        height:auto;


        .burger_list{
            background-color:var(--main_color);
            background-color:pink;
            margin:0;
            padding:0;

            
            li{
               flex-basis:80%;
            }
            
        }
    
    }
   

    ul{
        margin:0;
        padding:0;

        display:flex;
        flex-wrap:wrap;
        
        justify-content:center;       
    }

    li{
        color:var(--counter_light);
        font-size:18px;

        list-style-type: none; 
        text-decoration: none;

        flex-basis:10%;
        text-align:center;

        
        padding:0.70em 1.5em;
        cursor:pointer;
        
        
        &.active{
            background-color:var(--counter_dark);
        }
    }
    a{
        color:var(--counter_light);
    }
`


const SearchStyle = Styled.div`
    display:flex;
    position:relative;

`

export { NavStyle,SearchStyle,BurgerStyle };