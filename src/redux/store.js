// import { createStore } from 'redux'
// import reducers from './reducers'

// const store = createStore(
// 	reducers,
// 	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

// export default store

import { createStore, combineReducers } from 'redux'
import buscador from './reducers/Buscador'
import imagen from './reducers/Imagen'
import paginacion from './reducers/Paginacion'
import resultado from './reducers/Resultado'

const reducer = combineReducers({
	buscador,
	imagen,
	paginacion,
	resultado
})

const store = createStore(reducer)

export default store