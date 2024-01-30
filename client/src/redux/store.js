import { createStore ,applyMiddleware,compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducer';

// This creates an enhancer to connect the app with the Redux DevTools 
// extension in the browser.

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ; //esta linea sirve para conectar nuestra app con la extension redux devtools con el navegador

// This creates the Redux store using the reducer and the enhancer. 
// The enhancer is created with applyMiddleware(thunkMiddleware), 
// allowing to dispatch thunk functions for making requests to an API 
// or server.

const store = createStore (
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware)) //esta linea nos sirver para hacer peticiones a una API/SERVIDOR
);

export default store;
