import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) =>
	createStyles({
		productCard: {
            position: 'relative',
            width: '100%',
            height: 130,
            backgroundColor: '#fff',
            boxShadow: '0px 2px 1px 0px rgba(0, 0, 0, 0.1)'
        },
		productCardFlex: {
            display: 'flex',
            position: 'relative',
            height: '100%',
            width: '90%',
            margin: 'auto'
        },
		informationContainer: {
            position: 'relative',
            width: '80%',
            left: 0
        },
		info: {
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            paddingLeft: 20,
            width: '80%',
            left: 0,
            height: 120,
            margin: 0,
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)'

        },
        img: {
            width: 65,
            marginRight: 20,
            objectFit: 'contain',
        },
        details: {},
        title: {},
        detailMargin: {},
        buttons: {},
        button: {},

	})
);

export default useStyles;
