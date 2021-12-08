import React from 'react';
import { Typography, Container, Grid, Button } from '@mui/material';
import useStyles from './styles';
import { connect } from 'react-redux';
import ProductCard from '../../ProductCard/ProductCard';
import { incrementProduct, decrementProduct } from '../../../reduxStore/actions';

const Products = ({ products, loading, error, onIncrement, onDecrement }) => {
	const classes = useStyles();

	
	const showSkeletonLoaders = () => {
		return [1,2,3,4,5].map((d) => <ProductCard loading={true} key={d} />)
	}

	const renderProductCards = () => {
		if(loading) return showSkeletonLoaders();

		const array = products.map((prod, i) => {
			return (
				<ProductCard 
					{...prod} 
					loading={false} 
					key={i} 
					onIncrement={() => onIncrement(prod)}
					onDecrement={() => onDecrement(prod)}
					
				/>
			)
		});
		return array
	}


	return (
		<div id="Product__screen">
			<Container maxWidth="md">
				<div className="Products__view">
					{/* Header */}
					<div>
						<Typography variant="h1" className={classes.productsTitle}>
							Välj varor
						</Typography>
					</div>
					{/* End Header */}

					{/* Items */}
					<Grid container spacing={2}>
						<Grid item xs={12}>
							{renderProductCards()}
						</Grid>
					</Grid>
					{/* End Items */}
				</div>
			</Container>
		</div>
	)
	
};

const mapStateToProps = (state) => {
	const { items, loading, error } = state.products;
	return { products: items, loading, error }
}

const mapDispatchToProps = (dispatch) => {
	return {
		onIncrement: (data) => dispatch(incrementProduct(data)),
		onDecrement: (data) => dispatch(decrementProduct(data))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
