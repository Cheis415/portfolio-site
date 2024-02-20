import styled from 'styled-components';

export const DetailsContainer = styled.div`
	color: #000;
	display: grid;
	background: #f9eac8;
	margin-top: auto;
	margin-bottom: auto;

	
`;
export const FlexContainer = styled.div`
	margin-top: 1.5rem;
	display: flex;
	justify-content: center;
	align-items: center;

	
`

export const DetailsWrapper = styled.div`
	display: flex;
	z-index: 1;
	height: 860px;
	width: 100%;
	padding: 0 24px;
	justify-content: center;
	align-items: center;
`;

export const DetailsRow = styled.div`
	display: flex;
	align-items: center;
	

	@media screen and (max-width: 768px) {
		
	}
`;

export const Column1 = styled.div`
	color: #454342;
	margin-bottom: 15px;
	padding: 0 15px;
`;

export const Column2 = styled.div`
	margin-bottom: 15px;
	padding: 0 15px;
	grid-area: col2;
`;

export const TextWrapper = styled.div`
	padding-top: 3rem;
	padding-bottom: 60px;
`;
export const TopLine = styled.p`
	color: #ea6c32;
	font-size: 16px;
	line-height: 16px;
	font-weight: 700;
	letter-spacing: 1.4px;
	margin-bottom: 16px;

	@media screen and (min-width: 768px) {
		font-size: 28px;
	}
	@media screen and (max-width: 480px) {
		margin-bottom: 0;
	}
`;
export const Link = styled.a`
	text-decoration: none;
	margin-right: 1rem;
`;

export const Heading = styled.h1`
	font-weight: bold;
	line-height: 3.6rem;
	letter-spacing: -.25rem;
	font-size: 4em;
	font-family: 'Playfair Display', serif;
	color: #454342;

	@media screen and (max-width: 480px) {
		font-size: 32px;
		margin-bottom: 16px;
	}

	@media screen and (min-width: 768px) {
		font-size: 56px;
	}
`;

export const TextBody = styled.p`
	max-width: 800px;
	margin-bottom: 35px;
	font-size: 14px;
	line-height: 20px;
	color: ${({ darkText }) => (darkText ? '#010606' : '#fff')} @media screen and
		(max-width: 480px) {
		font-size: 12px;
	}

	@media screen and (min-width: 768px) {
		font-size: 22px;
		line-height: 28px;
		margin: 35px 35px 35px 0;
		margin-bottom: 35px;
		margin-right: 35px;
	}
`;

export const BtnWrap = styled.div`
	display: flex;
`;

export const ImgWrap = styled.div`
	max-width: 555px;
	height: 100%;
`;

export const Img = styled.img`
	width: 100%;
	margin: 0 0 10px 0;
	padding-right: 0;
`;