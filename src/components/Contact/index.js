import emailjs from 'emailjs-com';
import React from 'react';
import { toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SubmitButton } from '../ButtonElements';
import {
	ContactBody,
	ContactContainer,
	ContactForm,
	ContactH1,
	ContactName,
	ContactSubject,
	StyledContainer,
} from './contactElements';

const Contact = () => {
	function sendEmail(e) {
		e.preventDefault();
		if (!e.target.checkValidity()) {
			toast.warn('Please fill in all fields!', {
				role: 'please fill in all fields',
			});
			return;
		}

		emailjs
			.sendForm(
				'service_weq6w9l',
				'template_4fg5qn9',
				e.target,
				'user_0QJgjjyiORmiKGEfmsajj'
			)
			.then(
				(result) => {
					console.log(e.target);
				},
				(error) => {
					console.log(error.text);
				}
			)
			.then(notify())
			.then(resetForm());
	}

	function resetForm() {
		document.getElementById('emailForm').reset();
	}
	const notify = () => {
		toast('Thank You!!');
	};

	return (
		<>
			<ContactContainer id="contact">
				<ContactH1>Send me a message!</ContactH1>
				<ContactForm noValidate onSubmit={sendEmail} id="emailForm">
					<ContactName
						required="true"
						name="name"
						placeholder="Name"
						type="text"
					/>
					<ContactSubject
						required="true"
						name="subject"
						type="text"
						placeholder="Subject"
					/>
					<ContactBody
						required="true"
						name="message"
						wrap="hard"
						type="textArea"
						placeholder="Message Body"
					/>
					<SubmitButton
						value="Send"
						type="submit"
					></SubmitButton>
					<StyledContainer position="top-center" transition={Zoom} />
				</ContactForm>
			</ContactContainer>
		</>
	);
};

export default Contact;