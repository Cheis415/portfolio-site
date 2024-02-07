import styled from 'styled-components';

export const DetailsContainer = styled.div`
	color: #fff;
	background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};

	@media screen and (max-width: 768px) {
		padding: 100px 0;
	}

	@media screen and (min-width: 768px) {
		height: 1300px;
	}
`;

export const DetailsWrapper = styled.div`
	display: grid;
	z-index: 1;
	height: 860px;
	width: 100%;
	max-width: 1100px;
	padding: 0 24px;
	justify-content: center;
`;

export const DetailsRow = styled.div`
	display: grid;
	grid-auto-comlumns: minmax(auto, 1fr);
	align-items: center;
	grid-template-areas: ${({ imgStart }) =>
		imgStart ? `'col2 col1'` : `'col1 col2'`};

	@media screen and (max-width: 768px) {
		grid-template-areas: ${({ imgStart }) =>
			imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
	}
`;

export const Column1 = styled.div`
	margin-bottom: 15px;
	padding: 0 15px;
	grid-area: col1;
`;

export const Column2 = styled.div`
	margin-bottom: 15px;
	padding: 0 15px;
	grid-area: col2;
`;

export const TextWrapper = styled.div`
	padding-top: 0;
	padding-bottom: 60px;
`;
export const TopLine = styled.p`
	color: #b25fb5;
	font-size: 16px;
	line-height: 16px;
	font-weight: 700;
	letter-spacing: 1.4px;
	text-transform: uppercase;
	margin-bottom: 16px;

	@media screen and (min-width: 768px) {
		font-size: 28px;
	}
`;
export const Link = styled.a`
	text-decoration: none;
`;

export const Heading = styled.h1`
	font-weight: bold;
	line-height: 3.6rem;
	letter-spacing: -.25rem;
	font-size: 4em;
	font-family: 'Playfair Display', serif;
	color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};

	@media screen and (max-width: 480px) {
		font-size: 32px;
	}

	@media screen and (min-width: 768px) {
		font-size: 56px;
	}
`;

export const TextBody = styled.p`
	max-width: 440px;
	margin-bottom: 35px;
	font-size: 14px;
	line-height: 20px;
	color: ${({ darkText }) => (darkText ? '#010606' : '#fff')} @media screen and
		(max-width: 480px) {
		font-size: 12px;
	}

	@media screen and (min-width: 768px) {
		font-size: 24px;
		line-height: 24px;
		margin: 35px 35px 35px 0;
		margin-bottom: 35px;
		margin-right: 35px;
	}
`;

export const BtnWrap = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
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