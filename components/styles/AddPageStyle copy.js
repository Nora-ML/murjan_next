import styled from "styled-components";

const AddPageStyle = styled.div`
    background-color:var(--counter_dark);

    position: absolute;
    
    bottom:0;
    right: 0;
    z-index: 1;
    overflow:hidden;

    height:100vh;
    width: 100vw;
    
    &.initialPage{ 
        clip-path: circle(3.0% at 95% 15%);
    }
    &.closePage{
        animation-name: closeCircle;
        animation-fill-mode: forwards;
        animation-timing-function: ease-out;
        animation-duration: 0.5s;
        clip-path: circle(3.0% at 95% 15%);
    }
    &.openPage{
        animation-name: openCircle;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
        animation-duration: 0.5s;
        clip-path: circle(120.5% at 86% 16%);
    }
    .trigger{
        position: absolute;
        top: 15%;
        right:5%;
        transform:translate(50%,-50%);
        cursor: pointer;
        z-index:5;

        &:active{
            transform:rotate(360deg);
            transition:transform 3s ease-in;
        }
    }

    .form_header-wrapper{
        margin-top:3%;
        
        
        display:flex;
        flex-direction:column;
        flex-basis:100%;  
        align-items:center;
        justify-content:space-evenly;  

        height:97%;

        .form_header{
            color:var(--counter_dark);
            border-top:5px var(--main_color) double ;
            border-right:5px var(--main_color) double ;
            border-left:2px var(--main_color) solid ;
            border-bottom:2px var(--main_color) solid ;
            border-radius:10px;

            width: 30%;
            text-align:center;

            margin:3px;
            padding:3px;
        }
    }
    

    @keyframes openCircle {
        0%{clip-path: circle(3.0% at 95% 15%);background-color:var(--main_color);}
        50%{background-color:var(--main_color);}
        70%{background-color:var(--counter_light);}
        100%{clip-path: circle(120.5% at 86% 16%);background-color:var(--counter_light);}
    }
    @keyframes closeCircle {
        100%{clip-path: circle(3.0% at 95% 15%);background-color:var(--counter_dark);}
        70%{background-color:var(--main_color);}
        50%{background-color:var(--counter_light);}
        0%{clip-path: circle(120.5% at 86% 16%);background-color:var(--counter_light);}
    }

`

const UpdatePage = styled.div.attrs(props=>({location:props.location}))`
        position: fixed;
        top:0;
        height: 100vh;
        width: 100vw;
        right: 0;
        z-index: 3;
        overflow:hidden;

        display:flex;
        flex-wrap:wrap;
        align-items:center;
        justify-content:center;

        &.initialPage{
            display:none;
        }


        &.openPage{          
            animation-name: updateCircle;
            animation-fill-mode: forwards;
            animation-timing-function: ease-in;
            animation-duration: 0.5s;
        }

        &.closePage{
            animation-name: updateCloseCircle;
            animation-fill-mode: forwards;
            animation-timing-function: ease-out;
            animation-duration: 0.5s;
            clip-path:${(props)=>props.location};
        }
        @keyframes updateCircle {
            0%{clip-path: ${(props)=>props.location};background-color:var(--main_color);}
            50%{background-color:var(--main_color);}
            70%{background-color:var(--counter_light);}
            100%{clip-path: circle(100% at 60% 60%);background-color:var(--counter_light);}
        }

        @keyframes updateCloseCircle {
            0%{clip-path: circle(100% at 60% 60%);background-color:var(--counter_light);display:flex;}
            50%{background-color:var(--counter_light);}
            100%{clip-path: ${(props) => props.location};   }
           
        }

        .form_header{
            position:relative;
            flex-basis:50%;
            top:10%;
            margin:0 auto;
            color:var(--counter_dark);
            border:1px var(--main_color) solid;
            text-align:center;
        }
}`


export {AddPageStyle,UpdatePage};