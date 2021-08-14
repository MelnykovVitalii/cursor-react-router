import './Contact.css';
import genderFemale from '../Contact/assets/gender-female.svg';
import genderMale from '../Contact/assets/gender-male.svg';
import genderUndefined from '../Contact/assets/gender-undefined.svg';
import { NavLink, Switch, Route, useRouteMatch } from 'react-router-dom';

function genderIcon(gender) {
	if (gender === 'female') {
		return genderFemale;
	}
	if (gender === 'male') {
		return genderMale;
	}
	if (gender === 'agender') {
		return genderUndefined;
	}
}

function Contact({ firstName, lastName, phone, gender }) {
	const match = useRouteMatch('');
	return (
		<div className="contact">
			<NavLink to={`${match.url}/${firstName}${lastName}`}>
				<div className="contac-icon">
					<svg className="human-icon" viewBox="0 0 512 512">
						<path d="M241.75,250.8a73.34,73.34,0,1,1,73.33-73.34A73.42,73.42,0,0,1,241.75,250.8Zm0-125.53a52.2,52.2,0,1,0,52.19,52.19A52.25,52.25,0,0,0,241.75,125.27Z" />
						<path d="M255.45,407.87H124.67L114.1,397.3A127.79,127.79,0,0,1,241.75,269.66a126.36,126.36,0,0,1,78.4,26.91,130.26,130.26,0,0,1,10.06,8.71l7.62,7.33-14.66,15.24-7.62-7.33a107.49,107.49,0,0,0-8.39-7.28,105.46,105.46,0,0,0-65.41-22.44,106.67,106.67,0,0,0-106,95.93H255.45Z" />
						<polygon points="313.92 407.56 297.78 407.41 250.62 350.53 266.9 337.04 306.07 384.29 381.88 296.3 397.9 310.1 313.92 407.56" />
					</svg>
				</div>
				<div className="contact__content">
					<div className="contact__name">
						<div className="contact__first-name">
							<span>{firstName}</span>
						</div>
						<div className="contact__last-name">
							<span>{lastName}</span>
						</div>
					</div>
					<div className="contact__phone">
						<div className="phone">{phone}</div>
					</div>
				</div>
			</NavLink>
			<Switch>
				<Route path={`${match.path}/${firstName}${lastName}`}>
					<InfoFromContact firstName={firstName} gender={gender} lastName={lastName} phone={phone} />
				</Route>
			</Switch>
		</div>
	);
}

export default Contact;

function InfoFromContact({ firstName, lastName, gender, phone }) {
	return (
		<div className="info__contact">
			<div className="info__first-name">
				<span className="info__title">FirstName:</span>
				<span className="info__body">{firstName}</span>
			</div>
			<div className="info__last-name">
				<span className="info__title">LastName:</span>
				<span className="info__body">{lastName}</span>
			</div>
			<div className="info__gender">
				<span className="info__title">Gender:</span>
				<img className="gender-icon" src={genderIcon(gender)} alt="" />
			</div>
			<div className="info__phone">
				<span className="info__title">Phone</span>
				<span className="info__body">{phone} </span>
			</div>
		</div>
	);
}
