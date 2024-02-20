import { FaTimes } from 'react-icons/fa';
import { Link as LinkS } from 'react-scroll';
import styled from 'styled-components';

export const SidebarContainer = styled.aside`
	position: fixed;
	z-index: 999;
	width: 100%;
	height: 100%;
	background: #f9eac8;
	display: grid;
	align-items: center;
	top: 0;
	left: 0;
	transition: 1s ease-in-out;
	opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
	top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
	color: #454342;
`;

export const Icon = styled.div`
	position: absolute;
	top: 1.2rem;
	right: 1.5rem;
	background: transparent;
	font-size: 2rem;
	cursor: pointer;
	outline: none;

	@media screen and (max-width: 768px) {
		right: 2rem;
	}
`;
export const SidebarWrapper = styled.div`
	color: #454342;
`;

export const SidebarMenu = styled.ul`
	padding: 0;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(6, 80px);

	@media screen and (max-width: 480px) {
		grid-template-rows: repeat(6, 60px);
	}
`;
export const ExternalLinkMenu = styled.ul`
	display: flex;
	padding: 0;
	justify-content: center;
	align-items: center;
`;

export const LinkA = styled.a`
	padding: 0 1rem;
	color: #454342;
	font-size: 20px;
	align-self: center;

	&:hover {
		color: #ea6c32;
		transform: scale(1.2);
		transition: 0.2s ease-in-out;
	}
`;

export const SidebarLink = styled(LinkS)`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.5rem;
	text-decoration: none;
	color: #454342;
	cursor: pointer;

	&:hover {
		color: #ea6c32;
		transform: scale(1.2);
		transition: 0.2s ease-in-out;
	}
`;