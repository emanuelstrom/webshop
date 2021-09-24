import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import IsLoading from './components/IsLoading/IsLoading.js';
import './index.css';
import { Provider } from 'react-redux';
import configureStore from './reduxStore/configureStore';
import { ThemeProvider } from '@mui/material/styles';
import { mainTheme } from './style/material-themes';

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			<ThemeProvider theme={mainTheme}>
				<Suspense fallback={<IsLoading />}>
					<App />
				</Suspense>
			</ThemeProvider>
		</React.StrictMode>
	</Provider>,
	document.getElementById('root')
);
