import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) =>
	createStyles({
		cartItem: {
			marginBottom: 15,
			background: '#ffffff',
			borderRadius: 5,
			padding: '10px 20px'
		},
		title: {
			color: '#4e6f7d',
			fontWeight: 500,
			marginBottom: 10,
			height: 40,
			fontSize: '18px',
			fontFamily: 'roboto'
			
		},
		chip: {
			padding: '4px 12px',
			background: 'rgba(93,103,91,1)',
			width: 'fit-content',
			borderRadius: 50,
			color: '#ffffff',
			fontWeight: 300,
		},

		chipContainer: {
			display: 'flex',
			justifyContent: 'right',
			alignItems: 'center',
			flexDirection: 'row',
			marginBottom: 10
		},

		img: {
			width: 80,
			marginBottom: 10,
			objectFit: 'contain'
		},
		totalAmmount: {
			width: 'max-content',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			marginLeft: 'auto',
		},
		gridTotalAmmountContainer: {
			
		}
	})
);

export default useStyles;