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
