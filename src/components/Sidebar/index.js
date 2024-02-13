import React from 'react';
import { FaGithub, FaLinkedin, FaRegAddressCard } from 'react-icons/fa';
import Resume from '../../images/2024-Chad-Heisler-Resume.pdf';
import {
	CloseIcon,
	ExternalLinkMenu,
	Icon,
	LinkA,
	SidebarContainer,
	SidebarLink,
	SidebarMenu,
	SidebarWrapper,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<>
			<SidebarContainer isOpen={isOpen} onClick={toggle}>
				<Icon onClick={toggle}>
					<CloseIcon />
				</Icon>
				<SidebarWrapper>
					<SidebarMenu>
						<SidebarLink to="home" onClick={toggle}>
							Home
						</SidebarLink>
						<SidebarLink to="about" onClick={toggle}>
							About
						</SidebarLink>
						<SidebarLink to="testimonials" onClick={toggle}>
						Testimonials
						</SidebarLink>
						<SidebarLink to="projects" onClick={toggle}>
							Projects
						</SidebarLink>
						<SidebarLink to="contact" onClick={toggle}>
							Contact
						</SidebarLink>
					</SidebarMenu>
					<ExternalLinkMenu>
						<LinkA target="_blank" href="https://github.com/Cheis415">
							<FaGithub />
						</LinkA>
						<LinkA target="_blank" href={Resume}>
							<FaRegAddressCard />
						</LinkA>
						<LinkA
							target="_blank"
							href="https://www.linkedin.com/in/chad-heisler/"
						>
							<FaLinkedin />
						</LinkA>
					</ExternalLinkMenu>
				</SidebarWrapper>
			</SidebarContainer>
		</>
	);
};

export default Sidebar;