import styled from 'styled-components';
import { Link } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';

export const Button = styled(Link)`
	border-radius: 0;
	background-color: ${({ primary }) => (primary ? '#288998' : '#ea6c32')};
	white-space: no-wrap;
	padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
	color: ${({ dark }) => (dark ? '#fffbf2' : '#fff')};
	font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
	outline: none;
	border: none;
	cursor: pointer;
	display: flex;
	border: 1px solid #ea6c32;
	justify-content: center;
	align-items: center;
	z-index: 20;
	transition: all 0.2s ease-in-out;

	&:hover {
		transition: all 0.2s ease-in-out;
		border: 1px solid  ${({ dark }) => (dark ? '#fffbf2' : '#288998')};
		
		color: ${({ dark }) => (dark ? '#fffbf2' : '#288998')};
		background: ${({ primary }) => (primary ? 'transparent' : '#288998')};
	}
`;

export const ButtonSm = styled(LinkR)`
	border-radius: 0;
	background-color: ${({ primary }) => (primary ? '#288998' : '#288998')};
	white-space: no-wrap;
	padding: ${({ big }) => (big ? '14px 48px' : '10px 25px')};
	color: ${({ dark }) => (dark ? '#fffbf2' : '#fff')};
	font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
	outline: none;
	border: none;
	cursor: pointer;
	display: flex;
	text-decoration: none;
	justify-content: center;
	align-items: center;
	z-index: 20;
	transition: all 0.2s ease-in-out;

	&:hover {
		transition: all 0.2s ease-in-out;
		border: 1px solid  ${({ dark }) => (dark ? '#fffbf2' : '#ea6c32')};
		
		color: #fffbf2;
		background: ${({ primary }) => (primary ? 'transparent' : '#ea6c32')};
	}
`;

export const ButtonLight = styled(Link)`
	border-radius: 0;
	background-color: #288998;
	padding: 12px 30px;
	color: #fffbf2;
	font-size: 20px ;
	outline: none;
	border: none;
	cursor: pointer;
	display: flex;
	
	justify-content: center;
	align-items: center;
	z-index: 20;
	transition: all 0.2s ease-in-out;

	&:hover {
		transition: all 0.2s ease-in-out;
		color: #288998;
		border: 1px solid #288998;
		background: transparent;
	}
`;
export const ButtonLightR = styled(LinkR)`
	border-radius: 0;
	background-color: #288998;
	padding: 12px 30px;
	color: #fffbf2;
	font-size: 20px ;
	outline: none;
	border: none;
	cursor: pointer;
	display: flex;
	border: 1px solid #288998;
	justify-content: center;
	align-items: center;
	z-index: 20;
	transition: all 0.2s ease-in-out;

	&:hover {
		transition: all 0.2s ease-in-out;
		border: 1px solid #288998;
		color: #288998;
		background: transparent;
	}
`;
export const ButtonR = styled(LinkR)`
border-radius: 0;

color: #ea6c32;
font-size: 13px;
border: none;
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
	background: ${({ primary }) => (primary ? '#288998' : '#ea6c32')};
	white-space: no-wrap;
	padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
	color: ${({ dark }) => (dark ? '#010606' : '#fff')};
	font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
	outline: none;
	border: none;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.2s ease-in-out;

	&:hover {
		transition: all 0.2s ease-in-out;
		color: #000;
		background: ${({ primary }) => (primary ? '#fff' : '#288998')};
	}
`;
export const ButtonReg = styled.button`
	margin: 20px auto;
	border-radius: 0;
	background: ${({ primary }) => (primary ? '#288998' : '#010606')};
	white-space: no-wrap;
	padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
	color: ${({ dark }) => (dark ? '#010606' : '#fff')};
	font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
	outline: none;
	border: none;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.2s ease-in-out;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: ${({ primary }) => (primary ? '#fff' : '#288998')};
	}
`;
