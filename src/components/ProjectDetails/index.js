import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonLightR } from '../ButtonElements';
import {
	DetailsContainer,
	DetailsWrapper,
	DetailsRow,
	Column1,
	TextWrapper,
	FlexContainer,
	TopLine,
	Heading,
	TextBody,
	Link,
	BtnWrap,
	Column2,
	ImgWrap,
	Img,
} from './ProjectDetailsElements';

const ProjectDetails = ({
	lightBg,
	id,
	imgStart,
	topLine,
	lighttext,
	headline,
	darktext,
	description,
	buttonLabel,
	img,
	alt,
	link,
}) => {
	var navigate = useNavigate();
	const GoBack = () => {
		return navigate(-1);
	  };
	
	return (
		<FlexContainer>
			<DetailsContainer lightB={lightBg} id={id}>
				<DetailsWrapper>
					<DetailsRow imgStart={imgStart}>
						<Column1>
							<TextWrapper>
								<TopLine>{topLine}</TopLine>
								<Heading lighttext={lighttext}>{headline}</Heading>
								<TextBody darktext={darktext}>{description}</TextBody>

								<BtnWrap>
									{/* <Link target="_blank" rel="noreferrer" href={link}>
										<ButtonLightR primary="true" dark="false">
											Link
										</ButtonLightR>
									</Link> */}
									<ButtonLightR onClick={GoBack} primary="true" dark="false">
										{buttonLabel}
									</ButtonLightR>
								</BtnWrap>
							</TextWrapper>
						</Column1>
						
					</DetailsRow>
				</DetailsWrapper>
			</DetailsContainer>
		</FlexContainer>
	);
};

export default ProjectDetails;