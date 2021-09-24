import React from 'react';
import { connect } from 'react-redux';
import ScreensRoot from '../screens/Root';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<ScreensRoot />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {};
};

export default connect(mapStateToProps)(App);
