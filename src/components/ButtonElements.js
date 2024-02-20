import styled from 'styled-components';
import { Link } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';

export const Button = styled(Link)`
	border-radius: 0;
	background-color: #ea6c32;
	white-space: no-wrap;
	padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
	color: #fffbf2;
	font-size: ${({ fontBig }) => (fontBig ? '20px' : '18px')};
	outline: none;
	font-weight: bold;
	cursor: pointer;
	display: flex;
	border: 3px solid #ea6c32;
	justify-content: center;
	align-items: center;
	z-index: 20;
	transition: all 0.2s ease-in-out;

	&:hover {
		transition: all 0.2s ease-in-out;
		border: 3px solid  ${({ dark }) => (dark ? '#fffbf2' : '#288998')};
		
		color: ${({ dark }) => (dark ? '#fffbf2' : '#288998')};
		background: transparent;
	}
`;

export const ButtonSm = styled(LinkR)`
	border-radius: 0;
	background-color: transparent;
	padding: ${({ big }) => (big ? '14px 48px' : '10px 25px')};
	color: #288998;
	font-size: ${({ fontBig }) => (fontBig ? '20px' : '18px')};
	outline: none;
	border: 3px solid #288998;
	font-weight: bold;
	cursor: pointer;
	display: flex;
	text-decoration: none;
	justify-content: center;
	align-items: center;
	z-index: 20;
	transition: all 0.2s ease-in-out;

	&:hover {
		transition: all 0.2s ease-in-out;
		border: 3px solid  ${({ dark }) => (dark ? '#fffbf2' : '#ea6c32')};
		
		color: #fffbf2;
		background: ${({ primary }) => (primary ? 'transparent' : '#ea6c32')};
	}
`;

export const ButtonLight = styled(Link)`
	border-radius: 0;
	background-color: transparent;
	padding: 12px 30px;
	color: #288998;
	font-weight: bold;
	font-size: 20px;
	border: 3px solid #288998;
	cursor: pointer;
	display: flex;
	
	justify-content: center;
	align-items: center;
	z-index: 20;
	transition: all 0.2s ease-in-out;

	&:hover {
		transition: all 0.2s ease-in-out;
		color: #fffbf2;
		border: 3px solid #288998;
		background: #288998;
	}
`;
export const ButtonLightR = styled(LinkR)`
	border-radius: 0;
	background-color: transparent;
	padding: 12px 30px;
	color: #288998;
	font-weight: bold;
	font-size: 20px;
	outline: none;
	border: 3px solid #288998;
	cursor: pointer;
	display: flex;
	border: 3px solid #288998;
	justify-content: center;
	align-items: center;
	z-index: 20;
	transition: all 0.2s ease-in-out;

	&:hover {
		transition: all 0.2s ease-in-out;
		border: 3px solid #288998;
		color: #fff;
		background: #288998;
	}
`;
export const ButtonR = styled(LinkR)`
border-radius: 0;
background-color: transparent;
color: #ea6c32;
font-size: 13px;
border: 3px solid #288998;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
z-index: 20;
transition: all 0.2s ease-in-out;
font-weight: bold;
&:hover {
	transition: all 0.2s ease-in-out;
	
	color: #fffbf2;
	background: transparent;
}
`;

export const SubmitButton = styled.input`
	margin: 0 auto;
	border-radius: 0;
	background-color: transparent;
	white-space: no-wrap;
	padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
	color: #288998;
	font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
	outline: none;
	font-weight: bold;
	border: 3px solid #288998;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.2s ease-in-out;

	&:hover {
		transition: all 0.2s ease-in-out;
		color: #fff;
		background: ${({ primary }) => (primary ? '#fff' : '#288998')};
	}
`;
export const ButtonReg = styled.button`
	margin: 20px;
	border-radius: 0;
	background-color: transparent;
	white-space: no-wrap;
	padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
	color: #288998;
	font-size: ${({ fontBig }) => (fontBig ? '20px' : '18px')};
	outline: none;
	font-weight: bold;
	border: 3px solid #288998;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.2s ease-in-out;

	&:hover {
		color: #fff;
		transition: all 0.2s ease-in-out;
		background: #288998;
	}
`;
