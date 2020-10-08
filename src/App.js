import React from 'react';
import Alert from './containers/AlertContainer';

//Redux3

import store from './store'
import { Provider } from 'react-redux'

function App() {
	return (
		<Provider store={store}>
			<Alert />
		</Provider>
	)
}

export default App