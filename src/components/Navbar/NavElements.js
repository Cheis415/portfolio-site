import { Link as LinkS } from 'react-scroll';
import styled from 'styled-components';

export const Nav = styled.nav`
	background: ${({ scrollNav }) =>
		scrollNav ? '#f9eac8' : 'transparent'};
	height: 80px;
	margin-top: -80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	position: sticky;
	top: 0;
	z-index: 100;

	@media screen and (max-width: 960px) {
		transition: 0.8s all ease;
	}
`;

export const NavContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: 80px;
	z-index: 1;
	width: 100%;
	padding: 0 24px;
	max-width: 1100px;

	@media screen and (max-width: 768px) {
		padding: 0;
	}
`;

export const NavLogo = styled.div`
	color: #454342;
	justify-self: flex-start;
	display: flex;
	height: 70px !important;
	align-items: center;
	margin-left: 24px;
	font-weight: bold;
	font-size: 1.5rem;
	cursor: pointer;
`;
export const LogoImage = styled.img`
	max-height: 70px !important;
`
export const MobileIcon = styled.div`
	display: none;

	@media screen and (max-width: 768px) {
		display: block;
		position: absolute;
		color: white;
		top: -10px;
    	right: 0px;
		transform: translate(-100%, 77%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`;

export const NavMenu = styled.ul`
	height: 80px;
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	margin-right: -22px;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const ExternalLinks = styled.ul`
	display: flex;
	color: #454342;
	align-items: center;
	list-style: none;
	text-align: center;
	margin-right: -22px;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const LinkA = styled.a`
	font-size: 1.8em;
	padding: 0 1rem;
	color: #454342;

	&:hover {
		color: #ea6c32;
		transform: scale(1.2);
		transition: 0.2s ease-in-out;
	}
`;

export const NavItem = styled.li`
	height: 80px;
`;

export const NavLinks = styled(LinkS)`
	color: #454342;
	font-size: 1.25em;
	display: flex;
	align-items: center;
	text-align: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 80px;
	cursor: pointer;
	border-bottom: 3px solid transparent;

	&.active {
		border-bottom: 3px solid #ea6c32;
	}

	&:hover {
		color: #ea6c32;
		transition: 0.2s ease-in-out;
	}
`;