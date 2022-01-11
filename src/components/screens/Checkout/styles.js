import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) =>
	createStyles({
		productsTitle: {
			fontFamily: 'roboto',
			marginTop: 20
		},
		screen: {
			paddingBottom: 50
		},
		productHeader: {
			display: 'flex',
			justifyContent: 'space-between',
			marginBottom: 30,
			fontFamily: 'roboto'
		},
		boldText: {
			fontWeight: 700,
			fontSize: '1.2rem'
		},
		subTotal: {
			fontWeight: 700,
			fontSize: '0.8rem'
		},
		resetButton: {
			marginBottom: '20px'
		},

		klarnaIframe: {
			display: 'flex',
			justifyContent: 'center',
			width: '100%',
			height: '1000px',
			border: 0,
			margin: '0 auto',
			padding: '10px 20px',
			background: '#ffffff',
			borderRadius: '5px',
			marginBottom: '15px',
			overflowX: 0
		}
	})
);

export default useStyles;
