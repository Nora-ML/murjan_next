import styled from "styled-components";

/* const AddPageStyle = styled.div`
	background-color: var(--counter_dark);

	position: absolute;

	bottom: 0;
	right: 0;
	z-index: 2;
	overflow: hidden;

	height: 100vh;
	width: 100vw;

	display: flex;
	align-items: center;

	&.initialPage {
		clip-path: circle(3% at 95% 15%);
	}
	&.closePage {
		animation-name: closeCircle;
		animation-fill-mode: forwards;
		animation-timing-function: ease-out;
		animation-duration: 0.5s;
		clip-path: circle(3% at 95% 15%);
	}
	&.openPage {
		animation-name: openCircle;
		animation-fill-mode: forwards;
		animation-timing-function: ease-in;
		animation-duration: 0.5s;
		clip-path: circle(120.5% at 86% 16%);
	}
	.trigger {
		position: absolute;
		top: 15%;
		right: 5%;

		transform: translate(50%, -50%);
		cursor: pointer;
		z-index: 5;
	}

	@keyframes openCircle {
		0% {
			clip-path: circle(3% at 95% 15%);
			background-color: var(--main_color);
		}
		50% {
			background-color: var(--main_color);
		}
		70% {
			background-color: var(--counter_light);
		}
		100% {
			clip-path: circle(120.5% at 86% 16%);
			background-color: var(--counter_light);
		}
	}
	@keyframes closeCircle {
		100% {
			clip-path: circle(3% at 95% 15%);
			background-color: var(--counter_dark);
		}
		70% {
			background-color: var(--main_color);
		}
		50% {
			background-color: var(--counter_light);
		}
		0% {
			clip-path: circle(120.5% at 86% 16%);
			background-color: var(--counter_light);
		}
	}
`; */

const FormAndHeaderWrap = styled.div.attrs((props) => ({ width: props.width }))`
	//border: black solid 1px;
	margin: 0;

	display: flex;
	flex-wrap: wrap;

	justify-content: center;
	align-content: center;
	height: 100%;
	width: 100%;

	.form_header {
		color: var(--counter_dark);
		margin: 0;
		padding: 1%;
		padding-bottom: 2%;

		height: clamp(70px, 10%, 100px);
		display: inline-flex;
		justify-content: center;
		align-items: center;

		border-radius: 5px 5px 0 0;

		flex-basis: clamp(300px, 1500px, ${(props) => props.width});
		text-align: center;

		border-top: 5px var(--main_color) double;
		border-right: 5px var(--main_color) double;
		border-left: 2px var(--main_color) solid;

		@media screen and (max-width: 769px) {
			//border: green dashed 2px;
			flex-basis: clamp(250px, calc(${(props) => props.width} / 1.2), 1000px);
		}
		@media screen and (max-width: 481px) {
			flex-basis: 100%;
		}
	}
`;

const UpdateLandingSection = styled.div`
		       
		position: fixed;
        top:50%; 
		left:50%;
		transform:translate(-50%,-50%);
        z-index:300;
        overflow:hidden;

        display:flex;
        flex-wrap:wrap;
        align-items:center;
        justify-content:center;

        &.initialPage{
        	display:none;
		}
        &.closePage{
        	animation-name: closeModal;
			animation-fill-mode: forwards;
			animation-timing-function: linear;
			animation-duration: 0.5s;

			form{
				height:0;
			}
		}
		@keyframes closeModal {
			100% {
				height: 0;
				width: 0;
				background-color:blue; 
			}
			0% {
				height: 100vh;
				width: 100vw;
				background-color: #000000a6;
			}
		}

        &.active{          
			animation-name: openModal;
			animation-fill-mode: forwards;
			animation-timing-function: linear;
			animation-duration: 0.5s;

		}
		@keyframes openModal {
			0% {
				height: 0;
				width: 0;
			}
			100% {
				height: 100vh;
				width: 100vw;
				background-color: #000000a6;
			}
		}

}`;

export { UpdateLandingSection, FormAndHeaderWrap };
