import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';

const Navbar = (props) => {
	const history = useHistory();

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						Techover
					</Typography>
					<Button onClick={() => history.push('/checkout')} color="inherit">
						Checkout
					</Button>
					<Button onClick={() => history.push('/')} color="inherit">
						Products
					</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Navbar;
