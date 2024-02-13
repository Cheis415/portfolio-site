import React from 'react';
import { Button } from '../ButtonElements';
import Languages from '../Languages';
import ScrollingTestimonials from '../TestimonialsSection';
import {
	AboutContainer,
	AboutRow,
	AboutWrapper,
	BtnWrap,
	Column1,
	Column2,
	Heading,
	Img,
	ImgWrap,
	TextBody,
	TextWrapper,
	TopLine,
} from './aboutElements';
const AboutSection = ({
	lightBg,
	id,
	imgStart,
	topLine,
	lightText,
	headline,
	darkText,
	description,
	descriptionTwo,
	descriptionThree,
	buttonLabel,
	alt,
}) => {
	return (
		<>
		
			<AboutContainer lightB={lightBg} id={id}>
								<TopLine>{topLine}</TopLine>
								<Heading lighttext={lightText}>{headline}</Heading>
				<AboutWrapper>
					<AboutRow imgStart={imgStart}>
						<Column1>
							<TextWrapper>
								<TextBody darktext={darkText}>{description}</TextBody>
								<TextBody darktext={darkText}>{descriptionTwo}</TextBody>
								<TextBody darktext={darkText}>{descriptionThree}</TextBody>
								<BtnWrap>
									<Button
										to="languages"
										smooth={true}
										duration={500}
										spy={true}
										$primary
										dark="true"
									>
										{buttonLabel}
									</Button>
								</BtnWrap>
							</TextWrapper>
						</Column1>
						{/* <Column2>
							<ImgWrap>
								<Img src={aboutPic} alt={alt} />
							</ImgWrap>
						</Column2> */}
					</AboutRow>
				</AboutWrapper>
			</AboutContainer>
			<Languages />
			{/* <ScrollingTestimonials/> */}
		</>
	);
};

export default AboutSection;