import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonReg} from '../ButtonElements';
import {
	DetailsContainer,
	DetailsWrapper,
	DetailsRow,
	Column1,
	TextWrapper,
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
		console.log("HELLLL000")
		return navigate(-1);
	  };
	
	return (
		<>
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
											Link
										</ButtonReg>
									</Link>
									<ButtonReg onClick={GoBack} primary="true" dark="false">
										{buttonLabel}
									</ButtonReg>
								</BtnWrap>
							</TextWrapper>
						</Column1>
						<Column2>
							<ImgWrap>
								<Img src={img} alt={alt} />
							</ImgWrap>
						</Column2>
					</DetailsRow>
				</DetailsWrapper>
			</DetailsContainer>
		</>
	);
};

export default ProjectDetails;