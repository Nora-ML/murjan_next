import Styled from "styled-components";

const BasicForm_Style = Styled.form.attrs((props) => ({ width: props.width }))`
    background-color:var(--main_color);
    overflow:auto;
    
    padding: clamp(18px,3%,30px) ;
    border-radius:  0 0 5px 5px;

    height:clamp(400px,calc(${(props) => props.width}/1),1000px);
    

    display:flex;
    flex-basis:clamp(300px,1500px,${(props) => props.width});
    flex-wrap:wrap;
    align-items:center;
    justify-content:center;

    transition:height 0.4s linear;

    @media screen and (max-width:769px){
        //border: green dashed 2px;
        flex-basis:clamp(250px,calc(${(props) => props.width}/1.2),1000px);
    }
    @media screen and (max-width:481px){
        flex-basis:100%;
    }
`;
const MainFormStyle = Styled.div.attrs((props) => ({ width: props.width }))`
        background-color:var(--color_main);
        padding-right: ${(props) =>
					props.width >= "80%" ? "clamp(18px,3%,30px)" : ""};   
        height:auto;

        display:flex;  
        flex-basis:${(props) => (props.width >= "80%" ? "70%" : props.width)};  
        flex-wrap:wrap;  

        align-items:center;
        justify-content:${(props) =>
					props.width >= "80%" ? "flex-start" : "space-evenly"};  
              
        gap:${(props) => (props.width >= "80%" ? "5px 5px" : "2vh 0")};
             

    @media screen and (max-width:769px){
        padding:0;
        margin-bottom:4%;
        justify-content:center;
        flex-basis:90%;
        
    }
    @media screen and (max-width:481px){
        flex-basis:100%;
        border: black dashed 2px;
        flex-grow:0;
    }
                    

`;
const SubFormStyle = Styled.div.attrs((props) => ({ width: props.width }))`
        background-color:var(--counter_light);
        border-radius:5px;
        
        min-height:calc(${(props) => props.width}/1.5);
        height:auto;
        padding:0 1%;

        display:flex;
        flex-basis:20%;
        flex-grow:1;
        flex-wrap:wrap;

        align-items:center;
        justify-content:center;


        @media screen and (max-width:769px){
            min-height:calc(${(props) => props.width}/3);
            flex-basis:90%;
            flex-grow:0;
        }

        @media screen and (max-width:481px){
            flex-basis:100%;
            border:dashed red 2px;
        }

        label{
            color:var(--color_main);
            flex-basis:85%;

            @media screen and (max-width:769px){
                flex-basis:40%;
            }
            @media screen and (max-width:481px){
                flex-basis:90%;
            }

            &:focus-within{
                border:transparent 1px solid;
                background-color:var(--counter_dark);
                color:var(--counter_light);

            }
        }

        input{
            border-top:grey solid 1px;
            width:90%;
            margin:2% auto;
            padding:2%;
            outline:none;

        }

`;
const ButtonForm = Styled.div.attrs((props) => ({
	width: props.width,
	numOfBtns: props.numOfBtns,
}))`
        display:flex;
        margin:3% 0 0% 0;
        flex-basis:100%;
        align-items:center;
        justify-content:${(props) =>
					props.numOfBtns === 2 ? "space-between" : "center"}  ;

`;
export {
	BasicForm_Style,
	SubFormStyle,
	MainFormStyle,
	ButtonForm,
	/* InputField,
	InputLabel,
	InputFieldSearch, */
};

/*
    .verification_wrap{
        height:25vh;
        width:70%;
        display:flex;
        flex-wrap:nowrap;
        justify-content:center;
        align-items:center;
    }

` */
/* const InputLabel = Styled.label.attrs((props) => ({ width: props.width }))` 
        background-color:transparent; 
        //border:var(--counter_dark) solid 1px;
        opacity:0;

        color:var(--counter_light);
        text-transform:uppercase;
        font-weight:bold;
        
        padding: 0.75% 1%;
        border-radius:5px;

        display:flex;
        flex-direction:column;
        flex-basis:${(props) => props.width};
        flex-grow:1;  

        
        animation-name: fadeIn;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
        animation-delay:0.2s;
        animation-duration: 0.3s;
    
        @keyframes fadeIn {
            0%{opacity:0;}
            100%{opacity:1;}
        }


        &.number_label{
            flex-basis:20%;
        }
        textarea{
            border:none;
            margin-top:2%;
            outline:none; 
                  
        }
        &:focus-within{
            border:var(--counter_dark) solid 1px;
            background-color:var(--counter_dark);
        }


`;

const InputField = Styled.input`
    background-color: var(--counter_light);
    flex-basis:100%;
    
    padding: 2% 2%;
    margin-top:2%;
    border-radius:5px;
    border:none;
    outline:none;
    letter-spacing:0.05rem;
    color:var(--main_color);

    &.verification_input{  
        margin:0;
        margin-right:2%;
        width:75px;
        border-radius:10px;
        font-size:75px;
        background-color:transparent;
        border:1px solid var(--counter_light);
        color:var(--counter_light);
        text-align:center;
        -moz-appearance:textfield;

        &::-webkit-outer-spin-button,
        ::-webkit-inner-spin-button{
            -webkit-appearance: none;
            margin:0;
        }
        &:valid{
            border:var(--counter_dark) solid 1px;
            box-shadow:0 10px 10px -5px rgba(1,1,1,1.25);
        }
    }
   
    
`;


 */
