import Styled from "styled-components";

const InputLabel = Styled.label.attrs((props) => ({ width: props.width }))` 
        background-color:transparent; 
        border:var(--counter_light) solid 1px;
        opacity:0; // for fadeIn animation

        color:var(--counter_light);
        text-transform:uppercase;
        font-size:14px;
        font-weight:bold;
        
        padding: 0.5% 1%;
        border-radius:5px;

        display:flex;
        flex-direction:column;
        flex-basis:${(props) => props.width};
        flex-grow:1; 
    
        @media (max-aspect-ratio: 1/1) {
            flex-basis:100%; 
        }

        @media screen and (min-width:1200px){
            //border: green dashed 2px;
            flex-basis:calc(${(props) => props.width}*1.1);
        }
        
        @media screen and (max-width:769px){
            flex-basis:auto; 
        }
        @media screen and (max-width:481px){
            flex-basis:90%; 
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

        
        .add_remarks{
            font-size:10px;
            color:grey;
            margin-block-start:0;
            text-transform:capitalize;
            letter-spacing:0.1rem;
            margin-block-end:0;
    
        }

        
        
        animation-name: fadeIn;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
        animation-delay:0.2s;
        animation-duration: 0.3s;
    
        @keyframes fadeIn {
            0%{opacity:0;}
            100%{opacity:1;}
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
    color:var(--counter_dark);  

    &.full_area{
        padding:30% ;
        background-color:grey;
        opacity:0.5;
        margin:auto auto;
        display:block;
    }

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
const DropDownStyle = Styled.select`
    background-color: var(--counter_light);
    flex-basis:100%;
    
    padding: 2% 2%;
    margin-top:2%;
    border-radius:5px;
    border:none;
    outline:none;
    letter-spacing:0.05rem;
    color:var(--counter_dark);

    }
   
    
`;

const InputFieldSearch = Styled.input`
    background-color: var(--counter_light);
    width:100%;
    height:70%;
    padding: 0% 2%;
    border:none;
    border-bottom:var(--main_color) solid 2px;

    :focus{
        background-color:var(--main_color);
        outline:none;
    }
    
`;

export { InputField, InputLabel, InputFieldSearch, DropDownStyle };
