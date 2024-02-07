import styled from 'styled-components';
import bgImg from '../../images/wood-texture.jpg'

export const AboutContainer = styled.div`
background-color: #f9eac8;
min-height: 100vh;
color: #fffbf2;
	background-color: #288998;
@media screen and (min-width: 768px) {
	padding: 0 24px;
}
	
	
	
`;

export const AboutWrapper = styled.div`
display: grid;
z-index: 1;
max-width: 1000px;
margin-top: 80px;
margin-right: auto;
margin-left: auto;
padding: 0 24px;
justify-content: center;

@media screen and (max-width: 600px) {
	margin-top: 1rem;
	
}
`;


export const AboutRow = styled.div`
display: grid;
margin-top: 60px;
align-items: center;
grid-auto-comlumns: minmax(auto, 1fr);

grid-template-areas: ${({ imgStart }) =>
	imgStart ? `'col2 col1'` : `'col1 col2'`};

@media screen and (max-width: 768px) {
	grid-template-areas: ${({ imgStart }) =>
		imgStart ? `'col2' 'col1'` : `'col2 col2' 'col1 col1'`};
}

@media screen and (max-width: 768px) {
	padding: 20px;
}
@media screen and (max-width: 600px) {
	margin-top: 1rem;
	
}
	
`;

export const Column1 = styled.div`
	margin-bottom: 15px;
	padding: 0 15px;
`;

export const Column2 = styled.div`
	margin-bottom: 15px;
	padding: 0 15px;
	grid-area: col2;

	
`;

export const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 100%;
	justify-content: center;
	align-items: center;
	padding-top: 20px;
	padding-bottom: 60px;
`;
export const TopLine = styled.p`
	color: #ea6c32;
	font-size: 1.7rem;
	padding-top: 4.5rem;
	padding-left: 4.5rem;
	line-height: 16px;
	font-weight: 700;
	letter-spacing: 1.4px;
	margin-bottom: .5rem;

	@media screen and (max-width: 600px) {
		padding-left: 2rem;
		font-size: 1.4rem;
		
	}

`;

export const Heading = styled.h2`
	margin-bottom: 24px;
	font-size: 4.5rem;
	padding-left: 4.5rem;
	letter-spacing: -.15rem;
	font-family: 'Playfair Display', serif;
	font-weight: 600;
	color: ${({ lightText }) => (lightText ? '#fffbf2' : '#454342')};

	@media screen and (max-width: 600px) {
		padding-left: 2rem;
		font-size: 2.5rem;
		
	}
`;

export const TextBody = styled.p`
	margin-bottom: 35px;
	font-size: 16px;
	line-height: 20px;
	color: ${({ darkText }) => (darkText ? '#010606' : '#fff')} 
	@media screen and (max-width: 480px) {
		font-size: 12px;
	}

	
`;

export const BtnWrap = styled.div`
	display: flex;
	justify-content: flex-start;
`;

export const ImgWrap = styled.div`
	max-width: 100%;
	height: auto;

	
`;

export const Img = styled.img`
	max-width: 100%;
	margin: 0 0 10px 0;
	padding-right: 0;

	@media screen and (max-width: 600px) {
		margin-bottom: 20px;
	}
`;