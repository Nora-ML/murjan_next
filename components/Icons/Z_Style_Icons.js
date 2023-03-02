import Styled from "styled-components";

const IconStyle = Styled.img`
        width:20px;
        height:20px
        border:solid black 1px;
        cursor:pointer;
        margin-right:10px;
`;
const IconIn = Styled.img`
        position:absolute;
        right:0%;
        top:40%;
        transform:translate(-100%,-50%);
        width:25px;
        height:25px;
        cursor:pointer;
        `;

const ThumbnailStyle = Styled.img`
        width:50px;
        height:50px;
        border:none;
        margin:0 auto;
        display:block;
`;

const SearchStyle = Styled.div`
    display:flex;
    position:relative;

`;

const SearchIcon = Styled.div`
	position: fixed;
	bottom: 2%;
	right: 2%;

	:after {
		background-color: red;
		border-radius: 50%;

		background-image: url("https://cdn-icons-png.flaticon.com/512/158/158740.png");
		background-repeat: no-repeat;
		background-position: center;
		background-size: contain;
		display: block;
		position: relative;
		width: 50px;
		height: 50px;
		padding: 50px 50px;
		content: "";
	}
`;

export { IconStyle, ThumbnailStyle, SearchStyle, SearchIcon, IconIn };
