import { createTheme } from '@material-ui/core/styles';

const white = '#ffffff';
const neonDark = '#2ad4c3';

const primary = { light: neonDark, main: neonDark, dark: neonDark, contrastText: white };

const h1 = { fontFamily: 'Roboto sans-serif', fontWeight: 400, fontSize: '24px', lineHeight: '30px' };
const h2 = { fontFamily: 'Roboto sans-serif', fontWeight: 400, fontSize: '20px', lineHeight: '24px' };
const h3 = { fontFamily: 'Roboto sans-serif', fontWeight: 400, fontSize: '17px', lineHeight: '20px' };
const h4 = { fontFamily: 'Roboto sans-serif', fontWeight: 400, fontSize: '14px', lineHeight: '20px' };

export const mainTheme = createTheme({
	palette: {
		primary
	},
	typography: {
		fontFamily: [
			'Roboto',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"'
		].join(','),
		h1,
		h2,
		h3,
		h4
	}
});
