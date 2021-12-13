import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import { connect } from 'react-redux'

const Navbar = (props) => {
	const history = useHistory();

const getNumberOfCartItems = () => {
	return 5
}

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<Typography onClick={() => history.push('/')} variant="h6" component="div" sx={{ flexGrow: 1, cursor: 'pointer' }}>
						Miningbutiken.se
					</Typography>
					<Button onClick={() => history.push('/')} color="inherit">
						HEM
					</Button>
					<Button onClick={() => history.push('/products')} color="inherit">
						PRODUKTER
					</Button>	
					<IconButton onClick={() => history.push('/checkout')} size="small">
						<Badge badgeContent={getNumberOfCartItems()} color="secondary">
							<ShoppingCartIcon style={{marginLeft: 5}} />
						</Badge>
					</IconButton>
					
				</Toolbar>
			</AppBar>
		</Box>
	);
};



export default connect(null)(Navbar);
