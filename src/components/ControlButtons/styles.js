import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) =>
	createStyles({
		buttons: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			flexDirection: 'column',
			right: '0px',
			height: '100%'
		},
		button: {
			color: '#05204A'
		},
		buttonDisabled: {
			color: '#f7f8fa'
		},
		quantity: {
			background: '#00000017',
			padding: '7px 12px',
			borderRadius: '50%',
			color: '#4e6f7d'
		},
		placeholder: {
			width: 33,
			height: 33
		}
	})
);

export default useStyles;