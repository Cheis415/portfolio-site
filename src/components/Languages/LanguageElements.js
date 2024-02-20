import styled from 'styled-components';



export const FlexContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 500px) {
		flex-direction: column;
		
	}
`

export const LanguagesContainer = styled.div`
	background-color: #f9eac8;
	display: flex;
	min-height: 100vh;

	@media screen and (min-width: 768px) {
		padding: 10px 0;
	}

	@media screen and (max-width: 480px) {
		max-height: 1200px;
	}
	@media screen and (max-width: 280px) {
		max-height: 1500px;
	}
`;
export const BlobImg =  styled.img`
	position: relative;
	
	max-width: 100%;
`
export const LanguageWrap = styled.div`
	display: flex;
	flex-direction: column;
	z-index: 1;
	margin-right: auto;
	margin-left: auto;
	padding: 0 24px;
	justify-content: center;

	@media screen and (max-width: 500px) {
		margin-top: 0;
		padding-top: 60px;
		padding-left: 0;
		padding-right: 0;
	}
`;

export const LanguageRow = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	
	
	
	@media screen and (max-width: 768px) {
		padding: 20px;
	}
	@media screen and (min-width: 768px) {
		padding: 20px;
	}
	@media screen and (max-width: 500px) {
		flex-direction: column;
		
	}
`;

export const Column1 = styled.div`
position: absolute;

display: flex;
align-items: center;
justify-content: center;

flex-direction: column;
flex-wrap: wrap;
	

	@media screen and (min-width: 500px) {
		padding: 20px;
	}
	@media screen and (max-width: 500px) {
		
	}
`;

export const Column2 = styled.div`
	position: absolute;
	
	display: flex;
	align-items: center;
	justify-content: center;
	
	flex-direction: column;
	flex-wrap: wrap;

	@media screen and (min-width: 768px) {
		padding: 0 30px;
	}
	@media screen and (max-width: 500px) {
		
	}
`;
export const Ul = styled.ul`
	margin: 1.5rem;
`;
export const Li = styled.li`
	color: #fffbf2;
	font-size: 22px;

	@media screen and (max-width: 500px) {
		font-size: 16px;
	}
`;

export const LanguageContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 10px;
	justify-content: center;
	align-items: center;
`;

export const TopLine = styled.p`
	color: #288998;
	font-size: 1.7rem;
	padding-left: 4rem;
	line-height: 16px;
	font-weight: 700;
	letter-spacing: 1.4px;
	margin-bottom: .5rem;
	margin-top: 60px;
	
	@media screen and (min-width: 768px) and (max-width: 1023px){
		padding-left: 2rem;
	}
	@media screen and (max-width: 480px) {
		margin-top: 2rem;
		font-size: 1.3rem;
		padding-left: 2rem;
	}

`;
export const SubHeading = styled.h2`
font-weight: bold;
color: #ea6c32;

@media screen and (max-width: 500px) {
	display: flex;
	justify-content: end;
	margin-left: 2rem;
	font-size: 18px;
}
`
export const LanguageH1 = styled.h2`
font-weight: bold;
letter-spacing: -.2rem;
font-size: 4rem;
padding-left: 4rem;
margin-bottom: 1.5rem;
color: #454342;
font-family: 'Playfair Display', serif;

@media screen and (max-width: 480px) {
	padding-left: 1rem;
	font-size: 3.5rem;
}
`;
export const LanguageTitle = styled.p`
	color: #454342;
	font-size: 10px;
	
`;

export const LanguageP = styled.p`
	max-width: 440px;
	line-height: 20px;
	margin-bottom: 5px;
	font-size: 14px;
	color: #454342;

	@media screen and (max-width: 480px) {
		font-size: 12px;
	}

	@media screen and (min-width: 768px) {
		font-size: 20px;
		line-height: 24px;
	}
	@media screen and (max-width: 1440px) {
		font-size: 16px;
		line-height: 18px;
	}
`;