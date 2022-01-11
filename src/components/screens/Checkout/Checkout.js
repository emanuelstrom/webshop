import { Typography, Container, Grid, Divider, Button } from '@mui/material';
import useStyles from './styles';
import { connect } from 'react-redux';
import CartItem from '../../CartItem/CartItem';
import { resetCart } from '../../../reduxStore/actions/cartActions';

const Checkout = ({ cart, resetCart }) => {
	const classes = useStyles();

	let cartItems = cart.orders.map((i) => {
		return {
			id: i.product.id,
			quantity: i.quantity
		};
	});

	cartItems = JSON.stringify(cartItems);

	const renderCartItems = () => {
		return cart.orders.map((item) => <CartItem {...item} />);
	};

	return (
		<div id="Checkout__screen" className={classes.screen}>
			<Container maxWidth="lg">
				<div className={classes.productHeader}>
					<Typography variant="h1" className={classes.productsTitle}>
						Checkout
					</Typography>
				</div>
				<Grid container spacing={2} justify="center">
					<Grid item xs={12} md={5}>
						{renderCartItems()}
						<Divider style={{ marginBottom: 20 }} />
						<Grid container spacing={2} justify="center">
							<Grid item xs={10}>
								Subtotal:
							</Grid>
							<Grid item xs={2}>
								{cart.productPrice} kr
							</Grid>
							<Grid item xs={10}>
								Shipping:
							</Grid>
							<Grid item xs={2}>
								{cart.deliveryFee} kr
							</Grid>
							<Grid item xs={10}>
								Total:
							</Grid>
							<Grid item xs={2} style={{ marginBottom: 20 }}>
								{cart.totalPrice} kr
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12} md={7}>
						<div>
							<iframe
								src={'http://localhost:3001/checkout/AAA-123?cartItems=' + cartItems}
								className={classes.klarnaIframe}
							></iframe>
						</div>
					</Grid>
				</Grid>

				<Button onClick={resetCart} variant="contained" className={classes.resetButton}>
					Reset cart
				</Button>
			</Container>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		cart: state.cart
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		resetCart: () => dispatch(resetCart())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
