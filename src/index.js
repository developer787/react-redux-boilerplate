import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import RootReducer from './reducer'
import App from './App';
import * as serviceWorker from './serviceWorker';


const store = createStore(RootReducer)

ReactDOM.render(<Provider store={store}>
	<App />
	</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
