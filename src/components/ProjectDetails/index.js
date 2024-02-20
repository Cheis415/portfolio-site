import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonReg } from '../ButtonElements';
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
									<Link target="_blank" rel="noreferrer" href={link}>
										<ButtonReg primary="true" dark="false">
											Link <span className='sr-only'>opens tab in new window</span>
										</ButtonReg>
									</Link>
									<ButtonReg onClick={GoBack} primary="true" dark="false">
										{buttonLabel}
									</ButtonReg>
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