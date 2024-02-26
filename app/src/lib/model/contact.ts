import { type IconDefinition, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export interface ContactOption {
	name: string;
	icon: IconDefinition;
	link: string;
	color: string;
}

export const ContactOptions: ContactOption[] = [
	{
		name: 'My Github',
		icon: faGithub,
		link: 'https://github.com/Billuc',
		color: 'text-teal-50'
	},
	{
		name: 'Linkedin',
		icon: faLinkedin,
		link: 'https://www.linkedin.com/in/luc-billaud',
		color: 'text-sky-600'
	},
	{
		name: 'Email : luc.billaud.pro@gmail.com',
		icon: faEnvelope,
		link: 'mailto:luc.billaud.pro@gmail.com',
		color: 'text-orange-700'
	}
];
