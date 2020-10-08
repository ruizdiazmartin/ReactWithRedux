import React from 'react';

export function AlertComponent({ label, changeStatus }) {
	// const {
	// 	label,
	// 	changeStatus
	// } = props;

	return (
		<div className="App">
			<h1>{label}</h1>
			<div className="alert">Alerta activada</div>
			<input type="text" onChange={changeStatus}></input>
		</div>
	)
}

// export function Alert ({label, changeStatus}) {

// }