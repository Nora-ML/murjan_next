import Styled from "styled-components";

const SuccessStyle = Styled.h2`
    background-color: var(--success);

    margin:0 auto;
    opacity:0;
    color: var(--counter_color);
   
    max-width:50vw;
    width: 90%;
    padding:1em 1.5em;
    font-size:18px;
    text-align:center;

    animation-name: fadeIn;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in;
    animation-duration: 0.5s;
`

const Success_RComp = ({ message }) => {
    return (
        <SuccessStyle>
            {message}
        </SuccessStyle>
    )
    
}

export default Success_RComp;