import React from 'react';
import { UPDATE_TEST_ALERT } from '../actions/alertAction';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { AlertComponent } from '../components/AlertComponent'

class AlertContainer extends React.Component {
	constructor(props) {
		super(props);
		this.props.fetchNombrequeQuieras('hola Gaston')
	}
	handleChangeStatus = (event) => {
		this.props.fetchNombrequeQuieras(event.target.value)
	}
	render() {
		//debugger;
		return (
			<AlertComponent label={this.props.alerts.textAlert} changeStatus={this.handleChangeStatus} />
		)
	}
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
		fetchNombrequeQuieras: bindActionCreators(UPDATE_TEST_ALERT, dispatch),
	}
}

//Es la manera en que conectamos un componente React-Redux.
export default connect(mapStateToProps, mapDispatchToProps)(AlertContainer)