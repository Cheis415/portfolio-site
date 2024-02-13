import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';

export const StyledContainer = styled(ToastContainer).attrs({
	// custom props
})`
	.Toastify__toast-container {
		background: #f8eacb;
		display: flex;
		margin-top: 20px;
		border: 1px solid #fff;
	}
	.Toastify__toast {
		background: #f8eacb;
		border: 2px solid #fff;
	}
	.Toastify__toast--error {
	}
	.Toastify__toast--warn {
		color: red !important;
	}
	.Toastify__toast--success {
	}
	.Toastify__toast-body {
		background: #f8eacb;
		color: #454342;
		font-weight: bold;
	}
	.Toastify__progress-bar {
		background: #288998;
	}
`;

export const ContactContainer = styled.div`
	min-height: 100vh;
	max-height: 1400px;
	display: flex;
	text-align: center;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: #f9eac8;
`;

export const ContactName = styled.input`
	height: 24px;
	margin: 20px;
	padding: 5px;
	outline: none;
	border: 2px solid #288998;
	border-radius: 0;
	width: 80%;
`;

export const ContactSubject = styled.input`
	height: 24px;
	padding: 5px;
	border-radius: 0;
	border: 2px solid #288998;
	outline: none;
	margin: 20px;
	width: 80%;
`;
export const ContactH1 = styled.h2`
	font-size: 2.5rem;
	color:#ea6c32;
	text-align: center;

	@media screen and (max-width: 480px) {
		font-size: 2rem;
	}
`;

export const ContactBody = styled.textarea`
	height: 200px;
	border-radius: 0;
	border: 2px solid #288998;
	resize: none;
	padding: 5px;
	margin: 20px;
	width: 80%;
`;

export const ContactForm = styled.form`
	align-items: center;
	height: 600px;
`;