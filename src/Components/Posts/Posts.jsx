import './Posts.css';
import Post from '../Post/post';

const avatar1 = 'https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg';
const postImg1 = 'https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale';

const avatar2 = 'https://www.dynamomania.com/images/store/galleries/0122/4627/post581948_b04d3_content.jpg';
const postImg2 = 'https://pbs.twimg.com/media/E7s-7fPXIAA5Vvu?format=jpg&name=large';

const avatar3 = 'https://upload.wikimedia.org/wikipedia/uk/c/c2/Paris_Saint-Germain_F.C.svg';
const postImg3 = 'https://static.ukrinform.com/photos/2021_08/thumb_files/630_360_1628681278-169.jpeg';

const posts = [
	{
		id: 0,
		name: 'Anakin skywalker',
		avatar: avatar1,
		nickname: '@dart_vader',
		content: 'WTF? Who is Ray? Why she is Skywalker? Luke...?',
		image: postImg1,
		date: 'Feb 26',
	},
	{
		id: 1,
		name: 'Andriy Shevchenko',
		avatar: avatar2,
		nickname: '@jksheva7',
		content:
			'Today, my contract with the Ukrainian Football Association came to the end. I spent five years with the National team. It was hard work that proved that we are capable of playing modern football. I am grateful…',
		image: postImg2,
		date: 'Aug 1',
	},
	{
		id: 2,
		name: 'Paris Saint-Germain',
		avatar: avatar3,
		nickname: '@PSG_inside',
		content: '🤩',
		image: postImg3,
		date: 'Aug 11',
	},
];

function Posts() {
	return (
		<div className="Posts">
			{posts.map((post) => (
				<Post {...post} key={post.id} />
			))}
		</div>
	);
}

export default Posts;
