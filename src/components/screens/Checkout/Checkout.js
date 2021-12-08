import { Typography, Container, Grid, Divider } from '@mui/material';
import useStyles from './styles';
import { connect } from 'react-redux';
import CartItem from '../../CartItem/CartItem';

const Checkout = ({ cart }) => {
	const classes = useStyles();

	const renderCartItems = () => {
		return cart.orders.map((item) => <CartItem {...item} />);
	};

	return (
		<div id="Checkout__screen" className={classes.screen}>
			<Container maxWidth="sm">
				<div className={classes.productHeader}>
					<Typography variant="h1" className={classes.productsTitle}>
						Checkout
					</Typography>
				</div>
				<Grid container spacing={2} justify="center" >
					<Grid item xs={12}>
						{renderCartItems()}
					</Grid>
				</Grid>

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
					<Grid item xs={2}>
						{cart.totalPrice} kr
					</Grid>
				</Grid>
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
	return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)