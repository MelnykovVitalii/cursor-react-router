import './App.css';
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom';
import Contacts from './Components/Contacts/Contacts';
import HomeComponent from './Components/HomeComponent/HomeComponent';
import Posts from './Components/Posts/Posts';
import Photos from './Components/Photos/Photos';

function App() {
	return (
		<Router basename="/cursor-react-router">
			<div className="App">
				<nav>
					<ul className="menu">
						<li className="menu__item">
							<NavLink exact to="/home" activeClassName={'selected'}>
								Home
							</NavLink>
						</li>
						<li className="menu__item">
							<NavLink to="/publications" activeClassName={'selected'}>
								Publications
							</NavLink>
						</li>
						<li className="menu__item">
							<NavLink to="/photos" activeClassName={'selected'}>
								Photos
							</NavLink>
						</li>
						<li className="menu__item">
							<NavLink to="/contacts" activeClassName={'selected'}>
								Contacts
							</NavLink>
						</li>
					</ul>
				</nav>
				<Switch>
					<Route exact path="/home" component={HomeComponent} />
					<Route path="/publications" component={Posts} />
					<Route path="/photos" component={Photos} />
					<Route path="/contacts" component={Contacts} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
// import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// // This site has 3 pages, all of which are rendered
// // dynamically in the browser (not server rendered).
// //
// // Although the page does not ever refresh, notice how
// // React Router keeps the URL up to date as you navigate
// // through the site. This preserves the browser history,
// // making sure things like the back button and bookmarks
// // work properly.

// export default function BasicExample() {
// 	return (
// 		<Router>
// 			<div>
// 				<ul>
// 					<li>
// 						<Link to="/">Home</Link>
// 					</li>
// 					<li>
// 						<Link to="/about">About</Link>
// 					</li>
// 					<li>
// 						<Link to="/dashboard">Dashboard</Link>
// 					</li>
// 				</ul>

// 				<hr />

// 				{/*
//           A <Switch> looks through all its children <Route>
//           elements and renders the first one whose path
//           matches the current URL. Use a <Switch> any time
//           you have multiple routes, but you want only one
//           of them to render at a time
//         */}
// 				<Switch>
// 					<Route exact path="/">
// 						<Home />
// 					</Route>
// 					<Route path="/about">
// 						<About />
// 					</Route>
// 					<Route path="/dashboard">
// 						<Dashboard />
// 					</Route>
// 				</Switch>
// 			</div>
// 		</Router>
// 	);
// }

// // You can think of these components as "pages"
// // in your app.

// function Home() {
// 	return (
// 		<div>
// 			<h2>Home</h2>
// 		</div>
// 	);
// }

// function About() {
// 	return (
// 		<div>
// 			<h2>About</h2>
// 		</div>
// 	);
// }

// function Dashboard() {
// 	return (
// 		<div>
// 			<h2>Dashboard</h2>
// 		</div>
// 	);
// }
