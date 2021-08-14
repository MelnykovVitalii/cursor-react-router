import './HomeComponent.css';
import photo from './assets/photo.jpg';

function HomeComponent() {
	return (
		<div className="Home">
			<div className="Home__title">
				<p>Welcome to my App</p>
			</div>
			<div className="Home__photo">
				<img src={photo} alt="" />
			</div>
		</div>
	);
}

export default HomeComponent;
