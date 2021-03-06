import styled from "styled-components";
import { media } from "../../utils";

export const RouteWrapper = styled.section`
	display: flex;
	flex: 1 0 auto;
	align-items: center;
	justify-content: center;
	background: url("img/misrutas.png");
	background-position: center;
	background-attachment: fixed;
	background-size: cover;
	padding: 60px 0;
	@media only screen and (max-width: 900px) {
		align-text: center;
		max-width: 100%;
		h5,
		h6,
		p,
		ul li {
			color: white;
			text-align: center;
			margin: auto;
			font-family: 'Work Sans', sans-serif;
			font-size: 12px;
		}
		input {
			margin: auto;
			max-width: 100%;
		}
		#butonSave {
			margin-left: 40% !important;
		}
	}
`;

export const RouteContainer = styled.div`
	box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
	background-color: white;
	max-width: 800px;
	margin: 0px 30px;
	width: 100%;
	flex: 1 0 auto;
	#butonSave {
		margin: 10px;
		margin-left: 350px;
	}
	#butonMedia {
		margin: 10px;
		margin-left: 350px;
	}
`;

export const Header = styled.div`
  position: relative;
	max-width: 100%;
	align-items: center;
	justify-content: center;
	background: rgb(4, 69, 143);
  margin: auto
	padding: 30px 60px;
	h1, h2 {
		color: white;
		text-align: center;
	}
`;

export const Form = styled.form`
	padding: 20px 40px;
	align-items: center;
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 20px 40px;
	h4 {
		color: #00b020;
		margin-bottom: 0px;
	}
	${media.tablet`
    grid-template-columns: 1fr 1fr;
  `};
`;

export const Grid = styled.div`
	grid-column: span 1;
	text-align: left;
	${media.tablet`
    grid-column: span 1 ;
  `};
`;

export const Label = styled.label`margin: 10px;`;

export const Input = styled.input`margin: 10px;`;

export const TextArea = styled.textarea`margin: 12px;`;
