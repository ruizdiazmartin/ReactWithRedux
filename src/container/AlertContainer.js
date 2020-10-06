import React from 'react'

//Redux
import store from './store'
import { Provider } from 'react-redux'

function AlertContainer() {
	return (
		<Provider store={store}>
			<div className="App">
				<h1>React - Redux</h1>
				<div className="alert">Alerta activada</div>
			</div>
		</Provider>
	)
}

//Hago referencia al estado que necesito.
function mapStateToProps(state) {
	return {
		alerts: state.alerts,
	}
}

//Tengo acceso a mi accion
function mapDispatchToProps(dispatch) {
	return {
		fetchNombrequeQuieras: bindActionCreators(tuActionCreado, dispatch),
	}
}

//Es la manera en que conectamos un componente React-Redux.
export default connect(mapStateToProps, mapDispatchToProps)(AlertContainer)