import './Photos.css';

import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import img5 from './assets/img5.jpg';
import img6 from './assets/img6.jpg';
import img7 from './assets/img7.jpg';
import img8 from './assets/img8.jpg';
import img9 from './assets/img9.jpg';

const images = [
	{
		id: 0,
		src: img1,
	},
	{
		id: 1,
		src: img2,
	},
	{
		id: 2,
		src: img3,
	},
	{
		id: 3,
		src: img4,
	},
	{
		id: 4,
		src: img5,
	},
	{
		id: 5,
		src: img6,
	},
	{
		id: 6,
		src: img7,
	},
	{
		id: 7,
		src: img8,
	},
	{
		id: 8,
		src: img9,
	},
];

function Photos() {
	return (
		<div className="photo__wrapper">
			{images.map((img) => {
				return (
					<div className="photo__block" key={img.id}>
						<img className="photo" src={img.src} alt="" />
					</div>
				);
			})}
		</div>
	);
}

export default Photos;
