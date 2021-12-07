import React from 'react';
import { Typography, Container, Grid, Button } from '@mui/material';
import useStyles from './styles';
import { connect } from 'react-redux';
import ProductCard from '../../ProductCard/ProductCard';

const Products = ({ products, loading, error }) => {
	const classes = useStyles();
	console.log(products)

	const renderProductCards = () => {
		if(loading) return [1,2,3,4,5].map((d) => <ProductCard loading={loading} key={d} />)

		const array = products.map((item) => {
			return <ProductCard {...item} loading={loading} key={item.id} />
		});
		return array
	}


	return (
		<div id="Product__screen">
			<Container maxWidth="md">
				<div className="Products__view">
					{/* Header */}
					<div>
						<Typography variant="h1" >Välj varor</Typography>
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

export default connect(mapStateToProps)(Products);
