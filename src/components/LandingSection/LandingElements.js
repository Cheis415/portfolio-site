import styled from 'styled-components';
import bgImg from '../../images/textured-cream-bg.jpg'
import { MdKeyboardArrowRight, MdArrowDownward } from 'react-icons/md';

export const LandingConatiner = styled.div`
	
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 30px;
	min-height: 100vh;
	max-width: 100vw;
	position: relative;
	z-index: 1;
	
	:before {
		max-width: 100vw;
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		
		z-index: 2;
	}
	
`;

export const LandingBg = styled.div`
	background-position: center;
	
	background-size: cover;
	position: absolute;
	background-color: #f9eac8;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	overflow: hidden;
`;

export const LandingContent = styled.div`
	z-index: 3;
	position: absolute;
	padding: 8px 24px;
	display: flex;
	align-items: center;

	@media screen and (max-width: 600px) {
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`;

export const FlexColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items:center;
`

export const LandingH1 = styled.h1`
	font-weight: 400;
	line-height: 3.6rem;
	letter-spacing: -.2rem;
	font-size: 4em;
	color: #454342;
	margin-top: 70px;
	margin-bottom: 0px;
	font-family: 'Playfair Display', serif;
`;

export const LandingP = styled.p`
	margin-top: 24px;
	color: #454342;
	font-size: 24px;
	text-align: center;
	max-width: 600px;

	@media screen and (max-width: 768px) {
		font-size: 24px;
	}

	@media screen and (max-width: 480px) {
		font-size: 18px;
	}
`;
export const LandingPic = styled.img`
height: auto;
width: 100%;
	
`;

export const PicContainer = styled.div`
height: auto;
width: 450px;
	
	
	@media screen and (max-width: 600px) {
		width: auto;
		margin-top: 2rem;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	:after {
		content: '';
		position: absolute;
		inset: 0;
		z-index: -1;
		border: solid 2px green;
		transform: translate(15px,15px);
	  }
`;

export const LandingBtnWrapper = styled.div`
	margin-top: 32px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const ArrowForward = styled(MdArrowDownward)`
	margin-left: 8px;
	font-size: 20px;
`;

export const ArrowBottom = styled(MdKeyboardArrowRight)`
	margin-left: 8px;
	font-size: 20px;
`;