import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) =>
	createStyles({
		header: {
			display: 'flex',
			justifyContent: 'space-between',
			marginBottom: 30
		},
		productsTitle: {
			fontFamily: 'roboto'
		},        
	})
);

export default useStyles;
