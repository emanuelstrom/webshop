import Products from '../components/screens/Products/Products';
import Checkout from '../components/screens/Checkout/Checkout';
import Home from '../components/screens/Home/Home';

const NoMatch = () => {
	return <div>404</div>;
};

export const ROUTES = [
	{
		path: '/checkout',
		exact: true,
		component: Checkout
	},
	{
		path: '/products',
		exact: true,
		component: Products
	},
	{
		path: '/',
		exact: true,
		component: Home
	},
	{
		path: '*',
		exact: true,
		component: NoMatch
	}
];
