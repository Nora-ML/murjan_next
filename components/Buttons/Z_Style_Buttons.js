import Styled from "styled-components";

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

export { ButtonFill_Style, ButtonTransparent_Style };
