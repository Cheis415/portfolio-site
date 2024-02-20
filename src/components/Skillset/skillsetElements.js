import styled from 'styled-components';
export const FlexContainerGreen = styled.div`

background-color: #288998;


padding: 0 30px;
min-height: 100vh;


`;
export const SkillsetContainer = styled.div`
max-width: 1300px;
padding-top: 5rem;
min-height: 100vh;
margin-right: auto;
	margin-left: auto;


@media screen and (max-width: 480px) {
	max-height: 1200px;
}
@media screen and (max-width: 280px) {
	max-height: 1500px;
}
`;



export const SkillsetWrap = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	align-items: center;
	grid-gap: 24px;
	margin-right: auto;
	margin-left: auto;
	padding: 0 24px;
	@media screen and (max-width: 1000px) {
		grid-template-columns: 1fr 1fr;
	}

	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr 1fr;
		grid-gap: 16px
		padding: 0 20px;
	}

	@media screen and (max-width: 500px) {
		grid-template-columns: 1fr;
		grid-gap: 16px
		padding: 0 20px;
	}
`;

export const SkillsetCard = styled.div`
	postion: absolute;
	// background: linear-gradient(144deg, rgba(253, 240, 220, 0.48) 4.48%, rgba(253, 240, 220, 0.30) 106.3%);
	// display: flex;
	// flex-direction: column;
	// will-change: transform, opacity;
	// background-size: cover;
	// justify-content: flex-start;
	// align-items: center;
	// border-radius: 1rem;
	// padding-bottom: .5rem;
	
	// box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
	// @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
	// 	-webkit-backdrop-filter: blur(2px);
	// 	backdrop-filter: blur(2px);
	  
	// }
`;

export const CardWrap = styled.div`
	position: relative;
	// &:hover {
	// 	transform: scale(1.1);
	// 	transition: all 0.2s ease-in-out;
	// }
`;
export const CardImage = styled.img`
	position: relative;
	width: 400px;
	height: 300px;
`;
export const Card = styled.div`
	position: absolute;
`;

export const SkillPic = styled.img`
	width: 100%;
	height: auto;
	margin-bottom: .5rem;
	border-radius: 1rem 1rem 0 0;

	@media screen and (max-width: 480px) {
		height: 120px;
		width: 200px;
	}
	@media screen and (min-width: 1600px) {
		height: 200px;
		min-width: 250px;
	}
`;

export const SkillsetH1 = styled.h2`
font-weight: bold;
padding-left: 4rem;
letter-spacing: -.2rem;
font-size: 4rem;
margin-bottom: 5rem;
color: #454342;
font-family: 'Playfair Display', serif;

@media screen and (min-width: 768px) and (max-width: 1023px) {
	padding-left: 2rem;
}
@media screen and (max-width: 480px) {
	padding-left: 2rem;
	font-size: 3.5rem;
}
`;

export const SkillH2 = styled.h2`
	font-size: 2rem;
	margin-bottom: 5px;
	font-family: 'Playfair Display', serif;
	color: #454342;
`;

export const SkillsetP = styled.p`
	font-size: 1rem;
	text-align: center;
`;