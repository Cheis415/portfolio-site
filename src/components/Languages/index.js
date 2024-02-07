import React from 'react';
import {
	Column1,
	Column2,
	LanguageH1,
	LanguageRow,
	LanguagesContainer,
	FlexContainer,
	LanguageWrap,
	TopLine,
	BlobImg,
	Ul,
	SubHeading,
	Li,
} from './LanguageElements';
import bgImg from '../../images/green-blob-1.png'
import bgImg2 from '../../images/green-blob-2.png'
const Languages = () => {
	return (
		<>
			<LanguagesContainer id="languages">
				<LanguageWrap>
						<TopLine>What do I know?</TopLine>
						<LanguageH1>My skills</LanguageH1>
					<FlexContainer>
					<LanguageRow>
						
							<BlobImg src={bgImg} alt='green blob' /> 
							<Column1>
								<SubHeading>Languages & Frameworks</SubHeading>
								 
								<Ul>
									<Li>JavaScript</Li>
									<Li>JQuery</Li>
									<Li>React</Li>
									<Li>Styled Components</Li>
									<Li>Bootstrap</Li>
								</Ul>
								
							</Column1>
							</LanguageRow>
							<LanguageRow>	
								<BlobImg src={bgImg2} alt='green blob' />
							<Column2>
								<SubHeading>Specialties & Interests</SubHeading>
								<Ul>
									<Li>SEO</Li>
									<Li>Accessibility</Li>
									<Li>Web performance</Li>
									<Li>Perfecting UX</Li>
									<Li>Responsive UI</Li>
								</Ul>
							</Column2>
					</LanguageRow>
					</FlexContainer>
				</LanguageWrap>
			</LanguagesContainer>
		</>
	);
};

export default Languages;