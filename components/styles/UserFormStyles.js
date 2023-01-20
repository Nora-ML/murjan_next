import { ST } from "next/dist/shared/lib/utils";
import Styled from "styled-components";

const PageContainer_Style = Styled.div.attrs((props) => ({
	width: props.width,
	backColor: props.backColor,
}))`
    background-color: var(--counter_light);
    background-color:${(props) => props.backColor} ;

    position:relative;
    bottom:0;
    left:0;

    width:100%;
    width:${(props) => props.width};
    height:100vh;
    

    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

`;
const FormHeader_Style = Styled.h1.attrs((props) => ({ width: props.width }))`
    width:${(props) => props.width};
    background-color:var(--counter_color);
    font-size:80px;
    color:var(--counter_dark);
    margin:0;
    padding:2%;
    border:var(--main_color) 20px double;
    border-radius: 5px 5px 0 0;
    text-align:center;
    text-transform:capitalize;

`;
const SubContainer_Style = Styled.div.attrs((props) => ({
	width: props.width,
	backColor: props.backColor,
}))`
    background-color: var(--counter_light);
    background-color:${(props) => props.backColor} ;

    width:${(props) => props.width};
    height:auto;

    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

`;
const ButtonFill_Style = Styled.input`
    background-color: var(--counter_dark);
    color:var(--counter_light);  
    border:var(--counter_dark) 2px solid;

    outline:none;
 
    flex-basis:40%;
    height:auto;

    padding: 2vh 2vw;
    cursor:pointer;
`;
const ButtonTransparent_Style = Styled.input`
    background-color: transparent;
    color:var(--counter_dark);

    border-top:5px var(--counter_dark) double ;
    border-right:5px var(--counter_dark) double ;
    border-left:2px var(--counter_dark) solid ;
    border-bottom:2px var(--counter_dark) solid ;

    outline:none;

    text-align:center;

    flex-basis:30%;
    height:auto;

    padding: 2vh 2vw;
    cursor:pointer;

    &:hover{
        scale:0.98;
    }
    &:active{
        transform:rotate(360deg);
        transition:transform 3s ease-in;
    }
`;

export {
	PageContainer_Style,
	SubContainer_Style,
	ButtonFill_Style,
	FormHeader_Style,
	ButtonTransparent_Style,
};
