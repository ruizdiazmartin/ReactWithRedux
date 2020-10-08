import React from 'react';

//Recibo en la funcion los parametros destructurados que voy a utilizar de props
export function AlertComponent({ label, changeStatus }) {

	return (
		<div className="App">
			<h1>{label}</h1>
			<div className="alert">Alerta activada</div>
			<input type="text" onChange={changeStatus}></input>
		</div>
	)
}

