import Styled from "styled-components"

const IconStyle = Styled.img`
        width:20px;
        height:20px
        border:solid black 1px;
        cursor:pointer;
        margin-right:10px;
`
const IconIn = Styled.img`
        position:absolute;
        right:0%;
        top:40%;
        transform:translate(-100%,-50%);
        width:25px;
        height:25px;
        cursor:pointer;
        `

const ThumbnailStyle = Styled.img`
        width:50px;
        height:50px;
        border:none;
        margin:0 auto;
        display:block;
`


export { IconStyle,ThumbnailStyle,IconIn };