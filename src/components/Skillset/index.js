import React, { useEffect } from 'react';
import './skillset.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollingTestimonials from '../Testimonial2';
import { TopLine } from '../Languages/LanguageElements';
import {
	SkillsetH1,
} from './skillsetElements';
import { ButtonSm } from '../ButtonElements';

const Skillset = ({isActive, expandFunc, toggleActive, toggleStyles}) => {
	
	useEffect(() => {
		AOS.init({ duration: 2000, once: true });
	}, []);
	
	return (
	<>	
		<div className='flex-column' id="skillset">
			<TopLine>What do I know?</TopLine>
			<SkillsetH1>My Skillset</SkillsetH1>
			<div className='flex-container'>
			{isActive.objects.map((elements, index) => (
				<div key={index} onMouseOver={() => {
					toggleActive(index)
				}} className='img-container'>
					<img className={toggleStyles(index)} alt={elements.title} src={elements.img}/>
					
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
		
		<ScrollingTestimonials/>
	</>
		
	);
};

export default Skillset;