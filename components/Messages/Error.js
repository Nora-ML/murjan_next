import Styled from "styled-components";

const ErrorStyle = Styled.h2`
    background-color: var(--alert);
    margin:1% auto;
    color:var(--counter_light);
    opacity:1;
    
    max-width:50vw;
    width: 80%;
    padding:1em 1.5em;

    font-size:15px;
    text-align:center;

    animation-name: fadeIn;
    animation-fill-mode: both;
    animation-timing-function: ease-in;
    animation-duration: 0.3s;
 
`

const Error_RComp = ({ error,message }) => {
    console.log("Error Component  error:",error,"\nmessage:", message)

    const handleError = (err) => { 
        let errMsg = "";
        Object.entries(err).map(([k, v]) => {
            console.log("ERROR -- key:",k," Value :",v)
            if (k === "message") {
                errMsg=v
            }    
        })
        return errMsg;
    }

    return (
        <ErrorStyle>
            {error
                ? handleError(error)
                : message
                  }
        </ErrorStyle>
    )
    
}

export default Error_RComp;