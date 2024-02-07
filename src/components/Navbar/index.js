import React, { useEffect, useState } from 'react';
import logo from '../../images/new-logo-jm-1.png';
import { LiaGithubSquare, LiaLinkedin } from "react-icons/lia";
import { GrContactInfo } from "react-icons/gr";
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import Resume from '../../images/HeislerSeptemberResume.pdf';
import {
	ExternalLinks,
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
					<NavLogo onClick={toHome}><img alt="personal C H logo" height='70px' src={logo}/></NavLogo>
					<MobileIcon onClick={toggle}>
						<FaBars color='#5D5A57'/>
					</MobileIcon>
					<NavMenu>
						<NavItem>
							<NavLinks
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
								to="languages"
								smooth={true}
								duration={500}
								spy={true}
								// exact='true'
								offset={-80}
							>
								Skillset
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks
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
						<LinkA target="_blank" href="https://github.com/Cheis415">
							<LiaGithubSquare />
						</LinkA>
						<LinkA target="_blank" href={Resume}>
							<GrContactInfo />
						</LinkA>
						<LinkA
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