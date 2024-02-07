import React, { useEffect } from 'react';
import './portfolio.css';
import { motion } from "framer-motion"

import AOS from 'aos';
import 'aos/dist/aos.css';
import { TopLine } from '../Languages/LanguageElements';
import {
	PortfolioH1,
} from './portfolioElements';
import { ButtonSm } from '../ButtonElements';

const Portfolio = ({isActive, toggleActive, toggleStyles}) => {
	console.log('is active:', isActive.objects)
	useEffect(() => {
		AOS.init({ duration: 2000, once: true });
	}, []);
	
	return (
		<div className='flex-column' id="projects">
			<TopLine>What have I done?</TopLine>
			<PortfolioH1>My Projects</PortfolioH1>
			<div className='flex-container'>
			{isActive.objects.map((elements, index) => (
				<div key={index} onClick={() => {
					toggleActive(index)
				}} className='img-container'>
					<img className={toggleStyles(index)} alt="img" src={elements.img}/>
					
					<div className='card'>
						<div className='card-title-container'>
							<h2 className='card-title'>{elements.title}</h2>
							<p className='brief-description'>{elements.short}</p>
						</div>
						<div className='card-footer'>
							<div className='btn-container'>
								<ButtonSm to={elements.path}>learn more</ButtonSm>
							</div>
						</div>
					</div>
				</div>
			))}
			</div>
		</div>
		// <FlexContainerGreen id="projects">
		// 	<PortfolioContainer>
			
		// 		<TopLine>What have I done?</TopLine>
		// 		<PortfolioH1>My Projects</PortfolioH1>
		// 		<PortfolioWrap>
		// 			{/* <CardWrap>
		// 				<PortfolioCard id="card" data-aos="zoom-in">
		// 					<ProjectPic src={Project1} />
		// 					<ProjectH2>Clever Counsel</ProjectH2>
		// 					<ButtonR to="/details">learn more</ButtonR>
		// 				</PortfolioCard>
		// 			</CardWrap> */}
					
					
		// 			{/* <CardWrap>
		// 				<PortfolioCard data-aos="zoom-in">
		// 					<ProjectPic src={Project2} />
		// 					<ProjectH2>Speaker Box</ProjectH2>
		// 					<ButtonR to="/details2">learn more</ButtonR>
		// 				</PortfolioCard>
		// 			</CardWrap>
		// 			<CardWrap>
		// 				<PortfolioCard data-aos="zoom-in">
		// 					<ProjectPic src={Project3} />
		// 					<ProjectH2>Micro Blog</ProjectH2>
		// 					<ButtonR to="/details3">learn more</ButtonR>
		// 				</PortfolioCard>
		// 			</CardWrap>
		// 			<CardWrap>
		// 				<PortfolioCard data-aos="zoom-in">
		// 					<ProjectPic src={Project4} />
		// 					<ProjectH2>Restaurants</ProjectH2>
		// 					<ButtonR to="/details4">learn more</ButtonR>
		// 				</PortfolioCard>
		// 			</CardWrap> */}
		// 		</PortfolioWrap>
		// 	</PortfolioContainer>
		// </FlexContainerGreen>
	);
};

export default Portfolio;