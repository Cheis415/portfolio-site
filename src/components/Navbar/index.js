import React, { useEffect, useState } from 'react';
import logo from '../../images/bitmap.png';
import { LiaGithubSquare, LiaLinkedin } from "react-icons/lia";
import { GrContactInfo } from "react-icons/gr";
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import Resume from '../../images/2024-Chad-Heisler-Resume.pdf';
import {
	ExternalLinks,
	LogoImage,
	LinkA,
	MobileIcon,
	Nav,
	NavContainer,
	NavItem,
	NavLinks,
	NavLogo,
	NavMenu,
} from './NavElements';

const Navbar = ({ toggle }) => {
	const [scrollNav, setScrollNav] = useState(false);

	const changeNav = () => {
		window.scrollY >= 80 ? setScrollNav(true) : setScrollNav(false);
	};

	useEffect(() => {
		window.addEventListener('scroll', changeNav);
	}, []);

	const toHome = () => {
		scroll.scrollToTop();
	};

	return (
		
			<Nav scrollNav={scrollNav}>
				<NavContainer>
					<NavLogo onClick={toHome}><LogoImage alt="personal C H logo" height='70px' src={logo}/></NavLogo>
					<MobileIcon onClick={toggle}>
						<FaBars color='#5D5A57'/>
					</MobileIcon>
					<NavMenu>
						<NavItem>
							<NavLinks
								aria-label="scrolls to the top of the page"
								to="home"
								smooth={true}
								duration={500}
								spy={true}
								exact="true"
								offset={-80}
							>
								Home
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks
								aria-label="scrolls to about section of the website"
								to="about"
								smooth={true}
								duration={500}
								spy={true}
								// exact='true'
								offset={-80}
							>
								About
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks
								aria-label="scrolls to testimonials section of the website"
								to="testimonials"
								smooth={true}
								duration={500}
								spy={true}
								// exact='true'
								offset={-80}
							>
								Testimonials
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks
								aria-label="scrolls to project section of the website"
								to="projects"
								smooth={true}
								duration={500}
								spy={true}
								exact="true"
								offset={-80}
							>
								Projects
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks
								aria-label="scrolls to contact section of the website"
								to="contact"
								smooth={true}
								duration={500}
								spy={true}
								exact="true"
								offset={-80}
							>
								Contact
							</NavLinks>
						</NavItem>
					</NavMenu>
					<ExternalLinks>
						<LinkA aria-label="opens new tab to Chad Heisler's git hub account" target="_blank" href="https://github.com/Cheis415">
							<LiaGithubSquare />
						</LinkA>
						<LinkA aria-label="opens new tab to Chad Heisler's resume" target="_blank" href={Resume}>
							<GrContactInfo />
						</LinkA>
						<LinkA
							 aria-label="opens new tab to Chad Heisler's Linkedin profile"
							target="_blank"
							href="https://www.linkedin.com/in/chad-heisler/"
						>
							<LiaLinkedin />
						</LinkA>
					</ExternalLinks>
				</NavContainer>
			</Nav>
		
	);
};

export default Navbar;