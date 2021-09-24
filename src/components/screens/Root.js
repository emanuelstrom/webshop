import React from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import Navbar from '../Navbar/Navbar';

const RouteWithSubRoutes = (route) => {
	return (
		<Route
			path={route.path}
			exact={route.exact}
			render={(props) => <route.component {...props} routes={route.routes} />}
		/>
	);
};

const Content = (props) => {
	const location = useLocation();
	return (
		<section className="route-page">
			<Switch location={location}>
				{ROUTES.map((route, i) => {
					return (
						<RouteWithSubRoutes
							key={i}
							{...route}
							cartIsOpen={props.cartIsOpen}
							setCartIsOpen={props.setCartIsOpen}
						/>
					);
				})}
			</Switch>
		</section>
	);
};

const ScreensRoot = () => {
	return (
		<Router>
			<Navbar />
			<Content />
		</Router>
	);
};

export default ScreensRoot;
