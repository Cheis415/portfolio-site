import React, { useState } from 'react';
import profilePic from '../../images/hero-img.png';
import { ButtonLight } from '../ButtonElements';
import {
	ArrowBottom,
	ArrowForward,
	LandingBg,
	FlexColumn,
	LandingBtnWrapper,
	LandingConatiner,
	LandingContent,
	LandingH1,
	LandingP,
	LandingPic,
	PicContainer,
} from './LandingElements';

const LandingSection = () => {
	const [hover, setHover] = useState(false);

	const onHover = () => {
		setHover(!hover);
	};
	return (
		
			<LandingConatiner id="home">
				<LandingBg>
				</LandingBg>
				<LandingContent>
					
					<FlexColumn>
						<LandingH1>Hi, I'm Chad.</LandingH1>
						<LandingP>I have a passion for beautiful, responsive code.</LandingP>
						<LandingBtnWrapper>
							<ButtonLight
								to="about"
								smooth={true}
								duration={500}
								spy={true}
								onMouseEnter={onHover}
								onMouseLeave={onHover}
								
							>
								About me {hover ? <ArrowForward /> : <ArrowBottom />}
							</ButtonLight>
						</LandingBtnWrapper>
					</FlexColumn>
					<PicContainer>
						<LandingPic alt="portrait image" src={profilePic} />
					</PicContainer>
				</LandingContent>
			</LandingConatiner>
		
	);
};

export default LandingSection;